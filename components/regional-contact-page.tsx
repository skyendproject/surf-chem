"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Navigation } from "./navigation";
import { RegionalContactForm } from "./regional-contact-form";

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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content */}
      <section className="bg-gray-50 min-h-screen py-16 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-8 px-4 lg:px-[60px] md:px-[30px]">
              <div>
                <h1 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold">
                  {data.title}
                </h1>
                <h2 className="text-none md:text-[44px] font-bold text-black2 mb-8">
                  REGIONAL CONTACTS
                </h2>
              </div>

              <div>
                <div className="mb-8">
                  {/* <h3 className="text-xl text-gray-900 mb-2">
                  </h3> */}
                  <div
                    className="text-[22px] text-black mb-6 max-w-[350px]"
                  >
                    <p>{data.address}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[32px] font-bold text-black mb-3">
                      Email:
                    </h4>
                    {data.email.split('\n').map((email, index) => (
                      <div className="space-y-2" key={index}>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                          <a
                            href={`mailto:${email.replace('-', '').trim()}`}
                            className="text-gray-600 text-[22px]"
                          >
                            {email.replace('-', '').trim()}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <RegionalContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">HAVE A QUESTION ?</h2>
              <p className="text-blue-200 text-lg">
                Looking to learn more about how we can help you
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center relative">
                  <div className="w-5 h-5 bg-blue-600 rounded-full absolute top-0 left-0"></div>
                  <div className="w-3 h-3 bg-white rounded-full absolute bottom-0 right-0"></div>
                </div>
                <div>
                  <div className="font-bold">SURFACTANT</div>
                  <div className="text-sm">CHEMICALS</div>
                  <div className="text-xs">COMPANY</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Innovative Surface Chemistry
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/company-history" className="hover:text-green-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/board-of-directors"
                    className="hover:text-green-400"
                  >
                    Board Of Directors
                  </a>
                </li>
                <li>
                  <a href="/innovation-center" className="hover:text-green-400">
                    Innovation Center
                  </a>
                </li>
                <li>
                  <a href="/sustainability" className="hover:text-green-400">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Agriculture / Farming
                  </a>
                </li>
                <li>
                  <a href="/products/paints" className="hover:text-green-400">
                    Paints
                  </a>
                </li>
                <li>
                  <a
                    href="/products/trading-chemicals"
                    className="hover:text-green-400"
                  >
                    Trading Chemicals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informative</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/formulation-guides"
                    className="hover:text-green-400"
                  >
                    Formulation Guides
                  </a>
                </li>
                <li>
                  <a href="/news" className="hover:text-green-400">
                    News
                  </a>
                </li>
                <li>
                  <a href="/white-papers" className="hover:text-green-400">
                    White Papers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {/* <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      /> */}
    </div>
  );
}
