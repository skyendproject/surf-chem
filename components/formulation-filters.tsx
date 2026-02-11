"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSection {
  title: string;
  items: string[];
  key: string;
}

interface FormulationFiltersProps {
  onFilterChange: (filters: Record<string, string[]>) => void;
}

export function FormulationFilters({
  onFilterChange,
}: FormulationFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    solvent: true,
    surfactantCarrier: true,
    stabilizer: true,
    surfactantAdjuvant: true,
    surfactantDispersant: true,
    active: true,
  });

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const filterSections: FilterSection[] = [
    {
      title: "Formulation Type",
      items: [
        "Suspension Concentrates (SC)",
        "Emulsions-in-Water (EW)",
        "Suspo-Emulsions (SE)",
        "Oil Dispersions (OD)",
        "Wettable Powders (WP)",
      ],
      key: "formula type",
    },
    {
      title: " Biological / chemical Active Ingredient",
      items: ["Active Ingredient 7"],
      key: "biological ingredient",
    },
    {
      title: "Active",
      items: [
        "ABAMECTIN TECHNICAL",
        "ALPHA CYPERMETHRIN TECHNICAL",
        "Atrazin Technical",
        "AZOXYSTROBIN TECHNICAL",
        "BIFENTHRIN TECHNICAL",
        "BUPROFEZIN",
        "CARBOSULFAN TECHNICAL",
        "CHLORFENAPYR TECHNICAL",
        "CHLORPYRIFOS TECHNICAL",
        "CLOTHIANIDIN TECHNICAL",
        "CYPERMETHRIN TECHNICAL",
        "DIAFENTHIURON TECHNICAL",
        "DIFENOCONAZOLE TECHNICAL",
        "Emamectin Benzoate Technical",
        "FENOXAPROP-P-ETHYL TECHNICAL",
        "FIPRONIL TECHNICAL",
        "FLONICAMID TECHNICAL",
        "FLORASULAM TECHNICAL",
        "FLUROXYPYR TECHNICAL",
        "FLUSILAZOLE TECHNICAL",
        "IMIDACLOPRID TECHNICAL",
        "LAMBDA CYHALOTHRIN TECHNICAL",
        "Lufenuron Technical",
        "MCPA ISOOCTYL",
        "MEFENPYR DIETHYL",
        "Mesotrione Technical",
        "Nicosulfuron Technical",
        "PACLOBUTRAZOL TECHNICAL",
        "PYRIPROXYFEN TECHNICAL",
        "SPIROTETRAMAT TECHNICAL",
        "TABUCONAZOL TECHNICAL",
        "THIAMETHOXAM TECHNICAL",
        "THIODICARB TECHNICAL",
      ],
      key: "active",
    },
    {
      title: "Antifoam",
      items: ["SURFCROP ® AF-600"],
      key: "antifoam",
    },
    {
      title: "Antifreeze",
      items: ["GLYCERIN", "MONOETHYLENE GLYCOL (MEG)", "PROPYLENE GLYCOL (PG)"],
      key: "antifreeze",
    },
    {
      title: "Biocide",
      items: ["BIOCIDE"],
      key: "biocide",
    },
    {
      title: "Other",
      items: ["BEADS QUANTITY", "BEADS SIZE"],
      key: "other",
    },
    {
      title: "Rheology Modifier",
      items: [
        "BENTONITE CLAY",
        "OPTIMUS ® S100",
        "OPTIMUS ® SURFPET 2T",
        "XANTHAN GUM",
      ],
      key: "rheology modifier",
    },
    {
      title: "SOLVENT",
      items: ["METHANOL, XYLENE"],
      key: "solvent",
    },
    {
      title: "Surfactant Carrier",
      items: [
        "PRECIPITATED CALCIUM CARBONATE",
        "PROPYLENE GLYCOL",
        "SUNFLOWER / RAPESEED OIL",
        "Water",
        "WATER",
      ],
      key: "surfactantCarrier",
    },
    {
      title: "STABILIZER",
      items: ["Butylated Hydroxytoluene(BHT)"],
      key: "stabilizer",
    },
    {
      title: "Surfactant Adjuvant",
      items: ["HEXASORB ® 1200", "PRIME ® 650"],
      key: "surfactantAdjuvant",
    },
    {
      title: "Surfactant Dispersant",
      items: ["OPTIMUS ® AN-400", "SURFCROP ® DF-HCD"],
      key: "surfactantDispersant",
    },

    {
      title: "Surfactant: Emulsifier",
      items: ["HEXASORB® 4000"],
      key: "surfactantEmulsifier",
    },

    {
      title: "Surfactant: Polymeric",
      items: [
        "ADRENALINE ® N4950",
        "ADRENALINE ® N505",
        "OPTIMUS ® 3388B",
        "OPTIMUS ® 3388",
        "OPTIMUS ® AN-1188B",
        "OPTIMUS ® AN-600L",
        "OPTIMUS ® AN500L",
        "OPTIMUS ® AN500L/02",
        "OPTIMUS ® AN501L",
      ],
      key: "surfactantPolymeric",
    },

    {
      title: "Surfactant. Polymeric Aqueous Dispersant",
      items: ["OPTIMUS ® 794L"],
      key: "surfactantPolAquDis",
    },
    {
      title: "Surfactant: Polymeric Dispersant",
      items: ["ADRENALINE ® N4960"],
      key: "surfactantPolDis",
    },
    {
      title: "Surfactant: Polymeric Non-Aqueous Dispersant",
      items: ["OPTIMUS® AN-255L", "OPTIMUS® AN250L", "SURFCROP® XMS-50"],
      key: "surfactantPolNonAquDis",
    },
    {
      title: "Surfactant: Polymeric Wetter",
      items: ["OPTIMUS® NX1100B"],
      key: "surfactantPolWetter",
    },
    {
      title: "Surfactant: Wetter",
      items: ["SURFCROP ® DF-S&apos;ALPHA"],
      key: "surfactantWetter",
    },
  ];

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleFilterChange = (sectionKey: string, item: string, checked: boolean) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (!newFilters[sectionKey]) newFilters[sectionKey] = [];

      if (checked) {
        newFilters[sectionKey] = [...newFilters[sectionKey], item];
      } else {
        newFilters[sectionKey] = newFilters[sectionKey].filter((i) => i !== item);
      }

      return newFilters;
    });
  };

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters]);

  const FilterSection = ({
    title,
    items,
    sectionKey,
  }: {
    title: string;
    items: string[];
    sectionKey: string;
  }) => (
    <div className="border-b border-gray-200 pb-3 mb-3">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left bg-[#F0F0F0] border-black border-2 text-sm  font-medium text-gray-900 hover:text-green-600 py-2"
      >
        <span className="bg-gray-100 px-3 py-1 rounded text-xs md:text-[16px] font-medium">
          {title}
        </span>
        {expandedSections[sectionKey] ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {expandedSections[sectionKey] && (
        <div className="mt-2 space-y-1 pl-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox
                id={`${sectionKey}-${index}`}
                className="h-3 w-3"
                checked={selectedFilters[sectionKey]?.includes(item) || false}
                onCheckedChange={(checked) =>
                  handleFilterChange(sectionKey, item, checked as boolean)
                }
              />
              <label
                htmlFor={`${sectionKey}-${index}`}
                className="text-xs md:text-[14px] text-gray-600 cursor-pointer leading-tight"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border sticky top-4">
      <div className="space-y-3">
        {filterSections.map((section) => (
          <FilterSection
            key={section.key}
            title={section.title}
            items={section.items}
            sectionKey={section.key}
          />
        ))}
      </div>
    </div>
  );
}
