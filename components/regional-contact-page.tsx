"use client";

import { useState } from "react";
import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { RegionalContactForm } from "./regional-contact-form";
import { getRegionalContacts } from "@/lib/backend";
import { useEffect } from "react";
import Link from "next/link";


export interface RegionalContact {
  id: string,
  title: string,
  subtitle: string,
  address: string,
  email: string,
}

interface RegionalContactPageProps {
  data: RegionalContact;
}

export function RegionalContactPage({ data }: RegionalContactPageProps) {
  const [countries, setCountries] = useState<RegionalContact[]>([]);
  const [activeCountry, setActiveCountry] = useState<string | null>(data.id);

  useEffect(() => {
    getRegionalContacts().then(setCountries);
    // Set active country to the data.id when component mounts
    setActiveCountry(data.id);
  }, [data.id]);


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Main Content */}
      <section className="bg-gray-50 min-h-screen py-16 md:py-2 overflow-hidden relative">
        {/* Red Semicircle Background - Emerging from right wall */}
        <div
          className="
    absolute top-10 h-full w-[60%] md:w-[70%] bg-no-repeat hidden md:flex
    md:right-[-80px]          /* right -80 on md */
    lg:right-[-20px]          /* right -20 on lg */
  "
          style={{
            right: -20,               // default for mobile
            backgroundImage: "url(/assets/semicircleRed.png)",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 overflow-x-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Side - Contact Information */}
            <div className="space-y-8 px-4 lg:px-[60px] md:px-[30px] md:pb-16 md:pt-8 relative">
              <div>
                {/* Country Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {countries.map((country) => (
                    <Link
                      key={country.id}
                      href={`/contact-us/${country.id}`}
                      onClick={() => setActiveCountry(country.id)}
                      className={`
        text-[14px] font-bold rounded-xl border-2 py-2 px-2 md:py-2 md:px-2 transition
        ${activeCountry === country.id
                          ? "bg-white text-greenCustom border-greenCustom"
                          : "bg-greenCustom text-white border-greenCustom hover:bg-white hover:text-greenCustom"
                        }
      `}
                    >
                      {country.title}
                    </Link>
                  ))}
                </div>



                {/* Title */}
                <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold">
                  {activeCountry ? data.title : "Contact Us"}
                </h1>

                <h2 className="text-none md:text-[44px] font-bold text-black2 mb-8">
                  REGIONAL CONTACTS
                </h2>
              </div>

              {/* Grey Background Section - starts after REGIONAL CONTACTS */}
              <div className="relative">
                {/* Horizontal Gradient Background - spans full page width */}
                <div
                  className="absolute top-0 bottom-0"
                  style={{
                    left: 'calc(-50vw + 50%)',
                    width: '100vw',
                    zIndex: 0
                  }}
                ></div>

                <div className="relative z-10">
                  {activeCountry ? (
                    // Show selected country data
                    <>
                      <div className="mb-8 pt-8">
                        <div className="text-[22px] text-black mb-6 max-w-[350px]">
                          <div
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: data?.address || "" }}
                          />
                        </div>
                      </div>

                      <div className="space-y-6 pb-8">
                        <div>
                          <h4 className="text-[32px] font-bold text-black mb-3">
                            Email:
                          </h4>

                          {data.email.split("\n").map((email, index) => (
                            <div className="space-y-2" key={index}>
                              <div className="flex items-center">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                                <a
                                  href={`mailto:${email.replace("-", "").trim()}`}
                                  className="text-gray-600 text-[22px]"
                                >
                                  {email.replace("-", "").trim()}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Show default contact info
                    <>
                      <div className="mb-8 pt-8">
                        <h2 className="text-[28px] md:text-[32px] font-bold text-black2 mb-6">
                          Contacting Us
                        </h2>
                        <div className="text-[22px] text-black mb-6 max-w-[350px]">
                          <p className="text-[18px] md:text-[20px] font-semibold text-black2 mb-4">
                            Surfactant Chemicals Company (Asia Pacific) Pte. Ltd.
                          </p>
                          <p className="text-[16px] md:text-[18px] text-black">
                            Agriculture/Crop Care SBU Headquarters<br />
                            #19-08, 30 Cecil Street, Prudential Towers, Singapore
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6 pb-8">
                        <div>
                          <h4 className="text-[32px] font-bold text-black mb-3">
                            Email:
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                              <a
                                href="mailto:complaints@surfchem.co.uk"
                                className="text-gray-600 text-[22px] hover:text-greenCustom"
                              >
                                complaints@surfchem.co.uk
                              </a>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                              <a
                                href="mailto:marketing@surfchem.co.uk"
                                className="text-gray-600 text-[22px] hover:text-greenCustom"
                              >
                                marketing@surfchem.co.uk
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (Adjusted Only This) */}
            <div className="flex justify-end items-start mt-0 pt-0 overflow-x-hidden">
              <div className="w-full max-w-none lg:max-w-full">
                <RegionalContactForm id={data.id} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
