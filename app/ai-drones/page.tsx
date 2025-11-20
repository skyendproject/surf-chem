import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { CheckCircle, Dot } from "lucide-react";
import { Footer } from "@/components/footer";

export default function AIDronesPage() {
  const features = [
    {
      title: "High-Resolution Imaging & Sensors",
      description:
        "Equipped with advanced cameras and sensors, our drones capture detailed images and data to help farmers optimize fertilizer and pesticide usage, ensuring precise application where needed.",
    },
    {
      title: "Precision Spraying Technology",
      description:
        "Integrated spraying systems minimize environmental contamination by delivering fertilizers and pesticides only to targeted areas, reducing waste and enhancing crop health.",
    },
    {
      title: "Smart Irrigation Solutions",
      description:
        "Drones equipped with selective irrigation capabilities prevent water wastage, salinization, and waterlogging while ensuring crops receive the hydration they need.",
    },
    {
      title: "Pollination & Infrastructure Inspection",
      description:
        "Our drones aid in crop pollination to address yield decline in large farming areas and inspect agricultural infrastructure to support better maintenance and planning.",
    },
    {
      title: "AI-Driven Recommendations",
      description:
        "Leveraging AI and machine learning, our drones analyze weather and soil data to recommend optimal fertilizer, pesticide, and water usage while suggesting actionable steps to maximize productivity.",
    },
    {
      title: "Advanced Navigation & Safety Features",
      description:
        "Integrated GPS systems ensure precise field navigation, while collision avoidance technology prevents obstacles from disrupting operations.",
    },
    {
      title: "Thermal Imaging for Plant Stress",
      description:
        "Advanced thermal imaging capabilities identify stressed areas of crops, enabling timely intervention to prevent losses.",
    },
    {
      title: "Automated Flight Planning",
      description:
        "Programmed flight paths, improved through AI, allow for seamless and efficient field coverage, reducing labor costs and saving time.",
    },
    {
      title: "Cloud-Based Data Storage",
      description:
        "Collected data is securely stored on the cloud for continuous improvement and informed future decision-making.",
    },
    {
      title: "Variable Rate Technology (VRT)",
      description:
        "VRT enables precise application of inputs like water and fertilizers, maximizing efficiency and reducing waste.",
    },
    {
      title: "Weather-Resistant Design",
      description:
        "Built to endure harsh weather conditions, our drones provide reliable performance in diverse environments.",
    },
    {
      title: "User-Friendly Mobile Application",
      description:
        "Intuitive mobile controls simplify drone operation, making them accessible to all farmers regardless of technical expertise.",
    },
    {
      title: "LiDAR for 3D Mapping",
      description:
        "LiDAR technology creates detailed 3D maps of terrain and vegetation, providing invaluable insights for terrain management and crop planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 px-4 lg:px-[60px] md:px-[30px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Image: 1st on mobile/md, 2nd on desktop; spans 4.5/12 = 1.5 cols out of 4 */}
            <div className="order-1 lg:order-2 col-span-1 lg:col-span-5 md:h-[394px] md:w-[492px]">
              <Image
                src="/assets/ai-drones.jpg"
                alt="Drone spraying crops"
                width={450}
                height={600}
                className="rounded-[30px] shadow-lg w-full h-full"
              />
            </div>

            {/* Text: 2nd on mobile/md, 1st on desktop; spans 7/12 = 2.5 cols out of 4 */}
            <div className="order-2 lg:order-1 col-span-1 lg:col-span-7 space-y-6 md:py-[10px] max-w-2xl">
              <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold mb-6 text-black2">
                AI Drones
              </h1>
              <h1 className="text-[25px] font-bold text-black2 leading-tight">
                Transforming Agriculture with AI-Driven Drone Tech
              </h1>
              <p className="text-[18px] md:text-[22px] leading-[30px] text-black mb-6">
                Artificial Intelligence has revolutionized industries worldwide,
                and agriculture is no exception. At Surfactant Chemicals
                Company, we&apos;ve embraced AI to develop cutting-edge drone
                solutions tailored specifically to agricultural needs. Our
                AI-powered drones are designed to address some of the most
                critical challenges in modern farming, combining precision,
                efficiency, and sustainability.
              </p>
              <p className="text-[18px] md:text-[22px] leading-[30px] text-black mb-6">
                With agriculture being the backbone of many regions where we
                operate, our drone technology delivers a wide range of benefits,
                including monitoring crop and soil health, precision spraying,
                targeted nutrient delivery, smart irrigation, and data-driven
                decision-making. By leveraging AI and advanced sensors, these
                drones empower farmers to enhance productivity, reduce input
                waste, prevent pest and disease outbreaks, and ultimately
                increase yields while minimizing environmental impact.
              </p>
              <h2 className="text-[22px] font-bold mb-12 text-greenCustom">
                Key Features of Our AI-Powered Drones:
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div>
                      <div className="flex items-center text-[22px] font-bold text-black gap-2">
                        <Dot className="w-10 h-10 text-black flex-shrink-0" />
                        <span>{feature.title}</span>
                      </div>

                      <p className="text-black1 text-[22px] leading-[30px] ml-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="container mx-auto px-4">
                <h2 className="text-[22px] font-bold mb-4 text-black2">
                  Driving the Future of Agriculture
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-black2 text-[22px] leading-[30px] mb-6">
                    At Surfactant Chemicals Company, we&apos;re proud to pioneer
                    AI-driven drone technology that empowers farmers to produce
                    more with less. Our drones offer a revolutionary approach to
                    sustainable farming, enabling precise input management,
                    smarter decision-making, and enhanced crop monitoring. By
                    integrating innovation with agriculture, we&apos;re shaping
                    the future of farming—one flight at a time.
                  </p>
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
