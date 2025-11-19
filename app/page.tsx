"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, ChevronRight, X } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import TechnologyPortfolio from "@/components/technology-portfolio";
import Resources from "@/components/resources";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4">

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/assets/hero-img.png"
                alt="Drone spraying crops"
                width={394}
                height={382}
                className="
      rounded-[30px]
      shadow-lg
      object-cover
      w-[390px]
      h-[320px]
      md:w-[382px]
      md:h-[394px]
      transform
      md:translate-x-2
      lg:translate-x-4
    "
              />
            </div>


            {/* Text */}
            <div className="order-2 lg:order-1 flex-1 space-y-6 md:py-[10px]">
              <h1 className="text-[53px] font-bold text-black2 leading-[59px]">
                Advanced, eco-friendly surfactants that enhance agrochemical
                efficacy and reduce costs.
              </h1>
              <p className="text-black1 text-[clamp(17px,2vw,22px)] leading-[31px]">
                Agrochemical manufacturers struggling with high costs and
                inefficiencies turn to Surfactant Chemicals Company for
                sustainable surfactant solutions. Our advanced, eco-friendly
                technologies optimize agrochemical formulations, improve
                bio-efficacy, and reduce environmental impact, helping you
                achieve better yields while lowering overall costs. With our
                support, you can innovate your product line, meet stringent
                regulatory standards, and enhance performance—all while
                promoting sustainable farming practices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE HELP Section */}
      <section className="bg-black2 pt-16 pb-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[42px] md:text-[55px] font-bold text-white mb-10">
            WHO WE HELP
          </h2>

          <div className="overflow-x-auto hide-scrollbar">
            <div className="text-[26px] font-bold flex justify-center gap-6 md:gap-16 text-white mb-12 min-w-max px-4 mx-auto">
              <Link
                href="/products"
                className="relative whitespace-nowrap after:block after:h-[3px] after:w-0 after:bg-red after:transition-all after:duration-300 after:origin-left hover:after:w-full"
              >
                Agrochemicals
              </Link>
              <Link
                href="/paints"
                className="relative whitespace-nowrap after:block after:h-[3px] after:w-0 after:bg-red after:transition-all after:duration-300 after:origin-left hover:after:w-full"
              >
                Paints
              </Link>
              <Link
                href="/trading-chemicals"
                className="relative whitespace-nowrap after:block after:h-[3px] after:w-0 after:bg-red after:transition-all after:duration-300 after:origin-left hover:after:w-full"
              >
                Trading Chemicals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        className="relative sm:h-[900px] h-[300px] bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/2336d79754f340fe0f0ad691b8c773b284a01668.webp?height=500&width=1200')",
          backgroundPosition: "top right", // keep logo visible
          backgroundSize: "cover",          // image takes full width
        }}
      >
        {/* Green Bar */}
        <div className="h-8 bg-greenCustom w-full absolute top-0 left-0 z-10"></div>

        {/* Floating Search Box */}
        <div className="absolute inset-x-0 -top-8 flex justify-center z-20">
          <div className="bg-white rounded-xl shadow-lg py-4 px-4 sm:py-7 sm:px-10 
        flex gap-2 w-full max-w-[730px] h-[80px] md:h-[115px] relative">
            <div className="flex gap-2 border border-black2 rounded-lg w-full justify-center items-center pl-4">
              <Input
                type="text"
                placeholder="What can we help you find?"
                className="flex-1 border-none focus:ring-0 focus:outline-none z-10"
              />
              <Button
                className="text-[20px] font-semibold bg-greenCustom text-white 
             border-2 border-green-600 
             hover:!bg-white hover:!text-green-600
             px-14 py-5 md:py-7 rounded-lg transition-colors duration-300"
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <div className="relative h-full flex items-center justify-center">
          <Button
            size="lg"
            onClick={() => setShowModal(true)}
            className="bg-[#0e6eff] hover:bg-[#0053ce] text-white w-32 h-20 rounded-none"
          >
            <Play className="w-full h-full fill-white" strokeWidth={2.5} />
          </Button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        // <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-end justify-center">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-2 sm:p-4">
          <div className="relative w-full max-w-5xl p-4">
            {/* Close button in top-right corner of modal */}
            <button
              className="absolute top-2 right-[-5px] md:right[-20px] text-white text-3xl font-bold hover:text-gray-300 z-10"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Video modal content */}
            <div className="w-full aspect-video overflow-hidden shadow-lg bg-black">
              <video
                // controls
                // className="w-full h-full object-cover"
                // preload="metadata"

                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] object-contain"
                controls
                autoPlay
                preload="metadata"
                playsInline
              >
                <source src="/assets/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        // <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-2 sm:p-4">
        //   <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
        //     {/* Close Button */}
        //     <Button
        //       onClick={() => setShowModal(false)}
        //       className="absolute top-2 right-[20px] text-white text-3xl font-bold hover:text-gray-300 z-10"

        //       // className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 sm:p-2 h-auto w-auto transition-colors"
        //     >
        //       <X className="h-4 w-4 sm:h-5 sm:w-5" />
        //     </Button>

        //     {/* Video Player */}
        //     <div className="relative w-full">
        //       <video
        //         className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] object-contain"
        //         controls
        //         autoPlay
        //         preload="metadata"
        //         playsInline
        //       >
        //         <source src="/assets/BigBuckBunny.mp4" type="video/mp4" />
        //         Your browser does not support the video tag.
        //       </video>
        //     </div>
        //   </div>

        //   {/* Click outside to close */}
        //   <div
        //     className="absolute inset-0 -z-10"
        //     onClick={() => setShowModal(false)}
        //   />
        // </div>
      )}

      {/* Agricultural Revolution Section */}
      <section className="bg-white overflow-x-hidden overflow-y-hidden pb-[300px] md:pb-16">
        <div className="container px-4 sm:px-14">
          <div className="grid md:grid-cols-[2.5fr_1.5fr] gap-0 items-center">
            {/* Text column - 2.5fr */}
            <div className="space-y-6">
              <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold mb-8 pt-16">
                Sparking an <br />
                Agricultural Revolution!
              </h2>
              <p
                className="text-black mb-8 mr-4"
                style={{
                  fontSize: "clamp(27px, 4vw, 32px)",
                  lineHeight: "36px",
                }}
              >
                At the heart of our mission lies a profound belief: that by
                igniting advancements in agricultural production, we can
                eradicate hunger and ensure an abundance of food for all. We see
                every farm machine as a vital instrument in nourishing the
                world’s population. For when agriculture flourishes, so too do
                the prospects of humanity. It is the cornerstone upon which all
                other endeavors are built. At Surfactant Chemicals Company, we
                are committed to pioneering innovations that propel agriculture
                forward, forging a path towards a brighter, more sustainable
                future for generations to come.
              </p>
              <ul className="space-y-3 text-black text-[30px] gap-8">
                <li className="flex items-center gap-4">
                  {/* <ChevronRight className="w-5 h-5 text-green-600 mr-2" /> */}
                  <img
                    src="/assets/point.svg"
                    alt="Emulsifiers"
                    className="w-4 h-4"
                  />

                  <span>Emulsifiers</span>
                </li>
                <li className="flex items-center gap-4">
                  <img
                    src="/assets/point.svg"
                    alt="Emulsifiers"
                    className="w-4 h-4"
                  />
                  <span> Dispersing agents</span>
                </li>
                <li className="flex items-center gap-4">
                  <img
                    src="/assets/point.svg"
                    alt="Emulsifiers"
                    className="w-4 h-4"
                  />
                  <span>Wetting agents</span>
                </li>
                <li className="flex items-center gap-4">
                  <img
                    src="/assets/point.svg"
                    alt="Emulsifiers"
                    className="w-4 h-4"
                  />
                  <span>Bio-pesticides & Bio-formulation</span>
                </li>
                <li className="flex items-center gap-4">
                  <img
                    src="/assets/point.svg"
                    alt="Emulsifiers"
                    className="w-4 h-4"
                  />
                  <span>AI Drones and Machinery</span>
                </li>
                <li className="flex items-center gap-4">
                  <img
                    src="/assets/point.svg"
                    alt="Emulsifiers"
                    className="w-4 h-4"
                  />
                  <span>Polymeric Surfactants</span>
                </li>
              </ul>
            </div>

            {/* Image column - 1.5fr */}
            <div className="relative md:mt-[-280px] mt-20">
              <div className="relative flex justify-center">
                {/* Foreground Ellipse */}
                <div className="relative z-10 right-[40px] md:right-[-80px] top-[40px] md:top-[0px] w-[350px] sm:w-[400px] md:w-[557px] aspect-square rounded-full border border-greenCustom p-4 md:p-[25px] bg-white">
                  <img
                    src="/assets/Ellipse-1.png"
                    alt="Ellipse"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Background Union Image */}
                <div className="absolute z-0 top-20 sm:top-24 md:top-[20px] left-[90px] sm:left-16 md:left-[126px] w-[500px] sm:w-[500px] md:w-[837.55px]">
                  <img
                    src="/assets/Union 4.png"
                    alt="Union background"
                    className="w-full h-auto max-h-[750px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}

      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/shutterstock_334921961.png?height=600&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto  px-4 sm:px-14 h-full flex items-center justify-between">
          <div className="max-w-3xl text-white">
            <h1 className="text-[48px] md:text-[66px] font-bold mb-2 md:leading-[70px]">
              Our Story
            </h1>

            <p className="text-[30px] md:text-[42px] leading-[35px] md:leading-[50px] mb-8 mr-6 md:mr-4">
              Guided by a commitment to scientific excellence, decades of
              experience, and a dedication to education, we engineer specialized
              products designed to optimize performance and drive positive
              transformation in the industries we serve.
            </p>

            <Button className="text-[32px] md:text-[41px] font-bold bg-transparent hover:bg-transparent border-y-0 border-x-4 text-white border-red hover:text-red h-12 rounded-none">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-greenCustom py-4"></div>

      {/* Technology Portfolio */}
      <TechnologyPortfolio />

      {/* Resources */}
      <Resources />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
