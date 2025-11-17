import { getFormulation } from '@/lib/backend';
import { Formulation } from '@/types/formulation';
import { renderToStream } from '@react-pdf/renderer';
import { NextRequest, NextResponse } from 'next/server';
import FormulationGuidePDF from './FormulationGuidePDF';

export const runtime = 'nodejs';

export async function GET(
    _req: NextRequest,
    { params }: { params: { id: string } },
) {
    const { id } = await params
    const formulation = await getFormulation(id) as Formulation;
    const stream = await renderToStream(
        <FormulationGuidePDF formulation={formulation} />,
    );
    const filename = formulation.title || formulation.documentTitle
    return new NextResponse(stream as unknown as ReadableStream, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename="${filename}.pdf"`,
        },
    });
}
