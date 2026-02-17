"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

interface FilterSection {
  title: string;
  items: string[];
  key: string;
}

interface FormulationFiltersProps {
  formulationTypes: string[];
  formulationFunctions: Record<string, string>[];
  onFilterChange: (filters: Record<string, string[]>) => void;
}

export function FormulationFilters({
  formulationTypes, formulationFunctions, onFilterChange,
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
      title: "Formulation Types",
      items: formulationTypes,
      key: "formulationType",
    },
    {
      title: "Functions Titles",
      items: Array.from(new Set(formulationFunctions.map(f => f.title))),
      key: "formulationFunctionTitle",
    },
    {
      title: "Functions Types",
      items: Array.from(new Set(formulationFunctions.map(f => f.type))),
      key: "formulationFunctionType",
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
