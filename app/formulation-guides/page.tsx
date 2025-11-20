"use client";

import { Footer } from "@/components/footer";
import { FormulationGuideCard } from "@/components/formulation-card";
import { FormulationFilters } from "@/components/formulation-filters";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Formulations } from "@/data/formulations";
import { getFormulations } from "@/lib/backend";
import { Filter } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function FormulationGuidesPage() {
  const [formulations, setFormulations] = useState<Formulations[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const itemsPerPage = 6;

  // Filter formulations based on selected filters
  const filteredFormulations = useMemo(() => {
    if (Object.keys(filters).length === 0) {
      return formulations;
    }

    return formulations.filter((formulation) => {
      return Object.entries(filters).every(([filterKey, filterValues]) => {
        if (filterValues.length === 0) return true;

        return true;
      });
    });
  }, [filters, formulations]);

  // Paginate formulations
  const paginatedFormulations = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredFormulations.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredFormulations, currentPage]);

  const totalPages = Math.ceil(filteredFormulations.length / itemsPerPage);

  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  useEffect(() => {
    getFormulations().then(setFormulations)
    return () => { };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 bg-white max-w-[1600px] mx-auto">
        <div className="container">
          <div className="max-w-8xl px-4 sm:px-16">
            <h1 className="text-5xl sm:text-6xl md:text-[66px] font-bold mb-6 text-black2 mt-8">
              Guide Formulations
            </h1>
            <div className="space-y-8">
              <p className="text-md sm:text-xl md:text-[22px] text-black leading-relaxed mt-8">
                At Surfactant Chemicals Company, we understand that successful
                crop protection starts with effective formulation. Agrochemical
                formulations are far more than just active ingredients—they are
                carefully engineered systems designed to optimize delivery,
                enhance performance, and ensure safety for both the user and the
                environment. Formulation plays a critical role in making these
                products easier to handle, store, and apply, while also
                improving bioavailability and enabling the combination of
                multiple active ingredients in one solution.
              </p>
              <p className="text-md sm:text-xl md:text-[22px] text-black leading-relaxed">
                Our Formulation Guides are designed to simplify this complex
                process by offering a wealth of expertise, proven techniques,
                and optimized formulations. From Suspension Concentrates (SC) to
                Micro Emulsions (ME), our guides feature solutions tailored to a
                variety of agrochemical delivery formats. Each formulation has
                been rigorously developed and field-tested over the years,
                ensuring exceptional performance and reliability.
              </p>
              <p className="text-md sm:text-xl md:text-[22px] text-black leading-relaxed">
                Leveraging our advanced surfactants and adjuvants, we provide
                tools to help formulators achieve superior results. Our
                innovative technologies empower you to improve active ingredient
                delivery, enhance solubility, enable sustained release, and
                develop safer, more efficient products that drive higher crop
                yields. These solutions are grounded in science and backed by
                decades of expertise.
              </p>
              <p className="text-md sm:text-xl md:text-[22px] text-black leading-relaxed">
                Explore our comprehensive database of model formulations,
                including step-by-step guidance on techniques such as direct
                compression, wet granulation, dry granulation, and more. Whether
                you&apos;re working on Emulsifiable Concentrates (EC), Water
                Dispersible Granules (WDG), or Capsule Suspensions (CS), we
                offer detailed insights and recommendations to support your
                formulation journey.
              </p>
              <p className="text-md sm:text-xl md:text-[22px] text-black leading-relaxed">
                With our dedication to innovation and your success, Surfactant
                Chemicals Company is here to help you create agrochemical
                products that meet the highest industry standards. Let our
                Formulation Guides be your resource for achieving exceptional
                performance and sustainability in crop care solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                variant="outline"
                className="w-full flex items-center justify-center space-x-2 mb-4"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </Button>
            </div>

            {/* Sidebar Filters */}
            <div
              className={`lg:w-72 ${isMobileFilterOpen ? "block" : "hidden lg:block"
                }`}
            >
              <FormulationFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                {paginatedFormulations.map((formulation) => (
                  <FormulationGuideCard
                    // key={formulation.id}
                    // formulation={formulation.id}
                    key={formulation.id}
                    formulation={formulation}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
