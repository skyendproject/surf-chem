export interface Product {
  id: string,
  active: string,
  alternate_name: string,
  application_md: string,
  biodegradability: string,
  case_no: string,
  cfr_listing: string,
  chemical_category: string,
  chemical_name: string,
  container_type: string,
  created_at: string,
  disclaimer_md: string,
  dot_class: string,
  formulation_types: string,
  function: string,
  in_stock: string,
  introduction_md: string,
  ionicity: string,
  is_new_product: string,
  manufactured_at: string,
  name: string,
  pack_size: string,
  physical_properties: ProductProperty[],
  reach: string,
  rev_no: string,
  safety_md: string,
  sbu: string,
  series: string,
  shelf_life: string,
  storage_1_md: string,
  storage_2_md: string,
  usage: string,
}

export interface ProductProperty {
  title: string;
  instrument: string;
  method: string;
  unit: string;
  result: string;
}


export const agriculturalSurfactantsData = {
  title: "Agricultural Surfactants",
  description: "High-performance surfactants for agricultural applications",
  products: [
    {
      name: "AGRICHEM 100",
      series: "Non-Ionic",
      category: "Alkyl Polyglycoside",
      formulations: {
        "EW": true,
        "SC": true,
        "SE": false,
        "CS": true,
        "OD": true,
        "WG": true,
        "WP": true,
        "GR": false,
        "EC": false,
        "SL": true,
        "FS": true,
      },
    },
    {
      name: "AGRICHEM 200",
      series: "Anionic",
      category: "Alkyl Ether Sulfate",
      formulations: {
        "EW": true,
        "SC": true,
        "SE": true,
        "CS": false,
        "OD": true,
        "WG": true,
        "WP": false,
        "GR": true,
        "EC": true,
        "SL": true,
        "FS": true,
      },
    },
    {
      name: "AGRICHEM 300",
      series: "Amphoteric",
      category: "Cocamidopropyl Betaine",
      formulations: {
        "EW": true,
        "SC": true,
        "SE": true,
        "CS": true,
        "OD": true,
        "WG": true,
        "WP": true,
        "GR": true,
        "EC": true,
        "SL": true,
        "FS": true,
      },
    },
  ],
};

export default agriculturalSurfactantsData;
