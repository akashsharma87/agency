import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('antigravity');
        const collection = db.collection('contacts');

        // Create contact document
        const contact = {
            name,
            email,
            company: company || null,
            message,
            createdAt: new Date(),
            status: 'new',
            ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
        };

        // Insert into MongoDB
        const result = await collection.insertOne(contact);

        return NextResponse.json(
            {
                success: true,
                message: 'Contact form submitted successfully',
                id: result.insertedId
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to submit contact form. Please try again.' },
            { status: 500 }
        );
    }
}
