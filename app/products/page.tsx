import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Palette, Package } from "lucide-react";
import { Footer } from "@/components/footer";

export default function ProductsPage() {
  const equipmentData = [
    {
      title: "AGRO CHEMICALS",
      image: "/assets/trading-chemicals.jpg",
      link: "/agrochemicals",
      description:
        "Our Agrochemicals division focuses on enhancing agricultural productivity and sustainability. We provide a range of surfactants and adjuvants that improve the efficacy of herbicides, insecticides, and fungicides. Our products facilitate better dispersion, adhesion, and uptake of these agents by plants, contributing to more effective and efficient crop protection.",
    },
    {
      title: "PAINTS",
      image: "/assets/paints.jpg",
      link: "/paints",
      description:
        "In the Paints sector, we offer advanced surfactants that function as emulsifiers, stabilizers, wetting agents, and dispersing agents in waterborne polymer and coating systems. Our products, including linear and branched benzene sulfonates and olefin sulfonates, serve as primary emulsifiers for emulsion polymerization applications. Additionally, our naphthalene sulfonates are utilized for wetting and dispersing both organic and inorganic pigments, ensuring superior performance in various coating applications.",
    },
    {
      title: "TRADING CHEMICALS",
      image: "/assets/trading-chemicals.jpg",
      link: "/trading-chemicals",
      description:
        "Our Trading Chemicals unit, operated through our facility in Suzhou, Jiangsu province, China, serves as a chemical sourcing company. This recent addition to our portfolio underscores our commitment to efficiently sourcing and distributing chemicals across continents and industries. By leveraging a vast network of suppliers and buyers, we ensure that we can source and distribute chemicals efficiently and competitively. We constantly explore new ways to streamline our processes and provide outstanding value to our clients. Through these three main product lines, Surfactant Chemicals Company continues to drive innovation and excellence, delivering tailored solutions that meet the evolving demands of our global clientele.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-16 px-2 sm:px-6 lg:px-8">
        <div className="container px-4 sm:px-12">
          <div className="mr-4">
            <h1 className="ext-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold mb-8 text-black2">
              PRODUCTS
            </h1>
            <p className="max-w-6xl text-black1 text-[clamp(17px,2vw,20.5px)] leading-[30px]">
              At Surfactant Chemicals Company, we are dedicated to advancing
              industries through our specialized product lines. Our offerings in
              Agrochemicals, Paints, and Trading Chemicals are designed to meet
              the diverse needs of our clients, ensuring quality and innovation
              in every solution.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="min-h-screen bg-gray-50 py-12 px-2 sm:px-6 lg:px-8">
        <div className="space-y-8 px-2 sm:px-12">
          {equipmentData.map((equipment, index) => (
            <div
              className="bg-white rounded-[40px] py-14 px-4 sm:px-14 mb-8 border-2 border-gray-300"
              key={index}
            >
              <div className="flex flex-col md:grid md:grid-cols-8 gap-2 md:gap-16">
                {/* Image Section - 1.5fr equivalent (col-span-1.5 approximated with custom sizing) */}
                <div className="md:col-span-3 md:flex md:justify-center md:items-center">
                  <div className="w-full max-w-sm mx-auto md:max-w-none">
                    <Image
                      src={equipment.image || "/placeholder.svg"}
                      alt={equipment.title}
                      width={400}
                      height={300}
                      style={{ width: "380px", height: "auto" }} // 👈 inline style overrides
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text Section - 2.5fr equivalent */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <Link href={equipment.link}>
                    <h2 className="text-[36px] sm:text-[38px] md:text-[40px] font-bold text-black2 mb-4 md:mb-6 hover:text-greenCustom">
                      {equipment.title}
                    </h2>
                  </Link>
                  <p className="text-black1 text-[clamp(17px,2vw,22px)] leading-[30px]">
                    {equipment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
