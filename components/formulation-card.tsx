// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import type { Formulation } from "@/types/formulation";
// import { FormulationDetailModal } from "./formulation-detail-modal";

// interface FormulationCardProps {
//   formulation: Formulation;
// }

// export function FormulationCard({ formulation }: FormulationCardProps) {
//   const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

//   return (
//     <>
//       {/* <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500 bg-white">
//         <CardHeader className="pb-3">
//           <CardTitle className="text-base font-bold text-gray-900 leading-tight">
//             {formulation.title}
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col justify-between h-full pt-0">
//           <div>
//             <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-6">
//               {formulation.description}
//             </p>
//             <Button
//               variant="outline"
//               className="border-red-500 text-red-500 hover:bg-red-50 w-full text-sm py-2"
//               onClick={() => setIsDetailModalOpen(true)}
//             >
//               Learn More
//             </Button>
//           </div>
//         </CardContent>
//       </Card>  */}
//       <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//         <CardContent className="p-6 lg:p-8">
//           <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
//             {formulation.title}{" "}
//           </h3>
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
//             {formulation.description}
//           </p>

//           <div className="flex justify-center items-center h-full">
//           <Button
//             variant="outline"
//             className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl"
//             onClick={() => setIsDetailModalOpen(true)}
//           >
//             Learn More
//           </Button>
//           </div>

//         </CardContent>
//       </Card>

//       <FormulationDetailModal
//         content={formulation}
//         isOpen={isDetailModalOpen}
//         onClose={() => setIsDetailModalOpen(false)}
//       />
//     </>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Formulations } from "@/data/formulations";
import Link from "next/link";

interface FormulationCardProps {
  formulation: Formulations;
}

export function FormulationGuideCard({ formulation }: FormulationCardProps) {
  return (
    // <Card className="h-full flex flex-col bg-white border border-gray-200 shadow-sm">
    //   <CardHeader className="pb-4">
    //     <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
    //       {formulation.title}
    //     </CardTitle>
    //   </CardHeader>
    //   <CardContent className="flex-1 flex flex-col">
    //     <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">
    //       {formulation.description}
    //     </p>
    //     <div className="flex justify-center items-center h-full">
    //       <Link href={`/formulation-guides/${formulation.id}`}>
    //         <Button
    //           variant="outline"
    //           className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl"
    //         >
    //           Learn More
    //         </Button>
    //       </Link>
    //     </div>
    //   </CardContent>
    // </Card>
    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 lg:p-8">
        <Link href={`/formulation-guides/${formulation.id}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight hover:text-red">
            {formulation.title}{" "}
          </h3>
          </Link>
          <p className="text-black text-sm sm:text-base md:text-[22px] leading-relaxed mb-6">
            {formulation.description}
          </p>

          <div className="flex justify-center items-center h-full">
            <Link href={`/formulation-guides/${formulation.id}`}>
              <Button
                variant="outline"
                className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl"
              >
                Learn More
              </Button>
            </Link>
          </div>
      </CardContent>
    </Card>
  );
}
