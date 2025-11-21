import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function AccountActivationPage() {
    return (
        <>
            <Navigation />
            <section className="min-h-screen flex items-center justify-center px-4 bg-white">
                <div className="max-w-4xl w-full">
                    <h1 className="text-4xl font-bold text-gray-800 mb-10">
                        Thank You
                    </h1>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 leading-tight mb-6 text-red">
                        YOUR INQUIRY HAS BEEN RECIEVED
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-700">
                        We will review your inquiry and response within one business day.
                    </p>
                </div>
            </section>
            <Footer />
        </>

    );
}
