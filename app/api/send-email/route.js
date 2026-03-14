import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {

    try {
        // Parse the JSON body from the request
        const body = await request.json();
        const { to, subject, content } = body;

        const msg = {
            to: to,
            from: 'notifications@surfchem.co.uk', // Must be verified in SendGrid
            subject: subject,
            html: content,
        };

        await sgMail.send(msg);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('SendGrid Error:', error);
        console.log(error.response);
        console.log(error.response.body.errors);
        return NextResponse.json(
            { error: 'Failed to send email', details: error.message },
            { status: 500 }
        );
    }
}
