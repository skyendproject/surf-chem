import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AgriculturalMachineryPage() {
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
                src="/assets/bead-mill-xl.jpg"
                alt="Drone spraying crops"
                width={450}
                height={400}
                className="rounded-[30px] shadow-lg w-full h-full"
              />
            </div>

            {/* Text: 2nd on mobile/md, 1st on desktop; spans 7/12 = 2.5 cols out of 4 */}
            <div className="order-2 lg:order-1 col-span-1 lg:col-span-7 space-y-6 md:py-[10px]">
              <div className="max-w-2xl">
                <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold mb-6 text-black2 pr-4">
                  Agricultural Machinery
                </h1>

                <p className="text-[18px] md:text-[22px] leading-[30px] text-black mb-6">
                  In a bid to better serve our customers in their operations,
                  alongside a range of agriculture and cropcare products, we are
                  also involved in manufacturing of certain agricultural
                  processing machinery.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-[18px] md:text-[22px] leading-[30px] text-black mb-6">
                      (1) Bead-mills (lab-scale and plant-scale)
                    </h3>
                    <ul className="space-y-2 text-[18px] md:text-[22px] leading-[30px] text-black mb-6">
                      <li>
                        • Getting higher efficiency production capability:
                        Stable continuous working, smooth discharge, smooth
                        production, high energy, reducing the grinding time
                      </li>
                      <li>
                        • Getting higher quality products: Narrow particle size
                        distribution and finer particle size makes higher
                        quality products
                      </li>
                      <li>• Low maintenance cost</li>
                    </ul>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm md:text-[22px]">
                      <tbody className="space-y-2 text-center">
                        <tr className="border-b">
                          <th className="py-2">Model</th>
                          <th className="py-2">Capacity(L)</th>
                          <th className="py-2">Motor(KW)</th>
                          <th className="py-2">Speed(rpm)</th>
                          <th className="py-2">Weight(kg)</th>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Mol-5</td>
                          <td className="py-2">5</td>
                          <td className="py-2">11</td>
                          <td className="py-2">0-1500</td>
                          <td className="py-2">400</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">S-Mill-10</td>
                          <td className="py-2">10</td>
                          <td className="py-2">22</td>
                          <td className="py-2">0-1200</td>
                          <td className="py-2">800</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">S-Mill-15</td>
                          <td className="py-2">15</td>
                          <td className="py-2">37</td>
                          <td className="py-2">0-1200</td>
                          <td className="py-2">1200</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">S-Mill-30</td>
                          <td className="py-2">30</td>
                          <td className="py-2">55</td>
                          <td className="py-2">0-100</td>
                          <td className="py-2">2200</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">S-Mill-50</td>
                          <td className="py-2">50</td>
                          <td className="py-2">75</td>
                          <td className="py-2">0-860</td>
                          <td className="py-2">2800</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">S-Mill-100</td>
                          <td className="py-2">100</td>
                          <td className="py-2">110</td>
                          <td className="py-2">0-750</td>
                          <td className="py-2">5500</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">S-Mill-150</td>
                          <td className="py-2">150</td>
                          <td className="py-2">250</td>
                          <td className="py-2">0-580</td>
                          <td className="py-2">8300</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">S-Mill-400</td>
                          <td className="py-2">400</td>
                          <td className="py-2">560</td>
                          <td className="py-2">0-480</td>
                          <td className="py-2">11700</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="text-[18px] md:text-[22px] leading-[30px] text-black mb-6">
                      (2) Jet-mills (lab-scale and plant-scale)
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-[18px] md:text-[22px] leading-[30px] text-black mb-6 italic">
                        GMP Standard
                      </h4>
                      <p className="text-[18px] md:text-[22px] text-black leading-[30px] mb-6">
                        This jet milling system is so designed and structured
                        according to GMP standard. The airflow is extremely pure
                        with filtering process. Compact internal structure to
                        perform the closed circuit milling.
                      </p>
                      <div>
                        <Image
                          src="/assets/gmpstandard.png"
                          alt="Resource 3"
                          width={800}
                          height={500}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-[18px] md:text-[22px] text-black leading-[30px] mb-6 italic">
                        Inert gas jet milling system
                      </h4>
                      <p className="text-[18px] md:text-[22px] text-black leading-[30px] mb-6">
                        The inert gas jet milling system applied for flammable,
                        explosive, oxidative and hygroscopic materials. Nitrogen
                        can be changed to other inert gas according to material.
                        Oxygen content can be control.
                      </p>
                      <div>
                        <Image
                          src="/assets/Inertgasjetmillingsystem.png"
                          alt="Resource 3"
                          width={800}
                          height={500}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
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
