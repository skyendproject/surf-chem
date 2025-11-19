import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Leaf,
  Sprout,
  DrillIcon as Drone,
  Cog,
} from "lucide-react";
import { Footer } from "@/components/footer";

export default function AgrochemicalsPage() {
  const equipmentData = [
    {
      title: "Agricultural Surfactants and Adjuvants",
      image: "/assets/agricultural-surfactants.jpg",
      link: "/agricultural-surfactants",
      description:
        "Our Agricultural Surfactants and Adjuvants are designed to improve the performance of herbicides, insecticides, and fungicides. By enhancing the dispersion, adhesion, and uptake of these agents, our surfactants ensure more effective crop protection and yield optimization. Our product line includes the SURFCROP® NE Series, featuring alkoxylated alkylphenol compounds suitable for various formulation types.",
    },
    {
      title: "Bio-pesticides & Bio-formulants",
      image: "/assets/biopesticides-supplier.jpg",
      link: "/bio-pesticides",
      description:
        "Under the ECOBIOGENESIS® brand, we offer a range of bio-pesticides, bio-formulants, and bio-stimulants that harness natural biological processes to combat pests and diseases. These products promote ecological balance and sustainable agriculture by reducing reliance on chemical inputs and supporting plant growth and resilience. Our vision is to empower farmers with solutions that enhance crop vitality while safeguarding the environment.",
    },
    {
      title: "AI Drones for Agriculture",
      image: "/assets/ai-drones-for-agriculture.jpg",
      link: "/ai-drones",
      description:
        "Embracing cutting-edge technology, our AI Drones are equipped with high-resolution cameras, sensors, and advanced AI capabilities to monitor crop and soil health, optimize input application, and provide data-driven insights. These drones assist in precision spraying, targeted nutrient delivery, selective irrigation, and infrastructure inspection, ultimately reducing labor costs and environmental impact. Features include automated flight planning, collision avoidance systems, and cloud-based data storage for informed decision-making.",
    },
    {
      title: "Agricultural Machinery",
      image: "/assets/bead-mill.jpg",
      link: "/agricultural-machinery",
      description:
        "To support comprehensive agricultural operations, we manufacture specialized machinery such as bead mills and jet mills for processing agricultural products. Our bead mills offer stable continuous operation, high energy efficiency, and low maintenance costs, resulting in higher quality products with finer particle sizes. Our jet mills, designed according to GMP standards, provide compact internal structures for closed-circuit milling, ensuring purity and efficiency in processing. Through these dedicated business units, Surfactant Chemicals Company strives to deliver innovative and sustainable solutions that meet the evolving needs of the agricultural industry.",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white px-2 sm:px-6 lg:px-8">
        <div className="container px-4 sm:px-10">
          <div className="max-w-6xl">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              AGRO CHEMICALS
            </h1>
            <p className="text-2xl text-gray-700 leading-snug">
              At Surfactant Chemicals Company, we are committed to advancing
              agricultural practices through our diverse range of specialized
              products and technologies. Our Agrochemicals division is
              structured into four key business units: Agricultural Surfactants
              and Adjuvants, Bio-pesticides & Bio-formulants, AI Drones for
              Agriculture, and Agricultural Machinery. Each unit is dedicated to
              providing innovative solutions that enhance productivity,
              sustainability, and efficiency in farming.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}

      <div className="min-h-screen bg-gray-50 py-12 px-2 sm:px-6 lg:px-8">
        <div className="space-y-8 px-2 sm:px-12">
          {equipmentData.map((equipment, index) => (
            <div
              className="bg-white rounded-3xl shadow-lg py-16 px-4 sm:px-16 mb-8 border-2 border-gray-300"
              key={index}
            >
              <div className="flex flex-col md:grid md:grid-cols-8 gap-6 md:gap-8">
                {/* Image Section - 1.5fr equivalent (col-span-1.5 approximated with custom sizing) */}
                <div className="md:col-span-3 md:flex md:justify-center md:items-center">
                  <div className="w-full max-w-sm mx-auto md:max-w-none">
                    <Image
                      src={equipment.image || "/placeholder.svg"}
                      alt={equipment.title}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Text Section - 2.5fr equivalent */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <Link href={equipment.link}>
                    <h2 className="text-2xl sm:text-4xl font-bold text-black2 mb-4 md:mb-6 hover:text-greenCustom uppercase">
                      {equipment.title}
                    </h2>
                  </Link>
                  <p className="text-black text-md sm:text-lg md:text-xl leading-relaxed">
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
