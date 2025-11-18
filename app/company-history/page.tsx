import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getCompanyHistory } from "@/lib/backend";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default async function CompanyHistoryPage() {
  const data = await getCompanyHistory()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      {/* <div className="container mx-auto py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px] bg-white"></div> */}
      <section
        className="relative h-[850px] sm:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/Frame Background.png?height=600&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative container mx-auto px-4 lg:px-[60px] md:px-[30px] h-full flex items-center justify-between gap-32">
          {/* Text Section */}
          <div className="max-w-3xl text-white pt-[70px]">
            <h1 className="text-[45px] font-bold mb-2 md:leading-[50px] mr-6">
              About Surfactant Chemicals Company
            </h1>
            <h1 className="text-[77px] md:text-[115px] font-bold leading-[70px] md:leading-[130px] mb-6">
              {data.title}
            </h1>
            <ReactMarkdown>{data.description}</ReactMarkdown>
          </div>

          {/* Image Section */}
          <div className="hidden sm:block pt-[70px]">
            <Image
              src="/assets/SCC-Logo.png"
              alt="Resource 3"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Global Presence */}
      <section className="mx-auto px-6 lg:px-16 py-8 md:py-12 lg:py-16 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Industrial port image */}
          <div className="flex-shrink-0">
            <div className="w-[350px] md:w-[650px] h-[320px] md:h-[440px] rounded-3xl overflow-hidden">
              <img
                src="/assets/masano_Surfactant_Chemicals_Company_boasts_a_EuropeanBritish_f_0a77d744-b30c-4d26-a91b-8917a0c96cc7.png"
                alt="Industrial port facility at dusk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex-1 mt-6 md:mt-0 mr-2">
            <h2 className="text-[48px] lg:text-[66px] md:leading-[70px] text-black2 font-bold mb-4 lg:mb-16">
              Our Global Presence
            </h2>
            <ReactMarkdown>{data.global_presence}</ReactMarkdown>
          </div>
        </div>
      </section>

      {/* Our Core Focus and Vision */}
      <section className="bg-white overflow-x-hidden overflow-y-hidden pb-[300px] md:pb-[180px] mt-20">
        <div>
          <div className="grid lg:grid-cols-[2.5fr_1.5fr] gap-0 items-start">
            {/* Text column */}
            <div className="px-6 lg:px-16 pt-0 mr-2">
              <h2 className="text-[48px] lg:text-[66px] md:leading-[60px] text-black2 font-bold mb-4 lg:mb-16">
                Our Core Focus and Vision
              </h2>
              <ReactMarkdown>{data.vision}</ReactMarkdown>
            </div>

            {/* Image section */}
            <div
              className="hidden lg:block"
              style={{
                position: "relative",
                width: "660px",
                height: "642px",
                backgroundColor: "green",
                borderRadius: "327px 0 0 347px",
                overflow: "visible",
              }}
            >
              {/* White curve background behind */}
              <Image
                src="/assets/Union4White.png"
                alt="Background curve"
                width={827}
                height={837}
                style={{
                  position: "absolute",
                  left: "170px",
                  top: "96px",
                  zIndex: 1,
                }}
              />

              {/* Big drone image on top */}
              <img
                src="/assets/hero-img.png"
                alt="Drone spraying field"
                style={{
                  position: "absolute",
                  top: "36px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  border: "25px solid white",
                  width: "560px",
                  height: "560px",
                  zIndex: 2,
                }}
              />

              {/* Small tank image */}
              <img
                src="/assets/scc.jpg"
                alt="Tank image"
                style={{
                  position: "absolute",
                  bottom: "-120px",
                  left: "120px",
                  borderRadius: "50%",
                  border: "15px solid white",
                  width: "370px",
                  height: "370px",
                  zIndex: 3,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="bg-greenCustom text-white pb-8">
        <div
          className="relative h-[1300px] lg:h-[900px] w-[full] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/shutterstock_334921961.png')",
          }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative z-10 px-6 md:px-16 py-8 md:py-12 lg:py-16">
            <div className="container mx-auto">
              {/* Main heading */}
              <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold text-white mb-8">
                Our Mission & Values
              </h1>

              {/* Mission and Values content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32">
                {/* Mission section */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-[42px] md:text-[55px] font-bold text-white">
                      Mission:
                    </h2>
                    <div className="flex-1 h-1 bg-red mt-8"></div>
                  </div>
                  <ReactMarkdown>{data.mission}</ReactMarkdown>
                </div>

                {/* Values section */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-[42px] md:text-[55px] font-bold text-white">
                      Value:
                    </h2>
                    <div className="flex-1 h-1 bg-red mt-8"></div>
                  </div>
                  <ReactMarkdown>{data.values}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-[60px] md:px-[30px] ">
          <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] font-bold text-black2 mb-8">
            Our Focus Areas
          </h1>
          <div className="space-y-16">
            {/* Innovation */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <div className="sm:col-span-2">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/scc-innovation.jpg"
                    alt="Industrial chemical plant with storage tanks and facilities at dusk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 60vw, 25vw"
                  />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-5xl sm:text-6xl text-black2 font-bold mb-6">
                  1. Innovation
                </h2>
                <span className="text-md sm:text-xl text-black leading-relaxed mb-6">
                  At the forefront of surfactant technology, we invest heavily
                  in research and development to create breakthrough solutions.
                  Our state-of-the-art laboratories and experienced research
                  teams work continuously to develop new formulations that
                  address emerging challenges in agriculture and industrial
                  applications.
                </span>
              </div>
            </div>

            {/* Quality & Integrity */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <div className="sm:col-span-2">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/scc-quality-integrity.jpg"
                    alt="Industrial chemical plant with storage tanks and facilities at dusk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 60vw, 25vw"
                  />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-5xl sm:text-6xl text-black2 font-bold mb-6">
                  2. Quality & Integrity
                </h2>
                <span className="text-md sm:text-xl text-black leading-relaxed mb-6">
                  We uphold the highest standards of quality in all our products
                  and services. Our comprehensive quality management systems
                  ensure consistency, reliability, and safety in every batch we
                  produce. Integrity guides our business practices and
                  relationships with all stakeholders.
                </span>
              </div>
            </div>

            {/* Teamwork */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <div className="sm:col-span-2">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/scc-teamwork.jpg"
                    alt="Industrial chemical plant with storage tanks and facilities at dusk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 60vw, 25vw"
                  />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-5xl sm:text-6xl text-black2 font-bold mb-6">
                  3. Teamwork
                </h2>
                <span className="text-md sm:text-xl text-black leading-relaxed mb-6">
                  Our success is built on the collective efforts of our diverse
                  and talented team. We foster a collaborative environment where
                  innovation thrives, and every team member contributes to our
                  shared vision of sustainable chemical solutions.
                </span>
              </div>
            </div>

            {/* Safety */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <div className="sm:col-span-2">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/scc-safety.jpg"
                    alt="Industrial chemical plant with storage tanks and facilities at dusk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 60vw, 25vw"
                  />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-5xl sm:text-6xl text-black2 font-bold mb-6">
                  4. Safety
                </h2>
                <span className="text-md sm:text-xl text-black leading-relaxed mb-6">
                  Safety is paramount in everything we do. From our
                  manufacturing processes to product application, we maintain
                  rigorous safety standards to protect our employees, customers,
                  and the environment. Our comprehensive safety protocols ensure
                  responsible handling and use of all our products.
                </span>
              </div>
            </div>

            {/* Sustainability */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <div className="sm:col-span-2">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/scc-sustainability.jpg"
                    alt="Industrial chemical plant with storage tanks and facilities at dusk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 60vw, 25vw"
                  />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-5xl sm:text-6xl text-black2 font-bold mb-6">
                  5. Sustainability
                </h2>
                <span className="text-md sm:text-xl text-black leading-relaxed mb-6">
                  Environmental stewardship is at the core of our business
                  philosophy. We develop eco-friendly products that reduce
                  environmental impact while maintaining superior performance.
                  Our sustainable practices extend throughout our supply chain
                  and operations.
                </span>
              </div>
            </div>

            {/* Customer Centric */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <div className="sm:col-span-2">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/scc-safety.jpg"
                    alt="Industrial chemical plant with storage tanks and facilities at dusk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 60vw, 25vw"
                  />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-5xl sm:text-6xl text-black2 font-bold mb-6">
                  6. Customer Centric
                </h2>
                <span className="text-md sm:text-xl text-black leading-relaxed mb-6">
                  Our customers are at the heart of everything we do. We work
                  closely with our clients to understand their unique challenges
                  and develop customized solutions that meet their specific
                  needs. Our commitment to customer success drives continuous
                  improvement in our products and services.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Reach */}
      <section className="relative min-h-[450px] lg:min-h-[550px] flex items-center mb-8 py-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/Frame Background.png"
            alt="Industrial chemical plant background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-8xl px-6 sm:px-12">
          <div className="flex">
            {/* Red accent line */}
            <div className="w-1 bg-red mr-6 sm:mr-8 lg:mr-12 flex-shrink-0" />

            {/* Text content */}
            <div className="flex-1 max-w-8xl">
              <h2 className="text-[48px] lg:text-[66px] md:leading-[70px] text-white font-bold mb-4 lg:mb-16">
                Our Global Reach
              </h2>

              <p className="text-[clamp(25px,2vw,46px)] text-white/90 leading-[42px] font-medium mr-2">
                Surfactant Chemicals Company proudly manufactures and
                distributes products across a vast geographical expanse,
                spanning continents and reaching diverse markets. Our extensive
                network ensures that our high-quality products are readily
                available to meet the needs of customers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
