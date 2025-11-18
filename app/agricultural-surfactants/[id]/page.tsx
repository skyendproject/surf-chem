export const dynamic = 'force-dynamic';

import DownloadButton from "@/components/download-button";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SignInForm } from "@/components/sign-in-form";
import { getProduct } from "@/lib/backend";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetail({ params }: ProductPageProps) {
  const { id } = await params;
  if (!id) return notFound();

  const product = await getProduct(id)
  if (!product || product == null) {
    return notFound();
  }

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-white">
        <div className="container px-4 sm:px-14 py-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-black2 leading-tight mt-10">
            {product.name}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
            {/* Product Details */}
            <div className="space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-black text-lg sm:text-xl leading-relaxed">
                  {product.introduction_md || product.disclaimer_md}
                </p>
                <h2 className="text-5xl sm:text-6xl font-bold text-black2 leading-tight mt-10">
                  Applications:
                </h2>
                <p className="text-black text-lg sm:text-xl leading-relaxed">
                  {product.application_md}
                </p>
                <h2 className="text-5xl sm:text-6xl font-bold text-black2 leading-tight mt-10">
                  Physical Properties
                </h2>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-5">
                        <h2 className="text-4xl sm:text-4xl font-bold text-black2 leading-tight mt-10">
                          Property, Unit
                        </h2>
                      </th>
                      <th className="text-left py-5">
                        <h2 className="text-4xl sm:text-4xl font-bold text-black2 leading-tight mt-10">
                          Value
                        </h2>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Chemical Name</td>
                      <td className="text-xl py-5">{product.chemical_name}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Alternate Name</td>
                      <td className="text-xl py-5">{product.alternate_name}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Dtd.</td>
                      <td className="text-xl py-5">{product.created_at}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">CAS Number</td>
                      <td className="text-xl py-5">{product.case_no}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">SBU</td>
                      <td className="text-xl py-5">{product.sbu}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Ionicity</td>
                      <td className="text-xl py-5">{product.ionicity}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Function</td>
                      <td className="text-xl py-5">{product.function}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Typical Usage (%)</td>
                      <td className="text-xl py-5">{product.usage}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Pack Size (Kgs,net weight)</td>
                      <td className="text-xl py-5">{product.pack_size}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Container Type (Material)</td>
                      <td className="text-xl py-5">{product.container_type}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Shelf Life (Days)</td>
                      <td className="text-xl py-5">{product.shelf_life}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">DOT Classification</td>
                      <td className="text-xl py-5">{product.dot_class}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Rev. #</td>
                      <td className="text-xl py-5">{product.rev_no}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Biodegradability (BOD,28 Days. %)</td>
                      <td className="text-xl py-5">{product.biodegradability}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">Reach (Status)</td>
                      <td className="text-xl py-5">{product.reach}</td>
                    </tr>
                    <tr className={'border-t border-gray-200'}>
                      <td className="text-xl py-5 font-semibold">EPA 40 CFR Listing (Status)</td>
                      <td className="text-xl py-5">{product.cfr_listing}</td>
                    </tr>
                    {product.physical_properties.map((p: ProductProperty) => (
                      <tr className={'border-t border-gray-200'}>
                        <td className="text-xl py-5 font-semibold">
                          {p.title + ' - ' + p.unit + ' (' + p.method + ')'}
                        </td>
                        <td className="text-xl py-5">{p.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sign In Form */}
            <div className="flex flex-col w-full max-w-full items-end">
              <DownloadButton href={`/agricultural-surfactants/${id}/pdf`} />
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export interface ProductProperty {
  title: string;
  instrument: string;
  method: string;
  unit: string;
  result: string;
}
