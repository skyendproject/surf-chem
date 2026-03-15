import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const allowedOrigins = [
    'https://www.surfchem.co.uk',
    'https://surfchem-admin.flutterflow.app',
];

export function OPTIONS(request) {
    const origin = request.headers.get('origin');
    const isAllowed = allowedOrigins.includes(origin);

    return NextResponse.json(null, {
        status: 204,
        headers: {
            ...(isAllowed && { 'Access-Control-Allow-Origin': origin }),
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}

export async function POST(request) {
    const origin = request.headers.get('origin');
    const isAllowed = allowedOrigins.includes(origin);

    try {
        const body = await request.json();
        const { to, subject, content } = body;

        await sgMail.send({
            to,
            from: 'notifications@surfchem.co.uk',
            subject,
            html: content,
        });

        return NextResponse.json(
            { message: 'Email sent successfully' },
            {
                status: 200,
                headers: isAllowed
                    ? { 'Access-Control-Allow-Origin': origin }
                    : {},
            }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to send email', details: error.message },
            {
                status: 500,
                headers: isAllowed
                    ? { 'Access-Control-Allow-Origin': origin }
                    : {},
            }
        );
    }
}
