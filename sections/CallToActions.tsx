import Button from "@/components/ui/Button";
import { Download, Smartphone } from "lucide-react";

export default function CallToActions () {
    return (
        <section className="py-16 md:py-18 lg:py-20 bg-primary text-white">
            <div className="main grid gridcols-1 md:grid-cols-2 gap-4 md:gap-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6
                tracking-normal lg:leading-16 leading-14">
                    Ready to go global? Download SnapCard today.
                </h2>
                
                <div>
                    <p className="text-lg opacity-80 mb-10 max-w-lg mx-auto">
                Join thousands of users optimizing their local money for global shopping. Available on iOS and Android.
                </p>
                <div className="mt-5 flex gap-5 flex-col lg:flex-row justify-center">   
                    <Button
                    className="px-5 py-3 bg-purple-500 rounded-lg
                    flex items-center gap-2 text-lg justify-center"
                    >App Store <Download /></Button>
                    <Button
                    className="px-5 py-3 bg-white text-primary rounded-lg 
                    flex items-center gap-2 text-lg justify-center"
                    >Play Store <Smartphone /></Button>
                </div>
                </div>
                
            </div>
        </section>
    )
}