import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import mongoose from 'mongoose';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await connectDB();

        // Check connection state
        const state = mongoose.connection.readyState;
        const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];

        if (state !== 1) {
            throw new Error(`MongoDB is ${states[state]}`);
        }

        // Ping the database
        await mongoose.connection.db.admin().ping();

        // Get database stats
        const stats = await mongoose.connection.db.stats();

        return NextResponse.json({
            status: 'healthy',
            message: 'MongoDB connection is active',
            connectionState: states[state],
            database: mongoose.connection.db.databaseName,
            collections: stats.collections,
            dataSize: `${(stats.dataSize / 1024).toFixed(2)} KB`,
            indexes: stats.indexes,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Health check failed:', error);

        return NextResponse.json(
            {
                status: 'unhealthy',
                message: 'MongoDB connection failed',
                error: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date().toISOString(),
            },
            { status: 503 }
        );
    }
}
