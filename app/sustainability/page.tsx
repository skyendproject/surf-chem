import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Target, Users, Globe, Recycle, Lightbulb } from "lucide-react";
import { Footer } from "@/components/footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sdgGoals } from "@/data/sdgData";

export default function SustainabilityPage() {
  const sustainabilityGoals = [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation and Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice and Strong Institutions",
    "Partnerships for the Goals",
  ];

  const initiatives = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Eco-Friendly Products",
      description:
        "Developing biodegradable surfactants that minimize environmental impact while maintaining superior performance.",
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-600" />,
      title: "Circular Economy",
      description:
        "Implementing waste reduction strategies and promoting recycling throughout our manufacturing processes.",
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Carbon Neutrality",
      description:
        "Working towards carbon-neutral operations through renewable energy adoption and emission reduction programs.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Community Impact",
      description:
        "Supporting local communities through education, employment opportunities, and sustainable development projects.",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Global Standards",
      description:
        "Adhering to international environmental standards and certifications across all our operations worldwide.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation for Good",
      description:
        "Investing in research and development of sustainable technologies that benefit both industry and environment.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-4 lg:px-[60px] md:px-[30px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image: 1st on mobile/md, 2nd on desktop; spans 4.5/12 = 1.5 cols out of 4 */}
            <div className="order-1 lg:order-2 col-span-1 lg:col-span-5">
              <Image
                src="/assets/sustainability.jpg"
                alt="Drone spraying crops"
                width={450}
                height={400}
                className="rounded-[30px] shadow-lg w-full"
              />
            </div>

            {/* Text: 2nd on mobile/md, 1st on desktop; spans 7/12 = 2.5 cols out of 4 */}
            <div className="order-2 lg:order-1 col-span-1 lg:col-span-7 space-y-6 md:py-[10px] md:mr-28">
              <h1 className="ext-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold mb-8 text-black2">
                Our Commitment to Sustainability
              </h1>
              <p className="max-w-6xl text-black1 text-[clamp(18px,2vw,22px)] leading-[30px] md:text-[22px]">
                At Surfactant Chemicals Company, sustainability is at the core
                of our operations. In alignment with the United Nations' 17
                Sustainable Development Goals (SDGs) established in 2015, we
                have integrated these objectives into our regional operations.
                Our teams are dedicated to achieving these goals by 2030,
                leveraging our innovative approaches to create a positive
                impact.
              </p>
              <p className="text-[22px] sm:text-xl text-black leading-relaxed md:text-[22px]">
                Our commitment to sustainable practices stems from our
                consistent focus on innovative chemistry. We aim to be one of
                the most sustainable manufacturers of advanced surfactants,
                continuously developing solutions that not only meet but exceed
                our customers' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative h-[600px] bg-cover bg-center px-2 sm:px-12"
        style={{
          backgroundImage:
            "url('/assets/shutterstock_334921961.png?height=600&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-between">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Our Promise
            </h2>
            <p className="text-xl sm:text-3xl text-white leading-relaxed mb-6">
              As a global company, we recognize that certain challenges are
              common across regions—challenges related to land, climate, safety,
              and people. Our focus on these issues reflects our commitment to
              addressing these issues responsibly, ensuring our contributions
              foster a healthier environment.
            </p>
          </div>
        </div>
      </section>
        <div className="bg-greenCustom py-4"></div>


      {/* UN SDG Goals */}
      <section className="py-12 sm:py-16 bg-white overflow-x-hidden overflow-y-hidden max-w-[1600px] mx-auto">
        <div className="container px-4 sm:px-14">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <p className="text-xl text-black1 mb-8">
                Because of our consistent approach to innovative Chemistry, we
                have aligned ourselves with the United Nations Sustainable
                Development Goals (SDGs) as we want to be one of the most
                sustainable manufacturers of innovative surfactants.
              </p>
              <p className="text-xl text-black1 mb-8">
                We are continuously developing and providing the best surfactant
                solutions to meet our customer&apos;s satisfaction with a focus
                on sustainability. Surfactants Chemicals Company operates
                globally, and we believe few common challenges are observed in
                all regions which are related to land, climate, safety, and
                people. As we are working on green chemistry hence, we take it
                as our responsibility to contribute towards a positive
                sustainable environment.
              </p>
              <p className="text-xl text-black1 mb-8">
                In 2015 the United Nations created 17 SDGs and aimed to achieve
                them by 2030.In respect to those goals we have cascaded down
                those goals to regions in which we are operate and our teams
                work relentlessly towards those goals with the vision of
                accomplishing these objectives, on a small scale, by 2030,
                through utilizing our innovative approach.
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-black2 mb-8">
                The listed goals are:
              </h1>

              <div className="space-y-2">
                {sdgGoals.map((goal) => (
                  <div key={goal.goalNumber} className="flex items-start gap-1">
                    <span className="text-black2 text-sm min-w-[80px] leading-tight md:text-[16px]">
                      Goal {goal.goalNumber}:
                    </span>
                    <span className="text-black2 text-sm leading-tight md:text-[16px]">
                      {goal.goalTitle}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full max-w-4xl mt-8">
                <h2 className="text-2xl font-medium mb-6 text-black">
                  Some of the projects which we have been completed and some
                  which are underway are as follows:
                </h2>

                <div className="overflow-hidden">
                  {sdgGoals.map((goal) => (
                    <table
                      key={goal.goalNumber}
                      className="w-full border-collapse mb-8 text-left"
                    >
                      <thead>
                        <tr className="bg-[#CCCCCC] hover:bg-gray-300">
                          <th className="font-bold text-black w-20 leading-tight">
                            Goal {goal.goalNumber}:
                          </th>
                          <th className="font-bold text-black leading-tight">
                            {goal.goalTitle}
                          </th>
                        </tr>
                        <tr className="bg-white border-t border-white">
                          <th className="font-bold text-black">S.No.</th>
                          <th className="font-bold text-black">Project Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {goal.projects.map((project) => (
                          <tr
                            key={project.id}
                            className="bg-white border-t border-white text-md"
                          >
                            <td className="font-medium">{project.id}</td>
                            <td>{project.project}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mt-10">
              <div className="relative flex justify-center">
                {/* Foreground Ellipse */}
                <div className="relative z-10 right-[40px] md:right-[0px] top-[40px] md:top-[0px] w-[350px] sm:w-[400px] md:w-[557px] aspect-square rounded-full border border-greenCustom p-4 md:p-[25px] bg-white">
                  <img
                    src="/assets/Ellipse-1.png"
                    alt="Ellipse"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Background Union Image */}
                <div className="absolute z-0 top-20 sm:top-24 md:top-[80px] left-[90px] sm:left-16 md:left-[126px] w-[500px] sm:w-[500px] md:w-[837.55px]">
                  <img
                    src="/assets/Union 4.png"
                    alt="Union background"
                    className="w-full h-auto max-h-[680px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
