"use client";

import { ContactModal } from "./contact-modal";

export function Footer() {
  const isOffsetNeeded = true;
  const offset = isOffsetNeeded ? "-100px" : "0px";

  // ✅ Reusable links data
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/company-history" },
        { name: "Board Of Directors", href: "/board-of-directors" },
        { name: "Innovation Center", href: "/innovation-center" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact-us/EdqZlRZsDem7RUy0PxJG" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Agriculture / Farming", href: "/products" },
        { name: "Paints", href: "/paints" },
        { name: "Trading Chemicals", href: "/trading-chemicals" },
      ],
    },
    {
      title: "Informative",
      links: [
        { name: "Formulation Guides", href: "/formulation-guides" },
        { name: "News", href: "/news" },
        { name: "White Papers", href: "/general-white-papers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms Of Use", href: "/terms-of-use" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];

  return (
    <>
      {/* Top CTA Section */}
      <section className="py-16 bg-customBlue text-white">
        <div className="container px-4 sm:px-14 mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:text-left gap-6">
            <div className="">
              <h2 className="text-[48px] md:text-[66px] font-bold mb-2">
                HAVE A QUESTION ?
              </h2>
              <p className="text-white text-[27px] sm:text-[32px]">
                Looking to learn more about how we can help you
              </p>
            </div>
            <div>
              <ContactModal
                triggerText="Let's Talk"
                triggerClassName="text-[22px] md:text-[27px] px-12 md:px-16 py-6 md:py-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-white py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px] border-t  mx-auto max-w-[1600px]">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <img
              src="/assets/SCCLogo.png"
              alt="Surfactant Chemicals Company Logo"
              className="w-64 mb-4"
            />
          </div>

          {/* Dynamic footer links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[44px] text-left">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-bold mb-3 text-[28px] text-black2 leading-[32px]">
                  {section.title}
                </h3>
                <ul className="text-[18px] text-gray-700">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

//  {
//    /* Footer Section */
//  }
//  <footer className="bg-footer border-t border-footer-border py-12 px-6">
//    <div className="">
//      <div className="grid grid-cols-1 lg:grid-cols-4 gap-32">
//        {/* Company Logo and Info Section */}
//        <div className="lg:col-span-1">
//          {/* <div className="">
//               <Image
//                 src="/assets/SCC-Logo.png"
//                 alt="Resource 3"
//                 width={300}
//                 height={300}
//                 className=""
//               />
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-footer-text tracking-wide">
//                 SURFACTANT
//                 <br />
//                 CHEMICALS
//               </h2>
//               <div className="flex items-center mt-1 mb-2">
//                 <span className="text-lg font-semibold text-footer-text tracking-[0.2em]">
//                   C O M P A N Y
//                 </span>
//               </div>
//               <p className="text-footer-muted text-sm italic">
//                 Innovative Surface Chemistry
//               </p>
//             </div> */}

//          <div className="ml-8 mr-16">
//            <div className="text-center">
//              <div>
//                <Image
//                  src="/assets/SCC-Logo.png"
//                  alt="Resource 3"
//                  width={400}
//                  height={400}
//                  className="object-cover"
//                />
//              </div>
//              <div className="text-4xl font-bold text-black2">SURFACTANT</div>
//              <div className="text-4xl font-bold text-black2">CHEMICALS</div>
//              <div
//                className="text-2xl text-blue-900 font-semibold"
//                style={{ letterSpacing: "0.5em" }}
//              >
//                COMPANY
//              </div>
//              <div className="text-lg tracking-tighter text-gray-400">
//                Innovative Surface Chemistry
//              </div>
//            </div>
//          </div>
//        </div>

//        {/* Dynamic Links Section */}
//        <div className="lg:col-span-3">
//          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//            {footerLinks.map((section, idx) => (
//              <div key={idx}>
//                <h3 className="font-semibold text-footer-text mb-4 text-base">
//                  {section.title}
//                </h3>
//                <ul className="space-y-2">
//                  {section.links.map((link, linkIdx) => (
//                    <li key={linkIdx}>
//                      <Link
//                        href={link.href}
//                        className="text-footer-muted hover:text-footer-text transition-colors text-sm"
//                      >
//                        {link.name}
//                      </Link>
//                    </li>
//                  ))}
//                </ul>
//              </div>
//            ))}
//          </div>
//        </div>
//      </div>
//    </div>
//  </footer>;
