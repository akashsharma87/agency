import connectDB from './mongoose';
import mongoose from 'mongoose';

/**
 * Ensures MongoDB connection is established before executing database operations
 * Use this in API routes and server components
 */
export async function withDB<T>(
    operation: () => Promise<T>
): Promise<T> {
    try {
        await connectDB();
        return await operation();
    } catch (error) {
        console.error('Database operation failed:', error);
        throw error;
    }
}

/**
 * Get the current connection state
 */
export function getConnectionState(): string {
    const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
    return states[mongoose.connection.readyState];
}

/**
 * Check if database is connected
 */
export function isConnected(): boolean {
    return mongoose.connection.readyState === 1;
}

export { connectDB };
