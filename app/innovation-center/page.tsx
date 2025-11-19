import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";

export default function InnovationCenterPage() {
  const equipmentData = [
    {
      title: "WAB DYNO®MILL",
      image: "/assets/dynomill.png",
      description:
        "our expert for wet ultrafine grinding and dispersion when it comes to preparing Suspension Concentrate (SC), Emulsion-in-Water (EW), Oil Dispersions (OD) or the like agrochemical product formulations eiciently and effectively. For decades, WAB Germany has been the unchallenged specialist in dispersion and fine grinding technology with its world-famous DYNO®-MILL. The Dyno ® Mill ensures that the formulations in the lab are representative of the actual scale-up formulations at customers processing plants and so that results are replicated.",
    },
    {
      title: "SILVERSON L5M-A",
      image: "/assets/Silverson L5M-A.png",
      description:
        "The SILVERSON L5M-A – a high-shear mixer ideal for all laboratory work, research and development. Quality assurance analysis and small-scale production for Suspension Concentrate (SC), Emulsions-in-Water (EW), Micro-emulsions (ME) etc. It offers an efficiency and flexibility unmatched by other such machines. Equipped with different types of heads for different purposes, it offers the flexibility to ensure a versatile formulation development. The different types of heads allow for the flexibility of processing different kinds of active ingredients in different types of formulation delivery systems.",
    },
    {
      title: "DALTON JAPAN'S MG-55",
      image: "/assets/Group 163873.png",
      description:
        "Is a bench top multi-granulator from Fuji Paudal Japan, that allows our researchers and product developers at the innovation centres to evaluate three different types of extrusion techniques (dome, radial and axial) and determine which one suits the customers WDG/WSG products. The MG-55 allows to develop products indicative of a full-scale production system. The three types of extrusion techniques within one machine allows us gauge the different levels of pressure, temperature and speed variables which would yield granules very close to perfection.",
    },
    {
      title: "CALEVA'S ® SPHERONISER",
      image: "/assets/Group 163876.png",
      description:
        "It is also coupled with Calevas ® Spheroniser which gives the water dispersible granules/water soluble granules the right size by means of spheronisation. It can process 0.5kg to 1.0kg batch sizes and is a GMP design. A full range of options are available including fully automatic operation.",
    },
    {
      title: "MALVERNS’ MASTERSIZER 2000",
      image: "/assets/Malvern-Mastersizer-2000-particle-size-analyser.png",
      description:
        "particle size analyser helps to meet our customers’ growing need for global comparability of results, traceability, regulatory compliance, and eíciency in the laboratory. It is a very handy instrument which gives a high level of accuracy to determine which surfactant formulation combinations would perform the best on a plant scale level.",
    },
    {
      title: "SITA MESSTECHNIK’S BUBBLE PRESSURE TENSIOMETER",
      image: "/assets/SITA Messtechniks Bubble Pressure Tensiometer.png",
      description:
        "Surfactants are all about reducing the surface tension and for Surfactant Chemicals Company, SITA MESSTECHNIK’S BUBBLE PRESSURE TENSIOMETER is a small, but an extremely vital analytical & research equipment. It helps our researchers and product developers determine and replicate the results of the ïnished products, herbicides for example, when diluted in a spray tank by the farmer and its impact in terms of wetting and penetration on the target sites and surfaces. A tensiometer helps design a great product in a very eícient and effective manner.",
    },
    {
      title: "KRUSS EASYDROP DSA-20",
      image: "/assets/kruss-easydrop.png",
      description:
        "helps to effectively determine the contact angle made by a speciïc agrochemical formulation on the relevant surface (leaf, roots, stem etc.). The smaller the contact angle, the better the spreading property. It also helps determine the rate of penetration, rain-fastness etc. of the agrochemical product. A perfect instrument for estimating the eícacy in lab! The goal is to screen Surfactants and adjuvants in a formulation and their impact in the ïeld in terms of bio eícacy.",
    },
    {
      title: "FORMULACTIONS’ TURBISCAN™ LAB Stability Analyzer",
      image: "/assets/Turbiscan.png",
      description:
        "is the spearhead of the Turbiscan range to fully characterise the stability of concentrated dispersions (emulsions, suspensions, foams). It accelerates and documents ageing test for a fast and deep understanding of destabilisation mechanisms. Users can study all kinds of liquid dispersions (emulsions, suspensions, foams) as samples ageing is accelerated up to 200 times and gives a fair assessment within minutes as opposed to a usual 14-day accelerated storage study.",
    },
    {
      title: "MALVERNS’ ZETASIZER NANO ZS",
      image: "/assets/zetasizer-nano-s90-500x500.png",
      description:
        "is a high performance two angle particle, zeta- potential, and molecular size analyser for the enhanced detection of aggregates and small particles. Particle size can be measured in the range of 0.3nm to 10um; Zeta-potential can be measured in the range of 3.8nm to 100um. The MPT-2 Auto titrator allows the study of the effect of changes in pH, conductivity, or any additive to be automated to evaluate the stability of the agrochemical with surfactants.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="py-16 bg-white px-2 sm:px-12 max-w-[1600px] mx-auto">
        <div className="container px-4">
          <div>
            <h1 className="ext-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold mb-8 text-black2">
              SURFACTANTS INNOVATION CENTRES
            </h1>
            <p className="max-w-6xl text-black1 text-[clamp(17px,2vw,21px)] leading-[30px]">
              Surfactant Chemicals Company is an ideal partner for your
              developmental projects. Our state-of-the-art innovation centres
              possess multiple processing/development and research equipment
              (some of which are demonstrated below), which are necessary in
              today&apos;s fast moving dynamic world to provide for excellent
              formulation development which can be replicated at customers
              manufacturing sites and ensure efficacy in the fields:
            </p>
          </div>
        </div>
      </section>
      {/* Equipment Showcase */}
      <div className="min-h-screen bg-gray-50 py-12 px-2 sm:px-6 lg:px-8">
        <div className="px-2 sm:px-12 space-y-32">
          {equipmentData.map((equipment, index) => (
            <div
              className="bg-white rounded-[40px] py-28 px-8 border-2 border-gray-300 mt-32"
              key={index}
            >
              <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-8">
                {/* Image Section - 1.5fr equivalent (col-span-1.5 approximated with custom sizing) */}
                <div className="md:col-span-1 md:flex md:justify-center md:items-center ml-8 mr-8">
                  <div className="w-full max-w-sm mx-auto md:max-w-none">
                    <Image
                      src={equipment.image || "/placeholder.svg"}
                      alt={equipment.title}
                      width={500}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Text Section - 2.5fr equivalent */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <h2 className="text-[36px] sm:text-[38px] md:text-[40px] font-bold text-black2 mb-4 md:mb-6">
                    {equipment.title}
                  </h2>
                  <p className="text-black1 text-[clamp(17px,2vw,22px)] leading-[30px] md:text-[22px]">
                    {equipment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
