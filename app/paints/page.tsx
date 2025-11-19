import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PaintsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content */}
      <section className="py-16 bg-gray-50 max-w-[1600px] mx-auto">
        <div className="container px-4 sm:px-12">
          <div className="grid lg:grid-cols-2 gap-4 items-start lg:gap-12">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-black2">
                Paints
              </h1>

              <p className="text-[22px] sm:text-xl text-black leading-relaxed mb-8">
                At Surfactant Chemicals Company, we understand that the art of
                paint formulation is a delicate balance of science and
                creativity. Our advanced surfactants are meticulously engineered
                to enhance the performance of waterborne polymers and coating
                systems, ensuring that every brushstroke delivers excellence.
              </p>

              <p className="text-md sm:text-xl text-black leading-relaxed mb-8">
                Our SurfPet® range of surfactants offers a multitude of
                benefits:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-md sm:text-xl font-bold text-black2 mb-2">
                    Primary Emulsification:
                  </h3>
                  <p className="text-md sm:text-xl text-black">
                    Serving as the main emulsifier for various binder systems,
                    ensuring uniformity and stability.
                  </p>
                </div>

                <div>
                  <h3 className="text-md sm:text-xl font-bold text-black2 mb-2">
                    Particle Size Control:
                  </h3>
                  <p className="text-md sm:text-xl text-black">
                    Providing exceptional control during milling, leading to
                    consistent and desirable particle sizes.
                  </p>
                </div>

                <div>
                  <h3 className="text-md sm:text-xl font-bold text-black2 mb-2">
                    Superior Pigment Wetting:
                  </h3>
                  <p className="text-md sm:text-xl text-black">
                    The unique surface tension profile aids in the superior
                    wetting of pigments, resulting in vibrant and uniform
                    colors.
                  </p>
                </div>

                <div>
                  <h3 className="text-md sm:text-xl font-bold text-black2 mb-2">
                    Enhanced Emulsion Stability:
                  </h3>
                  <p className="text-md sm:text-xl text-black">
                    Imparting excellent stability to emulsion systems,
                    preventing separation and ensuring longevity.
                  </p>
                </div>

                <div>
                  <h3 className="text-md sm:text-xl font-bold text-black2 mb-2">
                    Versatility:
                  </h3>
                  <p className="text-md sm:text-xl text-black">
                    Well-suited for dispersing both organic and inorganic
                    pigments across a wide range of applications.
                  </p>
                </div>
              </div>

              <p className="text-md sm:text-xl text-black leading-relaxed mt-8">
                By integrating our innovative surfactants into your
                formulations, you can achieve coatings that not only meet but
                exceed industry standards, delivering unparalleled quality and
                performance.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/paint-factory.png"
                  alt="Paint manufacturing equipment"
                  width={500}
                  height={600}
                  className="h-auto"
                />
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
