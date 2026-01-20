import { MongoClient, ServerApiVersion } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error('❌ MONGODB_URI is not defined in .env.local');
}

const uri = process.env.MONGODB_URI;

// Enhanced options with retry logic, timeouts, and connection pooling
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    // Connection timeout settings
    connectTimeoutMS: 10000, // 10 seconds
    socketTimeoutMS: 45000,  // 45 seconds
    serverSelectionTimeoutMS: 10000, // 10 seconds

    // Retry settings
    retryWrites: true,
    retryReads: true,
    maxPoolSize: 10,
    minPoolSize: 2,

    // Additional reliability settings
    maxIdleTimeMS: 60000,
    waitQueueTimeoutMS: 10000,

    // DNS resolution settings
    family: 4, // Force IPv4 to avoid IPv6 DNS issues
    tls: true,
    tlsAllowInvalidCertificates: false,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Helper function to create connection with retry logic
async function createMongoConnection(maxRetries = 3): Promise<MongoClient> {
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`🔄 Attempting MongoDB connection (attempt ${attempt}/${maxRetries})...`);
            const mongoClient = new MongoClient(uri, options);
            await mongoClient.connect();

            // Test the connection
            await mongoClient.db('admin').command({ ping: 1 });
            console.log('✅ MongoDB connection successful!');

            return mongoClient;
        } catch (error) {
            lastError = error as Error;
            console.error(`❌ Connection attempt ${attempt} failed:`, error);

            if (attempt < maxRetries) {
                const waitTime = Math.min(1000 * Math.pow(2, attempt - 1), 5000); // Exponential backoff, max 5s
                console.log(`⏳ Retrying in ${waitTime}ms...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
            }
        }
    }

    // All retries failed
    console.error('\n❌ MONGODB CONNECTION FAILED AFTER ALL RETRIES');
    console.error('Please check:');
    console.error('1. MongoDB Atlas cluster is running');
    console.error('2. Network/firewall allows MongoDB connections');
    console.error('3. Connection string is correct in .env.local');
    console.error('4. IP address is whitelisted in MongoDB Atlas\n');

    throw new Error(`MongoDB connection failed: ${lastError?.message || 'Unknown error'}`);
}

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        globalWithMongo._mongoClientPromise = createMongoConnection();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    clientPromise = createMongoConnection();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
