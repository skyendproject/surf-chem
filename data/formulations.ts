// import type { Formulation } from "@/types/formulation";

// export const formulationsData: Formulation[] = [
//   {
//     id: "emamectin-benzoate-lufenuron-1",
//     title: "Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC",
//     description:
//       "Discover the power of Emamectin Benzonate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. This unique combination harnesses the potent insecticidal properties of Emamectin Benzonate and the growth-regulating benefits of Lufenuron, ensuring superior stability and long-lasting performance. Enhanced with OPTIMUS ® AN-255L and OPTIMUS ® AN-1188B surfactants, this formulation maximizes absorption and efficacy, providing unparalleled protection against a wide range of pests. Experience the benefits of a stable, reliable solution that promotes healthier crops and sustainable agriculture.",
//     activeIngredients: ["Emamectin Benzoate 1.0%", "Lufenuron 2.0%"],
//     benefits: [
//       "Superior pest control efficacy",
//       "Long-lasting residual activity",
//       "Reduced pest resistance",
//       "Enhanced crop protection",
//       "Sustainable agriculture support",
//     ],
//     applications: ["Cotton", "Vegetables", "Fruits", "Cereals"],
//     technicalSpecs: {
//       concentration: "3.0% SC",
//       formulation: "Suspension Concentrate",
//       packaging: "1L, 5L, 20L containers",
//       shelfLife: "2 years from manufacturing date",
//     },
//     surfactants: ["OPTIMUS ® AN-255L", "OPTIMUS ® AN-1188B", "OPTIMUS ® 3388F"],
//     category: "Insecticide",
//     tags: ["pest-control", "suspension-concentrate", "emamectin", "lufenuron"],
//   },
//   {
//     id: "emamectin-benzoate-lufenuron-2",
//     title: "Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC",
//     description:
//       "Introducing Emamectin Benzonate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. This superior solution combines the potent insecticidal properties of Emamectin Benzonate with the growth-regulating benefits of Lufenuron, ensuring comprehensive protection against a wide range of pests. Enhanced with OPTIMUS ® 3388F surfactants, this formulation boasts exceptional stability and improved adherence to plant surfaces, maximizing efficacy and longevity. Experience the unique benefits of reduced pest resistance and prolonged action, making it an essential choice for sustainable agriculture. Choose Emamectin Benzonate + Lufenuron SC for reliable, high-performance pest management.",
//     activeIngredients: ["Emamectin Benzoate 1.0%", "Lufenuron 2.0%"],
//     benefits: [
//       "Comprehensive protection",
//       "Improved absorption",
//       "Extended residual activity",
//       "Sustainable farming support",
//     ],
//     applications: ["Field crops", "Horticultural crops", "Plantation crops"],
//     technicalSpecs: {
//       concentration: "3.0% SC",
//       formulation: "Suspension Concentrate",
//       packaging: "500ml, 1L, 5L containers",
//       shelfLife: "24 months",
//     },
//     surfactants: ["OPTIMUS ® 3388F", "SURFCROP® XMS-50"],
//     category: "Insecticide",
//     tags: ["pest-control", "suspension-concentrate", "emamectin", "lufenuron"],
//   },
//   {
//     id: "atrazin-mesotrion-1",
//     title: "Atrazin 50 + Mesotrion 5 (55%SC) SC",
//     description:
//       "Discover the power of Emamectin Benzonate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. Enhanced with OPTIMUS ® AN500L surfactants, this product boasts superior stability and improved adherence, ensuring optimal performance in various conditions. Experience the unique benefits of dual-action pest management, targeting both adult pests and their larvae, while promoting long-lasting protection for your crops. Ideal for sustainable agriculture, this formulation minimizes environmental impact while maximizing yield. Choose Emamectin Benzonate + Lufenuron for a reliable and efficient solution to your pest challenges.",
//     activeIngredients: ["Atrazine 50%", "Mesotrion 5%"],
//     benefits: [
//       "Effective weed control",
//       "Extended pre and post-control",
//       "Reduced crop injury",
//       "Environmental safety",
//     ],
//     applications: ["Corn", "Sugarcane", "Sorghum"],
//     technicalSpecs: {
//       concentration: "55% SC",
//       formulation: "Suspension Concentrate",
//       packaging: "1L, 5L, 20L containers",
//       shelfLife: "2 years",
//     },
//     surfactants: ["OPTIMUS ® AN500L", "OPTIMUS ® AN-255L"],
//     category: "Herbicide",
//     tags: ["weed-control", "herbicide", "atrazine", "mesotrion"],
//   },
//   {
//     id: "emamectin-benzoate-lufenuron-3",
//     title: "Emamectin Benzonate 1.0% + Lufenuron 2.0% (3.0%) SC",
//     description:
//       "Discover the power of Emamectin Benzonate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. This unique combination harnesses the potent insecticidal properties of Emamectin Benzonate and the growth-regulating benefits of Lufenuron, ensuring superior stability and long-lasting performance. Enhanced with OPTIMUS ® AN-255L and OPTIMUS ® AN-1188B surfactants, this formulation maximizes absorption and efficacy, providing unparalleled protection against a wide range of pests. Experience the benefits of a stable, reliable solution that promotes healthier crops and sustainable agriculture.",
//     activeIngredients: ["Emamectin Benzoate 1.0%", "Lufenuron 2.0%"],
//     benefits: [
//       "Superior pest control efficacy",
//       "Long-lasting residual activity",
//       "Reduced pest resistance",
//       "Enhanced crop protection",
//       "Sustainable agriculture support",
//     ],
//     applications: ["Cotton", "Vegetables", "Fruits", "Cereals"],
//     technicalSpecs: {
//       concentration: "3.0% SC",
//       formulation: "Suspension Concentrate",
//       packaging: "1L, 5L, 20L containers",
//       shelfLife: "2 years from manufacturing date",
//     },
//     surfactants: ["OPTIMUS ® AN-255L", "OPTIMUS ® AN-1188B", "OPTIMUS ® 3388F"],
//     category: "Insecticide",
//     tags: ["pest-control", "suspension-concentrate", "emamectin", "lufenuron"],
//   },
// ];



