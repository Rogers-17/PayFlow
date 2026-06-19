import { Music, ShoppingBag, Monitor } from "lucide-react";
const featureData = [
  {
    heading: "Create Multiple Cards on Demand",
    body: "Organize your budget seamlessly. Dedicate specific cards for distinct subscriptions or one-time online shopping sprees to keep your core funds entirely secure.",
    icon: Music,
    reverse: false
  },
  {
    heading: "Buy & Sell Gift Cards Instantly",
    body: "Grab gift cards for your favorite global brands and digital stores in seconds. Got an unused gift card? Exchange it back for local mobile money instantly.",
    icon: ShoppingBag,
    reverse: true
  },
  {
    heading: "Send & Spend with Friends",
    body: "Splitting a bill or sending funds home? Transfer instantly to any registered user with absolutely zero transactional fees. Fast, safe, and frictionless.",
    icon: Monitor,
    reverse: false
  }
];

export default function Features () {
    return (
        <section className="py-16 md:py-18 lg:py-20">
            <div className="main">
                {featureData.map((f, i) => (
                    <div key={i} className={`grid md:grid-cols-2 gap-16 items-center ${f.reverse && 'md:flex-row-reverse'}`}>
                        <div className="h-80 bg-gray-100 rounded-3xl border border-gray-200 shadow-inner flex items-center justify-center mb-6">
                            <span className="font-semibold">
                                <f.icon size={100}/>
                            </span>
                        </div>
                        <div>
                            <h2 className="text-4xl font-extrabold text-primary mb-6">{f.heading}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">{f.body}</p>
                        </div>
                </div>
                ))}
            </div>
        </section>
    )
}