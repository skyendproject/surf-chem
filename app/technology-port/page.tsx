"use client"
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Resources from "@/components/resources";
import { getProductClasses } from "@/lib/backend";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface ProductClass {
  id: string,
  title: string,
  code: string,
  summary: string,
}

export default function TechnologyPortfolio() {
  const [classes, setClasses] = useState<ProductClass[]>([])
  useEffect(() => {
    getProductClasses().then(setClasses)
    return () => { }
  }, []);

  return (
    <>
      {" "}
      {/* Header */}
      <Navigation />
      <div className="min-h-screen">
        <div className="">
          <div className="bg-white py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px]">
            <h1 className="text-[66px] font-bold text-black2 tracking-wide">
              TECHNOLOGY PORTFOLIO
            </h1>
          </div>

          <div className="bg-gray-100 py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {classes.map((tech, index) => (
                <Link
                  href={`/technology-port/${tech.id}`}
                  key={index}
                  className="block"
                >
                  <div
                    className="bg-white rounded-[22px] p-6 min-h-[167px] shadow-md
                    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    flex items-center justify-center cursor-pointer
                    hover:bg-greenCustom hover:text-white hover:shadow-xl"
                  >
                    <p className="font-bold text-[26px] text-center leading-relaxed">
                      {tech.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* Resources */}
      <Resources />


      {/* Footer Section */}
      <Footer />
    </>
  );
}
