// import { GeneralWhitePaper } from "./../types/generalWhitePapers";

// export const generalWhitePaperData: GeneralWhitePaper[] = [
  // {
  //   id: "emamectin-benzoate-lufenuron-1",
  //   title: "Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC",
  //   description:
  //     "Introducing Emamectin Benzoate 1.0% + Lufenuron 2.0% (3.0%) SC, a cutting-edge formulation designed for effective pest control. This superior suspension concentrate (SC) combines the potent insecticidal properties of Emamectin Benzoate with the growth-regulating benefits of Lufenuron, ensuring comprehensive protection against a wide range of pests.",
  //   image: "/assets/79_image_2025_01_20T10_21_04_088Z.png",
  // },
  // {
  //   id: "adrenaline-surge-3",
  //   title: "Project Pheonix: THE ADRENALINE ® SURGE - 3",
  //   description:
  //     "In a groundbreaking comparative study, the performance of ADRENALINE ® N4960 was evaluated against its predecessor, ADRENALINE ® N4950, within EW (Emulsifiable Concentrate) formulations and Suspo Emulsion (SE) formulations. Both surfactants, renowned for their polymeric nature, were scrutinized to determine the advancements brought by the newer molecule. The results were compelling: ADRENALINE ® N4960 emerged as a superior innovation, showcasing significantly lower viscosity, which translates to enhanced handling and a better pour point. This improvement not only facilitates easier application but also ensures more efficient processing. Additionally, the slightly higher molecular weight of ADRENALINE ® N4960 contributes to its exceptional stability and anchoring capabilities, making it a robust choice for various formulations. Beyond its technical merits, ADRENALINE ® N4960 also proves to be more cost-efficient, offering economic advantages without compromising on performance. This study underscores the innovative leap represented by ADRENALINE ® N4960, setting a new benchmark in the realm of polymeric surfactants and paving the way for more efficient and stable EW formulations",
  //   image: "/assets/80_image_2025_01_20T10_20_39_768Z.png",
  // },
  // {
  //   id: "adrenaline-surge-3-pyriproxyfen-ew",
  //   title:
  //     "Revolutionizing Formulations: The Breakthrough with ADRENALINE® N4960 in Pyriproxyfen EW",
  //   description:
  //     "Discover the innovation driving modern agricultural surfactants with ADRENALINE® N4960. This white paper presents a comparative study against its predecessor, ADRENALINE® N4950, highlighting advancements in droplet size reduction, viscosity, and emulsion stability. Learn how the enhanced molecular architecture of N4960 delivers superior steric stabilization, faster processing, and cost-efficient formulations. Whether you're optimizing for stability or cutting process times, this resource provides critical insights to elevate your formulations. Complete the form to access the full study and transform your approach to surfactant innovation.",
  //   image: "/assets/0_Draught-507.jpg",
  // },
// ];


export interface WhitePaper {
  id: string;
  title: string;
  description: string;
  image: string;
  pdf?: string;
}

export const whitePapers: WhitePaper[] = [
  {
    id: "emamectin-benzoate-lufenuron-1",
    title: "Impact Of Highshear Mixing Time On Dilution Test",
    description:
      "A batch size of approximately 2,800 liters was prepared at a customer’s premises to check the impact of droplet size reduction of Chlorpyrifos 30 %EW with the use of Adrenaline ® N4950 and Adrenaline ® N5050, on a dosage scheme of 1.93% w/w each, on a plant-scale level. Initially two hours of highshear mixing was planned to analyze the droplet reduction.",
    image: "/assets/79_image_2025_01_20T10_21_04_088Z.png",
  },
  {
    id: "adrenaline-surge-3",
    title: "Project Pheonix: THE ADRENALINE ® SURGE - 3",
    description:
      "In a groundbreaking comparative study, the performance of ADRENALINE ® N4960 was evaluated against its predecessor, ADRENALINE ® N4950, within EW (Emulsifiable Concentrate) formulations and Suspo Emulsion (SE) formulations. Both surfactants, renowned for their polymeric nature, were scrutinized to determine the advancements brought by the newer molecule. The results were compelling: ADRENALINE ® N4960 emerged as a superior innovation, showcasing significantly lower viscosity, which translates to enhanced handling and a better pour point. This improvement not only facilitates easier application but also ensures more efficient processing. Additionally, the slightly higher molecular weight of ADRENALINE ® N4960 contributes to its exceptional stability and anchoring capabilities, making it a robust choice for various formulations. Beyond its technical merits, ADRENALINE ® N4960 also proves to be more cost-efficient, offering economic advantages without compromising on performance. This study underscores the innovative leap represented by ADRENALINE ® N4960, setting a new benchmark in the realm of polymeric surfactants and paving the way for more efficient and stable EW formulations",
    image: "/assets/80_image_2025_01_20T10_20_39_768Z.png",
  },
  {
    id: "adrenaline-surge-3-pyriproxyfen-ew",
    title:
      "Revolutionizing Formulations: The Breakthrough with ADRENALINE® N4960 in Pyriproxyfen EW",
    description:
      "Discover the innovation driving modern agricultural surfactants with ADRENALINE® N4960. This white paper presents a comparative study against its predecessor, ADRENALINE® N4950, highlighting advancements in droplet size reduction, viscosity, and emulsion stability. Learn how the enhanced molecular architecture of N4960 delivers superior steric stabilization, faster processing, and cost-efficient formulations. Whether you're optimizing for stability or cutting process times, this resource provides critical insights to elevate your formulations. Complete the form to access the full study and transform your approach to surfactant innovation.",
    image: "/assets/0_Draught-507.jpg",
  },
];
