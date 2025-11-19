export const dynamic = 'force-dynamic';

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Product } from "@/data/technologies/agriculturalSurfactants";
import { getFormulationTypes, getProducts, getProductSeries } from "@/lib/backend.js";
import Link from "next/link";

export default async function AgriculturalSurfactantsPage() {
  const formulationTypes = await getFormulationTypes()
  const series = await getProductSeries()
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-14 max-w-[1600px] mx-auto">
          <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold mb-20 text-black2">
            Agricultural Surfactants And Adjuvants
          </h1>

          <div className="grid lg:grid-cols-1 gap-8 mr-2">
            <div>
              <p className="text-black text-[18px] md:text-[22px] leading-[30px] mb-6">
                At Surfactant Chemicals Company, we believe agriculture is the
                cornerstone of human progress and global sustainability. Feeding
                the world&apos;s growing population requires solutions that don&apos;t
                just keep up—they lead. That&apos;s why we&apos;ve developed a portfolio
                of cutting-edge agricultural surfactants designed to optimize
                the performance of herbicides, insecticides, and fungicides,
                ensuring every input works harder and smarter for the farmer.
              </p>

              <p className="text-black text-[18px] md:text-[22px] leading-[30px]  mb-6">
                Our surfactants go beyond enhancing dispersion, adhesion, and
                uptake. They represent our commitment to empowering modern
                agriculture with tools that boost productivity while supporting
                sustainable practices. By enabling more precise and efficient
                crop protection, we&apos;re not just improving yields—we&apos;re driving
                the future of farming.
              </p>

              <p className="text-black text-[18px] md:text-[22px] leading-[30px]  mb-12">
                Join us as we redefine agricultural innovation with solutions
                that bridge the gap between productivity and sustainability.
                Explore how Surfactant Chemicals Company is making every drop,
                every spray, and every acre count.
              </p>

              {/* Products Table */}
              <div className="mt-12">

                <div className="overflow-x-auto">
                  <ProductsTable formulationTypes={formulationTypes} products={products as Product[]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}


export function ProductsTable({ products, formulationTypes }: { products: Product[], formulationTypes: string[] }) {
  return (
    <>
      <table className="w-full border-collapse border-2 border-[#CCCCCC]">
        <thead className="border-2 border-[#CCCCCC]">
          <tr className="bg-tableColor border-2 border-[#CCCCCC] text-black2 text-[18px]">
            <th className="border-2 border-[#CCCCCC] px-2 py-2 text-left font-bold max-w-[180px] whitespace-normal break-words">
              PRODUCT NAME
            </th>

            <th className="border-2 border-[#CCCCCC] px-2 py-2 text-left font-bold max-w-[150px] whitespace-normal break-words">
              SURFACTANT SERIES
            </th>

            <th className="border-2 border-[#CCCCCC] px-2 py-2 text-left font-bold max-w-[160px] whitespace-normal break-words">
              CHEMICAL CATEGORY
            </th>

            <th
              className="border-2 border-[#CCCCCC] px-2 py-2 text-center font-bold"
              colSpan={formulationTypes.length}
            >
              APPLICABLE FORMULATION TYPES
            </th>
          </tr>

          <tr className="bg-white text-[18px]">
            <th className="border-2 border-[#CCCCCC] px-0 w-0 whitespace-nowrap"></th>
            <th className="border-2 border-[#CCCCCC] px-0 w-0 whitespace-nowrap"></th>
            <th className="border-2 border-[#CCCCCC] px-0 w-0 whitespace-nowrap"></th>
            {formulationTypes.map((type) => (
              <th
                key={type}
                className="border-2 border-[#CCCCCC] px-2 py-2 text-center font-bold text-black2 min-w-[40px]"
              >
                {type}
              </th>
            ))}
          </tr>


        </thead>
        <tbody className="border-2 border-[#CCCCCC]">
          {products.map(
            (product: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-[#F6F7F7] even:bg-white text-[16px]"
              >
                <td className="border-2 border-[#CCCCCC] px-1 py-1 text-greenCustom font-medium max-w-[120px] whitespace-normal break-words">
                  <Link className="underline" href={`/agricultural-surfactants/${product.id}`}>
                    {product.name}
                  </Link>
                </td>
                <td className="border-2 border-[#CCCCCC] px-1 py-1 text-greenCustom font-medium max-w-[120px] whitespace-normal break-words">
                  <Link className="underline" href={`/agricultural-surfactants/${product.id}`}>
                    {product.series}
                  </Link>
                </td>
                <td className="border-2 border-[#CCCCCC] px-1 py-1 text-black font-semibold max-w-[100px] whitespace-normal break-words">
                  {product.category}
                </td>


                {formulationTypes.map((type) => (
                  <td
                    key={type}
                    className="border-2 border-[#CCCCCC] px-2 py-3 text-center text-sm"
                  >
                    {product.formulations.includes(type) ? (
                      <span className="text-black font-bold text-lg">
                        x
                      </span>
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
