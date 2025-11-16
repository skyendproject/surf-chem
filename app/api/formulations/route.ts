import { getFormulations } from '@/lib/backend';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const data = await getFormulations()
        return NextResponse.json(data, { status: 200 });
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: 'Failed to fetch todos' },
            { status: 500 },
        );
    }
}
