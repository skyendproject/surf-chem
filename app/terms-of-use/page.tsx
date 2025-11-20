"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import React from "react";

export default function page() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto py-16 md:py-16 px-4 lg:px-[60px] md:px-[30px] bg-white">
        <h1 className="text-4xl font-bold text-black mb-8 md:text-[66px]">TERMS OF USE</h1>

        <p className="text-sm text-gray-700 mb-8 leading-relaxed md:text-[16px]">
          These Terms and Conditions ("Agreement") apply to your use of the
          website of Surfactant Chemicals Company ("Surfactant Chemicals
          Company", "we", "us", or "our"). By accessing or using this website,
          you agree to be bound by this Agreement. If you do not agree to these
          terms, you must not use this website.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">
            1. Intellectual Property Rights
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed md:text-[16px]">
            The content on this website, including but not limited to text,
            graphics, logos, images, and software, is the property of Surfactant
            Chemicals Company or its licensors and is protected by intellectual
            property laws. You may not reproduce, distribute, modify, or create
            derivative works of any part of this website without our prior
            written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">
            2. Use of the Website
          </h2>
          <p className="text-sm text-gray-700 mb-3 leading-relaxed md:text-[16px]">
            You may use this website for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1 md:text-[16px]">
            <li>
              Use the website in any way that breaches applicable laws or
              regulations;
            </li>
            <li>
              Transmit or upload any harmful code, such as viruses or malware;
            </li>
            <li>
              Attempt to gain unauthorized access to the website, its servers,
              or associated databases;
            </li>
            <li>
              Engage in any conduct that restricts or inhibits anyone's use or
              enjoyment of the website.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">
            3. Limitation of Liability
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed md:text-[16px]">
            To the extent permitted by law, Surfactant Chemicals Company shall
            not be liable for any direct, indirect, incidental, special, or
            consequential damages arising out of or in connection with your use
            or inability to use this website. This includes, but is not limited
            to, damages for loss of data, profits, or goodwill, even if we have
            been advised of the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">
            4. Accuracy of Information
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed md:text-[16px]">
            While we strive to ensure that the information on this website is
            accurate and up-to-date, we make no representations, warranties, or
            guarantees, whether express or implied, that the content is
            accurate, complete, or free from errors or omissions. Surfactant
            Chemicals Company reserves the right to modify or remove content
            without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">
            5. Third-Party Links
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed md:text-[16px]">
            This website may contain links to third-party websites. These links
            are provided for your convenience, and Surfactant Chemicals Company
            has no control over the content of such websites. We accept no
            responsibility for any loss or damage arising from your use of
            third-party websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">
            6. Privacy Policy
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed md:text-[16px]">
            Your use of this website is also governed by our{" "}
            <span className="text-teal-600">Privacy Policy</span>, which is
            incorporated by reference into these Terms and Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">
            7. Governing Law
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed md:text-[16px]">
            This Agreement shall be governed by and construed in accordance with
            the laws of Pakistan. Any disputes arising from or related to this
            Agreement shall be subject to the exclusive jurisdiction of the
            courts of Pakistan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">
            8. Changes to These Terms
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed md:text-[16px]">
            Surfactant Chemicals Company reserves the right to modify these
            Terms and Conditions at any time. Any changes will be posted on this
            page, and your continued use of the website after such changes
            constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 md:text-[40px]">9. Contact Us</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed md:text-[16px]">
            If you have any questions about these Terms and Conditions, please
            contact us:
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="font-bold text-black">
                SURFACTANT CHEMICALS COMPANY MIDDLE EAST DWC-LLC
              </p>
              <p className="text-gray-700">
                Middle East/North Africa Liaison Office
              </p>
              <p className="text-gray-700">1st Floor, Building A3,</p>
              <p className="text-gray-700">Dubai South Business Center</p>
              <p className="text-gray-700">Dubai</p>
              <p className="text-gray-700">United Arab Emirates</p>
            </div>

            <div>
              <p className="font-bold text-black">
                SURFACTANT CHEMICALS COMPANY MIDDLE EAST FZC
              </p>
              <p className="text-gray-700">Global Exports Division</p>
              <p className="text-gray-700">Office No. 1011,</p>
              <p className="text-gray-700">Ajman Freezone Building C1,</p>
              <p className="text-gray-700">Ajman,</p>
              <p className="text-gray-700">United Arab Emirates</p>
              <p className="text-gray-700">
                Tel: +971-52-512-4789/+971-56-249-9497
              </p>
            </div>

            <div>
              <p className="font-bold text-black">
                SURFACTANT CHEMICALS COMPANY TRADING L.L.C
              </p>
              <p className="text-gray-700">Local UAE Trading Division</p>
              <p className="text-gray-700">Office No. 1011, Rawdha 3,</p>
              <p className="text-gray-700">Ajman,</p>
              <p className="text-gray-700">United Arab Emirates</p>
              <p className="text-gray-700">Tel: +971-56-249-9497</p>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    href="mailto:exportsales@surfchem.co.uk"
                    className="text-teal-600"
                  >
                    exportsales@surfchem.co.uk
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:marketing@surfchem.co.uk"
                    className="text-teal-600"
                  >
                    marketing@surfchem.co.uk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-black">
                Surfactant Chemicals Company (Asia Pacific) Pte. Ltd.
              </p>
              <p className="text-gray-700">
                Agriculture/Crop Care SBU Headquarters
              </p>
              <p className="text-gray-700">
                #19-06, 30 Cecil Street, Prudential Towers,
              </p>
              <p className="text-gray-700">Singapore</p>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    href="mailto:complaints@surfchem.co.uk"
                    className="text-teal-600"
                  >
                    complaints@surfchem.co.uk
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:marketing@surfchem.co.uk"
                    className="text-teal-600"
                  >
                    marketing@surfchem.co.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
