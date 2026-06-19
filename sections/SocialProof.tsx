import { 
  Network, 
  ShoppingBag, 
  Music, 
  Monitor, 
  Smartphone, 
  Apple 
} from 'lucide-react';

const brands = [
  { name: 'Netflix', icon: Network },
  { name: 'Amazon', icon: ShoppingBag },
  { name: 'Spotify', icon: Music },
  { name: 'ASOS', icon: Monitor },
  { name: 'Shein', icon: Smartphone },
  { name: 'Apple', icon: Apple },
];


export default function SocialProof () {
    return (
        <section className="py-16 md:py-18 lg:py-20">
            <div className="main">
                <div className="w-full bg-white py-12 border-y border-gray-100 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...brands, ...brands].map((brand, index) => (
                    <div key={index} className="flex items-center gap-3 mx-12 text-primary opacity-80">
                        <brand.icon size={28} strokeWidth={2.5} />
                        <span className="text-xl font-bold tracking-tight">{brand.name}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}