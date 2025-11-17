export interface Formulation {
  id: string,
  title: string,
  documentTitle: string,
  code: string,
  unit: string,
  description: string,
  detailedDescription: string,
  formulationProcedure: string,
  criticalInfo: string,
  activeIngredients?: string[];
  benefits?: string[];
  applications?: string[];
  technicalSpecs?: {
    concentration: string;
    formulation: string;
    packaging: string;
    shelfLife: string;
  };
  surfactants?: string[];
  category: string;
  tags: string[];
  functions: FormulationProperty[],
  properties: FormulationProperty[],
}


export interface FormulationProperty {
  title: string,
  type: string,
  result: string;
}
