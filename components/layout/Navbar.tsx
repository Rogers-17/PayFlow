import Link from "next/link";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Menu from '@/components/ui/Menu'

interface MenuItems{
    menu: string;
    href: string;
}

const menuItems: MenuItems[] = [
    { menu: "Enterprise", href: "/enterprise"},
    { menu: "SME", href: "/"},
    { menu: "Personal", href: "/"},
    { menu: "Resources", href: "/"},
    { menu: "Developers", href: "/"},
    { menu: "Company", href: "/"},
]

export default function Navbar () {
    return (
        <section className="bg-primary py-4 text-white">
            <main className="main mx-auto">
            <nav className="flex justify-between items-center w-full mx-auto">
                <Link href={'/'}>
                    <Logo />
                </Link>
                <Menu/>
                <div className="lg:flex hidden gap-5 text-sm">
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
                    <Button
                    className="px-4 py-2 bg-purple-500 rounded-lg hidden md:flex">
                        Get Started
                    </Button>
                </div>
            </nav>
            </main>
        </section>
    )
}