import { Product } from '@/data/technologies/agriculturalSurfactants';
import { getProduct } from '@/lib/backend';
import { renderToStream } from '@react-pdf/renderer';
import { NextRequest, NextResponse } from 'next/server';
import ProductPDF from './ProductPDF';

export const runtime = 'nodejs';

export async function GET(
    _req: NextRequest,
    { params }: { params: { id: string } },
) {
    const { id } = await params
    const product = await getProduct(id) as Product;
    const stream = await renderToStream(
        <ProductPDF product={product} />,
    );
    const filename = (product.name || product.chemical_name).replace(/[^\x00-\x7F]/g, "");
    return new NextResponse(stream as unknown as ReadableStream, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename="${filename}.pdf"`,
        },
    });
}
