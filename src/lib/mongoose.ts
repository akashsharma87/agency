import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
    throw new Error('❌ MONGODB_URI is not defined in .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

// Connection options for reliability and performance
const options = {
    bufferCommands: false,
    maxPoolSize: 10,
    minPoolSize: 2,
    socketTimeoutMS: 45000,
    serverSelectionTimeoutMS: 10000,
    family: 4, // Force IPv4
};

// Global cache to prevent multiple connections in development
declare global {
    var mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<typeof mongoose> {
    if (cached.conn) {
        console.log('✅ Using cached MongoDB connection');
        return cached.conn;
    }

    if (!cached.promise) {
        console.log('🔄 Establishing new MongoDB connection...');

        // Set up connection event listeners
        mongoose.connection.on('connected', () => {
            console.log('✅ Mongoose connected to MongoDB Atlas');
        });

        mongoose.connection.on('error', (err) => {
            console.error('❌ Mongoose connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('⚠️  Mongoose disconnected from MongoDB');
        });

        // Handle process termination
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('🔌 Mongoose connection closed due to app termination');
            process.exit(0);
        });

        cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
            console.log('✅ MongoDB connected successfully via Mongoose');
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error('\n❌ MONGODB CONNECTION FAILED');
        console.error('Please check:');
        console.error('1. MongoDB Atlas cluster is running');
        console.error('2. Network/firewall allows MongoDB connections');
        console.error('3. Connection string is correct in .env.local');
        console.error('4. IP address is whitelisted in MongoDB Atlas\n');
        throw e;
    }

    return cached.conn;
}

export default connectDB;
