// instrumentation.ts - This file is automatically loaded by Next.js on server startup
export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        // Dynamically import to avoid issues with edge runtime
        const { default: connectDB } = await import('./lib/mongoose');

        try {
            await connectDB();
            console.log('\n✅ MongoDB connected successfully via Mongoose\n');
        } catch (error) {
            console.error('\n❌ MongoDB connection failed:', error, '\n');
        }
    }
}
