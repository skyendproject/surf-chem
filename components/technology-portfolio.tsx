import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TechnologyPortfolio() {
  const technologies = [
    { name: "Bio Tech", image: "/assets/Frame Background.png" },
    { name: "Nano Surf", image: "/assets/ai-drones-for-agriculture.jpg" },
    { name: "Smart Chem", image: "/assets/Frame Background.png" },
    { name: "Eco Shield", image: "/assets/ai-drones-for-agriculture.jpg" },
    { name: "Agro Boost", image: "/assets/ai-drones-for-agriculture.jpg" },
    { name: "Soil Sync", image: "/assets/Frame Background.png" },
    {
      name: "Yield Max",
      image: "/assets/ai-drones-for-agriculture.jpg",
    },
    { name: "Crop Guard", image: "/assets/Frame Background.png" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Title */}
      <div className="text-center pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16">
        <h1 className="text-[50px] md:text-[66px] font-bold text-gray-900 tracking-wide px-4">
          TECHNOLOGY PORTFOLIO
        </h1>
      </div>

      {/* Green Background Stripe */}
      <div className="absolute left-0 right-0 bg-greenCustom h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 top-1/2 transform -translate-y-1/2 z-0"></div>

      {/* Technology Grid - Positioned over the green stripe */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-16 sm:mb-20 lg:mb-24">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-56 h-56 sm:w-56 sm:h-56 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px"
                  />
                  {/* Text overlay */}
                  <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 transition-all flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center px-3 leading-tight whitespace-pre-line">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Technology Button */}
      <div className="text-center pb-8 sm:pb-12 lg:pb-16 relative z-10">
        <Link
          href="/technology-port"
          scroll={true}
          className="hover:bg-white bg-red border hover:border-red text-white hover:text-red px-8 sm:px-16 py-8 text-2xl font-bold rounded-xl"
        >
          View all Technology
        </Link>
      </div>
    </div>
  );
}
