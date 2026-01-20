// This module is imported in the root layout to ensure MongoDB connection is tested on startup
import clientPromise from './mongodb';

// Immediately test MongoDB connection on module load
(async () => {
    try {
        const client = await clientPromise;
        await client.db('admin').command({ ping: 1 });
        console.log('\n✅ MongoDB connected successfully\n');
    } catch (error) {
        console.error('\n❌ MongoDB connection failed:', error, '\n');
    }
})();

export { }; // Make this a module
