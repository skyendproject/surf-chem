import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function AccountActivationPage() {
    return (
        <>
        <Navigation />
            <section className="min-h-screen flex items-center justify-center px-4 bg-white">
                <div className="max-w-4xl w-full">
                    <h1 className="text-4xl font-bold text-gray-800 mb-10">
                        Activation
                    </h1>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 leading-tight mb-6 text-red">
                        SURFACTANT CHEMICALS COMPANY HAS NOT ACTIVATED YOUR ACCOUNT YET.
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-700">
                        An email has been sent to our activation team to review your request.
                        You will be contacted when your account is approved.
                    </p>
                </div>
            </section>
            <Footer/>
        </>

    );
}
