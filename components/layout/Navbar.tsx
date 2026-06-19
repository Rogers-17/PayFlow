import Link from "next/link";
import Button from "../ui/Button";

interface MenuItems{
    menu: string;
    href: string;
}

const menuItems: MenuItems[] = [
    { menu: "Enterprise", href: "/"},
    { menu: "SME", href: "/"},
    { menu: "Personal", href: "/"},
    { menu: "Resources", href: "/"},
    { menu: "Developers", href: "/"},
    { menu: "Company", href: "/"},
]

export default function Navbar () {
    return (
        <section className="bg-primary py-4 text-white">
            <main className="main">
            <nav className="flex justify-between items-center">
                <div>
                    PayFlow
                </div>
                <div className="md:flex hidden gap-5">
                    {menuItems.map(menu => (
                        <Link
                        key={menu.menu}
                        href={menu.href}
                        >
                            {menu.menu}
                        </Link>
                    ))}
                </div>
                <div>
                    <Button>Get Started</Button>
                </div>
            </nav>
            </main>
        </section>
    )
}