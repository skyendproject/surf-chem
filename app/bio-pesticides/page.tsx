import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function BioPesticidesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Image: 1st on mobile/md, 2nd on desktop; spans 4.5/12 = 1.5 cols out of 4 */}
            <div className="order-1 lg:order-2 col-span-1 lg:col-span-5 md:h-[394px] md:w-[492px]">
              <Image
                src="/assets/biopesticides-supplier.jpg"
                alt="Drone spraying crops"
                width={450}
                height={400}
                className="rounded-[30px] shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* Text: 2nd on mobile/md, 1st on desktop; spans 7/12 = 2.5 cols out of 4 */}
            <div className="order-2 lg:order-1 col-span-1 lg:col-span-7 space-y-6 md:py-[10px]">
              <div className="max-w-2xl">
                <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold mb-6 text-black2">
                  Bio-pesticides &
                  <br /> Bio-formulants
                </h1>

                <h2 className="text-[25px] font-bold mb-8 text-black2">
                  ECOBIOGENESIS ® - THE BIO CROP SCIENCES RANGE
                </h2>

                <p className="text-[18px] md:text-[22px] leading-[30px] text-black mb-6">
                  Our brand name merges &apos;ECO&apos; for ecology and
                  sustainability, &apos;BIO&apos; for natural biological
                  processes, and &apos;GENESIS&apos; for the beginning or
                  origin. It suggests a new era of sustainable agricultural
                  practices powered by our innovative bio-pesticides. Our range
                  of biopesticides, bio-formulants and bio-stimulants embody the
                  principles of ecological balance, harnessing the power of
                  beneficial microorganisms to offer not only robust
                  formulations but also vigorous defense against pests and
                  diseases.
                </p>

                <p className="text-[18px] md:text-[22px] leading-[30px] text-black mb-8">
                  Our vision for the ECOBIOGENESIS ® range of bio-pesticides,
                  bio-formulants, and bio-stimulants is to set a new standard in
                  agricultural excellence. We aim to empower farmers and
                  formulators with a suite of products that not only enhance
                  crop vitality and yield but also fortify the health of the
                  soil and the broader ecosystem.
                </p>

                <div className="space-y-8 ml-16">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black2">
                      SUSTAINABLE GROWTH
                    </h3>
                    <p className="text-[18px] md:text-[22px] leading-[30px] text-black">
                      At the heart of our vision is the commitment to
                      sustainable agriculture. Our products are designed to work
                      in harmony with nature, reducing the reliance on chemical
                      inputs, and promoting biodiversity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black2">
                      INNOVATIVE SOLUTIONS
                    </h3>
                    <p className="text-[18px] md:text-[22px] leading-[30px] text-black">
                      We leverage cutting-edge scientific research to develop
                      formulations that are both effective against pests and
                      diseases and supportive of plant growth and resilience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black2">
                      FARMER EMPOWERMENT
                    </h3>
                    <p className="text-[18px] md:text-[22px] leading-[30px] text-black">
                      By providing education and support, we aim to empower
                      farmers to make informed decisions that lead to improved
                      crop health and productivity, while also safeguarding the
                      environment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black2">
                      GLOBAL IMPACT
                    </h3>
                    <p className="text-[18px] md:text-[22px] leading-[30px] text-black">
                      Our goal is to make a positive impact on a global scale,
                      helping to address food security challenges and supporting
                      the transition to a more sustainable agricultural
                      paradigm.
                    </p>
                  </div>
                </div>

                <p className="text-[18px] md:text-[22px] leading-[30px] text-black mt-8">
                  In essence, our vision is to cultivate a greener future where
                  agriculture thrives in balance with the environment, driven by
                  innovation and a deep respect for the planet. We foresee a
                  future where ECOBIOGENESIS ® is synonymous with agricultural
                  resilience, empowering growers to produce bountiful harvests
                  without compromising the health of our planet. Our commitment
                  is to advance the frontier of green farming practices,
                  ensuring that every agricultural practice with EcoBioGenesis ®
                  grows into a testament to sustainable prosperity.
                </p>
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
