import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesPage() {
    const items = [
        { title: "NEWS", link: "/news" },
        { title: "WHITE PAPERS", link: "/general-white-papers" },
        { title: "FORMULATION GUIDES", link: "/formulation-guides" },
    ];

    return (
        <>
            <Navigation />

            <div className="w-full max-w-7xl px-6 py-16 mx-auto">
                <h1 className="text-4xl font-bold mb-12 md:text-6xl text-start">Resources</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-2xl shadow-md flex flex-col justify-between h-80 border border-gray-100"
                        >
                            <h2 className="text-2xl font-semibold text-center tracking-wide">
                                {item.title}
                            </h2>

                            <div className="flex justify-center mt-auto pt-10">
                                <Link href={item.link} className="text-xl font-semibold flex items-center gap-3">
                                    <Button className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl">
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
