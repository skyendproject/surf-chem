export const dynamic = 'force-dynamic';

import DownloadButton from "@/components/download-button";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SignInForm } from "@/components/sign-in-form";
import { getFormulation } from "@/lib/backend";
import { notFound } from "next/navigation";

interface FormulationPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function FormulationGuideDetail({ params }: FormulationPageProps) {
  const { id } = await params;
  if (!id) return notFound();

  const product = await getFormulation(id)
  if (!product || product == null) {
    return notFound();
  }

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-white">
        <div className="container px-4 sm:px-14 py-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-black2 leading-tight mt-10">
            {product.title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
            {/* Product Details */}
            <div className="space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-black text-lg sm:text-xl leading-relaxed">
                  {product.detailedDescription}
                </p>
              </div>
            </div>

            {/* Sign In Form */}
            <div className="flex flex-col w-full lg:max-w-[580px] items-end">
              <DownloadButton href={`/formulation-guides/${id}/pdf`} text="Formulation Guide"/>
              <SignInForm />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
