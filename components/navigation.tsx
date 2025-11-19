"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth } from "@/lib/firebase";
import { Button } from "@radix-ui/themes";
import { signOut } from "firebase/auth";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactModal } from "./contact-modal";

export function Navigation() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isRegionalDropdownOpen, setIsRegionalDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isAgroChemicalDropdownOpen, setIsAgroChemicalDropdownOpen] =
    useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isRegionalContactsDropdownOpen, setIsRegionalContactsDropdownOpen] =
    useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    // Reset all dropdown states when closing mobile menu
    setIsAboutDropdownOpen(false);
    setIsProductsDropdownOpen(false);
    setIsAgroChemicalDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
    setIsRegionalContactsDropdownOpen(false);
  };


  const [isAuth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setAuth(u != null))
    return () => unsubscribe();
  }, []);


  return (
    <header className="bg-white shadow-sm relative">
      <div className="bg-gray-100">
        <p className="text-center font-bold text-[18px] py-4 px-4">
          We will be attending
          <a
            href="/news/10kgmPfYmVMiO9uZX474"
            className="text-greenCustom"
          >
            {" "}
            CAC2025{" "}
          </a>
          in Shanghai March 17-19.{" "}
          <a
            href="mailto:AtifKhalid@surfchem.co.uk?subject=Meeting%20at%20CAC%20Shanghai"
            className="text-greenCustom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Meeting
          </a>{" "}
          or visit us at Booth #72F07
        </p>
      </div>

      {/* Above */}
      <div className="bg-greenCustom py-2 px-6 shadow-md hidden lg:block">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-end space-y-4 md:space-y-0">
          {/* Search bar */}
          <div className="flex-1 max-w-md mx-4 md:mx-6">
            <div className="relative flex justify-end">
              <div className="relative w-32 focus-within:w-72 transition-[width] duration-300 ease-in-out origin-right">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-greenCustom border border-white4 text-white py-1 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white4 placeholder-white"
                />
                <div className="absolute left-3 top-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-end items-center space-x-6 md:space-x-4">
            <Link
              href="/careers"
              className="text-white font-semibold transition-colors duration-200"
            >
              Careers
            </Link>
            {!isAuth ? <Link
              href="/auth-form"
              className="text-white font-semibold transition-colors duration-200"
            >
              Sign In
            </Link> :
              <Button
                onClick={() => signOut(auth)}
                className="text-white font-semibold transition-colors duration-200"
              >Sign Out</Button>
            }
            <div
              className="relative"
              onMouseEnter={() => setIsRegionalDropdownOpen(true)}
              onMouseLeave={() => setIsRegionalDropdownOpen(false)}
            >
              <button className="flex items-center text-white font-semibold">
                Regional Contacts
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isRegionalDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-greenCustom shadow-lg z-50">
                  {[
                    "Brazil",
                    "China",
                    "HongKong",
                    "India",
                    "Pakistan",
                    "Singapore",
                    "UAE",
                    "Vietnam",
                  ].map((country) => (
                    <Link
                      key={country}
                      href={`/regional-contacts/${country.toLowerCase()}`}
                      className="block px-4 py-2 font-semibold text-white hover:bg-greenCustomHover"
                    >
                      {country}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Below */}
      <div className="container px-1 py-8 flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-6">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={250}
              height={250}
              className="h-auto w-40 lg:w-64"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-2 md:space-x-1 lg:space-x-4 text-[15px] ml-12">
            <Link
              href="/"
              className="text-black2 font-bold hover:text-greenCustom"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link href='/company-history'>
                <div className="block text-black2 font-bold hover:text-greenCustom cursor-pointer">
                  About Us
                </div>
              </Link>

              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 text-sm text-white bg-greenCustom shadow-lg z-50">
                  <Link
                    href="/company-history"
                    className="block px-4 py-2 font-bold hover:bg-greenCustomHover"
                  >
                    Company History
                  </Link>
                  <Link
                    href="/board-of-directors"
                    className="block px-4 py-2 font-bold hover:bg-greenCustomHover"
                  >
                    Board of Directors
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <Link
                href="/products"
                className="block text-black2 font-bold hover:text-greenCustom cursor-pointer"
              >
                Products
              </Link>

              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-greenCustom text-white shadow-lg z-50">
                  <div
                    className="relative"
                    onMouseEnter={() => setIsAgroChemicalDropdownOpen(true)}
                    onMouseLeave={() => setIsAgroChemicalDropdownOpen(false)}
                  >
                    <Link href='/agrochemicals'>
                      <div className="block px-4 py-2 text-sm font-bold hover:bg-greenCustomHover cursor-pointer">
                        Agrochemical
                      </div>
                    </Link>

                    {isAgroChemicalDropdownOpen && (
                      <div className="absolute top-0 left-full w-64 bg-greenCustomHover text-white shadow-lg z-50">
                        <Link
                          href="/agricultural-surfactants"
                          className="block px-4 py-2 text-sm font-bold hover:bg-greenCustom"
                        >
                          Agricultural Surfactants and Adjuvants
                        </Link>
                        <Link
                          href="/bio-pesticides"
                          className="block px-4 py-2 text-sm font-bold hover:bg-greenCustom"
                        >
                          Bio-pesticides & Bio-formulants
                        </Link>
                        <Link
                          href="/ai-drones"
                          className="block px-4 py-2 text-sm font-bold hover:bg-greenCustom"
                        >
                          AI Drones
                        </Link>
                        <Link
                          href="/agricultural-machinery"
                          className="block px-4 py-2 text-sm font-bold hover:bg-greenCustom"
                        >
                          Agricultural Machinery
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/paints"
                    className="block px-4 py-2 text-sm font-bold hover:bg-greenCustomHover"
                  >
                    Paints
                  </Link>
                  <Link
                    href="/trading-chemicals"
                    className="block px-4 py-2 text-sm font-bold hover:bg-greenCustomHover"
                  >
                    Trading Chemical
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/formulation-guides"
              className="text-black2 font-bold hover:text-greenCustom"
            >
              Formulation Guides
            </Link>
            <Link
              href="/innovation-center"
              className="text-black2 font-bold hover:text-greenCustom"
            >
              Innovation Center
            </Link>
            <Link
              href="/sustainability"
              className="text-black2 font-bold hover:text-greenCustom"
            >
              Sustainability
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsResourcesDropdownOpen(true)}
              onMouseLeave={() => setIsResourcesDropdownOpen(false)}
            >
              <div className="block text-black2 font-bold hover:text-greenCustom cursor-pointer">
                Resources
              </div>

              {isResourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-greenCustom text-white text-sm shadow-lg z-50">
                  <Link
                    href="/news"
                    className="block px-4 py-2 font-bold hover:bg-greenCustomHover"
                  >
                    News
                  </Link>
                  <Link
                    href="/general-white-papers"
                    className="block px-4 py-2 font-bold hover:bg-greenCustomHover"
                  >
                    General White Papers
                  </Link>
                  <Link
                    href="/technical-briefs"
                    className="block px-4 py-2 font-bold hover:bg-greenCustomHover"
                  >
                    Technical Briefs
                  </Link>
                  <Link
                    href="/research-papers"
                    className="block px-4 py-2 font-bold hover:bg-greenCustomHover"
                  >
                    Research Papers
                  </Link>
                </div>
              )}
            </div>

            <div>
              <ContactModal triggerText="Sample Request" />
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Drawer */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-black2 font-bold hover:text-greenCustom">
                <Menu className="h-8 w-8 text-greenCustom mr-3" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 sm:w-96 flex flex-col h-full"
            >
              <SheetHeader className="flex-shrink-0">
                <SheetTitle></SheetTitle>
              </SheetHeader>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto mt-6 pr-2 hide-scrollbar">
                <div className="space-y-1">
                  <Link
                    href="/"
                    className="block py-3 text-black2 font-bold hover:text-white hover:bg-greenCustom border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>

                  <div className="py-3 border-b border-gray-100">
                    <button
                      className="flex items-center justify-between w-full text-black2 font-bold hover:text-white hover:bg-greenCustom "
                      onClick={() =>
                        setIsAboutDropdownOpen(!isAboutDropdownOpen)
                      }
                    >
                      About Us
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isAboutDropdownOpen && (
                      <div className="pl-4 mt-3 space-y-2">
                        <Link
                          href="/company-history"
                          className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                          onClick={closeMobileMenu}
                        >
                          Company History
                        </Link>
                        <Link
                          href="/board-of-directors"
                          className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                          onClick={closeMobileMenu}
                        >
                          Board of Directors
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="py-3 border-b border-gray-100">
                    <button
                      className="flex items-center justify-between w-full text-black2 font-bold hover:text-white hover:bg-greenCustom"
                      onClick={() =>
                        setIsProductsDropdownOpen(!isProductsDropdownOpen)
                      }
                    >
                      Products
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isProductsDropdownOpen && (
                      <div className="pl-4 mt-3 space-y-2">
                        <div>
                          <button
                            className="flex items-center justify-between w-full text-black2 font-bold hover:text-white hover:bg-greenCustom py-2"
                            onClick={() =>
                              setIsAgroChemicalDropdownOpen(
                                !isAgroChemicalDropdownOpen
                              )
                            }
                          >
                            AgroChemical
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${isAgroChemicalDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                          </button>

                          {isAgroChemicalDropdownOpen && (
                            <div className="pl-4 mt-2 space-y-2">
                              <Link
                                href="/agricultural-surfactants"
                                className="block py-2 text-sm text-black2 font-bold hover:text-white hover:bg-greenCustom"
                                onClick={closeMobileMenu}
                              >
                                Agricultural Surfactants and Adjuvants
                              </Link>
                              <Link
                                href="/bio-pesticides"
                                className="block py-2 text-sm text-black2 font-bold hover:text-white hover:bg-greenCustom"
                                onClick={closeMobileMenu}
                              >
                                Bio-pesticides & Bio-formulants
                              </Link>
                              <Link
                                href="/ai-drones"
                                className="block py-2 text-sm text-black2 font-bold hover:text-white hover:bg-greenCustom"
                                onClick={closeMobileMenu}
                              >
                                AI Drones
                              </Link>
                              <Link
                                href="/agricultural-machinery"
                                className="block py-2 text-sm text-black2 font-bold hover:text-white hover:bg-greenCustom"
                                onClick={closeMobileMenu}
                              >
                                Agricultural Machinery
                              </Link>
                            </div>
                          )}
                        </div>

                        <Link
                          href="/paints"
                          className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                          onClick={closeMobileMenu}
                        >
                          Paints
                        </Link>
                        <Link
                          href="/trading-chemicals"
                          className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                          onClick={closeMobileMenu}
                        >
                          Trading Chemical
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/formulation-guides"
                    className="block py-3 text-black2 font-bold hover:text-white hover:bg-greenCustom border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Formulation Guides
                  </Link>
                  <Link
                    href="/innovation-center"
                    className="block py-3 text-black2 font-bold hover:text-white hover:bg-greenCustom border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Innovation Center
                  </Link>
                  <Link
                    href="/sustainability"
                    className="block py-3 text-black2 font-bold hover:text-white hover:bg-greenCustom border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Sustainability
                  </Link>

                  <div className="py-3 border-b border-gray-100">
                    <button
                      className="flex items-center justify-between w-full text-black2 font-bold hover:text-white hover:bg-greenCustom"
                      onClick={() =>
                        setIsResourcesDropdownOpen(!isResourcesDropdownOpen)
                      }
                    >
                      Resources
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isResourcesDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isResourcesDropdownOpen && (
                      <div className="pl-4 mt-3 space-y-2">
                        <Link
                          href="/news"
                          className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                          onClick={closeMobileMenu}
                        >
                          News
                        </Link>
                        <Link
                          href="/general-white-papers"
                          className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                          onClick={closeMobileMenu}
                        >
                          General White Papers
                        </Link>
                        <Link
                          href="/technical-briefs"
                          className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                          onClick={closeMobileMenu}
                        >
                          Technical Briefs
                        </Link>
                        <Link
                          href="/research-papers"
                          className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                          onClick={closeMobileMenu}
                        >
                          Research Papers
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/careers"
                    className="block py-3 text-black2 font-bold hover:text-white hover:bg-greenCustom border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </Link>
                  <Link
                    href="/auth-form"
                    className="block py-3 text-black2 font-bold hover:text-white hover:bg-greenCustom border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>

                  <div className="py-3 border-b border-gray-100">
                    <button
                      className="flex items-center justify-between w-full text-black2 font-bold hover:text-white hover:bg-greenCustom"
                      onClick={() =>
                        setIsRegionalContactsDropdownOpen(
                          !isRegionalContactsDropdownOpen
                        )
                      }
                    >
                      Regional Contacts
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isRegionalContactsDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isRegionalContactsDropdownOpen && (
                      <div className="pl-4 mt-3 space-y-2">
                        {[
                          "Brazil",
                          "China",
                          "HongKong",
                          "India",
                          "Pakistan",
                          "Singapore",
                          "UAE",
                          "Vietnam",
                        ].map((country) => (
                          <Link
                            key={country}
                            href={`/regional-contacts/${country.toLowerCase()}`}
                            className="block py-2 text-black2 font-bold hover:text-white hover:bg-greenCustom"
                            onClick={closeMobileMenu}
                          >
                            {country}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="fixed bottom-0 pt-4 pb-2 bg-white">
                    <ContactModal
                      triggerText="Sample Request"
                      triggerClassName="w-full px-20 py-2"
                    />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
