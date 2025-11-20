"use client";

import { useState } from "react";
import { ContactModal } from "./contact-modal";
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
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  useEffect(() => {
    getRegionalContacts().then(setCountries);

    // set initial active country from current page data
    setActiveCountry(data.id);
  }, [data.id]);


  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content */}
      <section className="bg-gray-50 min-h-screen py-16 md:py-2">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Side - Contact Information */}
            <div className="space-y-8 px-4 lg:px-[60px] md:px-[30px] md:py-16">
              <div>
                {/* Country Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {countries.map((country) => (
                    <Link
                      key={country.id}
                      href={`/contact-us/${country.id}`}
                      onClick={() => setActiveCountry(country.id)}
                      className={`
        text-[14px] font-bold rounded-full border-2 md:py-3 md:px-4 transition
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
                  {data.title}
                </h1>

                <h2 className="text-none md:text-[44px] font-bold text-black2 mb-8">
                  REGIONAL CONTACTS
                </h2>
              </div>


              <div>
                <div className="mb-8">
                  <div className="text-[22px] text-black mb-6 max-w-[350px]">
                    <div
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: data?.address || "" }}
                    />
                  </div>
                </div>

                <div className="space-y-6">
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
              </div>
            </div>

            {/* Right Side - Contact Form (Adjusted Only This) */}
            <div className="flex justify-start items-start mt-0 pt-0">
              <div className="w-full max-w-lg">
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