export interface FormulationProperty {
  title: string;
  type: string;
  result: string;
}

export interface Formulations {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  code?: string;
  functions?: FormulationProperty[];
  properties?: FormulationProperty[];
}

export const formulations: Formulations[] = [
  {
    id: "1",
    title: "Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC SC",
    description:
      "Discover the power of Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. This unique combination harnesses the potent insecticidal properties of Emamectin Benzoate and the growth-regulating benefits of Lufenuron, ensuring superior stability and long-lasting performance. Enhanced with OPTIMUS ® AN-255L and OPTIMUS ® AN-1188B surfactants, this formulation maximizes absorption and efficacy, providing unparalleled protection against a wide range of pests. Experience the benefits of a stable, reliable solution that promotes healthier crops and sustainable agriculture.",
    fullDescription:
      "Discover the power of Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. This unique combination harnesses the potent insecticidal properties of Emamectin Benzoate and the growth-regulating benefits of Lufenuron, ensuring superior stability and long-lasting performance. Enhanced with OPTIMUS ® AN-255L and OPTIMUS ® AN-1188B surfactants, this formulation maximizes absorption and efficacy, providing unparalleled protection against a wide range of pests. Experience the benefits of a stable, reliable solution that promotes healthier crops and sustainable agriculture.",
  },
  {
    id: "2",
    title: "Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC SC",
    description:
      "Introducing Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. This superior solution combines the potent insecticidal properties of Emamectin Benzoate with the growth-regulating benefits of Lufenuron, ensuring comprehensive protection against a wide range of pests. Enhanced with OPTIMUS ® 338F surfactants, this formulation boasts exceptional stability and improved adherence to plant surfaces, maximizing efficacy and longevity. Experience the unique benefits of reduced pest resistance and prolonged action, making it an essential choice for sustainable agriculture. Choose Emamectin Benzoate + Lufenuron SC for reliable, high-performance pest management.",
    fullDescription:
      "Introducing Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. This superior solution combines the potent insecticidal properties of Emamectin Benzoate with the growth-regulating benefits of Lufenuron, ensuring comprehensive protection against a wide range of pests. Enhanced with OPTIMUS ® 338F surfactants, this formulation boasts exceptional stability and improved adherence to plant surfaces, maximizing efficacy and longevity. Experience the unique benefits of reduced pest resistance and prolonged action, making it an essential choice for sustainable agriculture. Choose Emamectin Benzoate + Lufenuron SC for reliable, high-performance pest management.",
  },
  {
    id: "3",
    title: "Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC SC",
    description:
      "Discover the power of Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. Enhanced with OPTIMUS ® AN500L surfactants, this product boasts superior stability and improved adherence, ensuring optimal performance in various conditions. Experience the unique benefits of dual-action pest management, targeting both adult pests and their larvae, while promoting long-lasting protection for your crops. Ideal for sustainable agriculture, this formulation minimizes environmental impact while maximizing yield. Choose Emamectin Benzoate + Lufenuron for a reliable and efficient solution to your pest challenges.",
    fullDescription:
      "Discover the power of Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. Enhanced with OPTIMUS ® AN500L surfactants, this product boasts superior stability and improved adherence, ensuring optimal performance in various conditions. Experience the unique benefits of dual-action pest management, targeting both adult pests and their larvae, while promoting long-lasting protection for your crops. Ideal for sustainable agriculture, this formulation minimizes environmental impact while maximizing yield. Choose Emamectin Benzoate + Lufenuron for a reliable and efficient solution to your pest challenges.",
  },
];
