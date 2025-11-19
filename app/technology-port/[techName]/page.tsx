export const dynamic = 'force-dynamic';

import { notFound } from "next/navigation";

// Import all technology data files
import { ProductsTable } from "@/app/agricultural-surfactants/page";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Product } from "@/data/technologies/agriculturalSurfactants";
import { alkoxylatedAlcoholData } from "@/data/technologies/alkoxylatedAlcohol";
import { alkoxylatedAlkylphenolData } from "@/data/technologies/alkoxylatedAlkylphenol";
import { alkoxylatedNonylphenolDerivatesData } from "@/data/technologies/alkoxylatedNonylphenolDerivates";
import { alkoxylatedOctylphenolData } from "@/data/technologies/alkoxylatedOctylphenol";
import { getFormulationTypes, getProductClass, getProductsByClass, getProductSeries } from "@/lib/backend";
import { ProductClass } from "../page";

// Map of technology slugs to their respective data
const technologyData: Record<string, any> = {
  "alkoxylated-alcohol": alkoxylatedAlcoholData,
  "alkoxylated-alkylphenol": alkoxylatedAlkylphenolData,
  "alkoxylated-nonylphenol-derivates": alkoxylatedNonylphenolDerivatesData,
  "alkoxylated-octylphenol": alkoxylatedOctylphenolData,
  // Add other technologies here as we create their data files
};

export default async function TechnologyDetails({
  params,
}: {
  params: { techName: string };
}) {
  const { techName: id } = await params
  const techData = await getProductClass(id) as ProductClass

  if (!techData) {
    notFound();
  }


  const formulationTypes = await getFormulationTypes()
  const series = await getProductSeries()
  const products = await getProductsByClass(id)

  return (
    <>
      {/* Header */}
      <Navigation />
      <div className="min-h-screen">
        <div className="min-h-screen bg-white py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px]">
          <div>
            <h1 className="text-[66px] font-bold text-black2 mb-16">
              {techData.title}
            </h1>
            <p className="text-[22px] text-black mb-4">
              {techData.summary}
            </p>

            <div className="overflow-x-auto">
              <ProductsTable formulationTypes={formulationTypes} products={products as Product[]} />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  );
}
