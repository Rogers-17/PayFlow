import Button from "@/components/ui/Button";
import GIF from '@/assets/images/Collect-Payments-for-Multiple-Channels-1.1.gif'
import Image from "next/image";
import { Download, Smartphone } from "lucide-react";

export default function Hero (){
    return(
        <section className="py-16 md:py-18 lg:py-20 bg-primary text-white">
            <div className="main">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:pb8 lg:pb-10">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-normal lg:leading-16 font-bold max-w-2xl">
                            Global Shopping, Local Money with SnapCard
                        </h1>
                        <p className="mt-5 text-xl text-white/60">
                            Create instant virtual Visa cards for online shopping, subscriptions, and more.
                            Fund them directly and instantly right from your mobile money wallet.
                        </p>
                        <div className="mt-5 flex gap-5 flex-col md:flex-row">   
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
                    <div>
                        <Image 
                        src={GIF}
                        alt="Gif"
                        className="w-100 h-100 overflow-hidden lg:flex hidden"
                        />
                    </div>
               </div>
            </div>
        </section>
    )
}