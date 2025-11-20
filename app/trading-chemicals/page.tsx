import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function TradingChemicalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content */}
      <section className="py-16 bg-gray-50 max-w-[1600px] mx-auto">
        <div className="container px-4 sm:px-12">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-black2">
                Trading Chemicals
              </h1>

              <p className="text-md sm:text-xl md:text-[22px] text-black leading-relaxed mb-8">
                In an ever-changing world, the chemical industry is a foundation
                of progress and innovation. Our trading chemicals business unit,
                operated through our unit in China, located in Suzhou – Jiangsu
                province, serves as a chemical sourcing company. A new recent
                new addition to our portfolio as we acknowledge our vital role
                in impeccably exchanging chemical products that power industries
                and improve lives.
              </p>

              <p className="text-md sm:text-xl md:text-[22px] text-black leading-relaxed mb-6">
                We aspire to develop this business as our operations are spread
                across continents and industries. It&apos;s an elaborate
                connection between supply and demand and where relationships and
                trust of customers are supreme.
              </p>

              <p className="text-md sm:text-xl md:text-[22px] text-black leading-relaxed">
                We have strategically positioned ourself to capture into a huge
                network of suppliers and buyers across continents and we ensure
                that we can source and distribute chemicals efficiently and
                competitively. We constantly explore new ways to streamline our
                processes and provide outstanding value to our clients.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg md:h-[394px] md:w-[492px]">
                <Image
                  src="/assets/tote-into-truck.jpg"
                  alt="Chemical trading and logistics"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
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
