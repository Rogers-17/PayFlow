"use client"
import Link from "next/link";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Menu from '@/components/ui/Menu'
import * as React from 'react'
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

interface MenuItems{
    menu: string;
    href: string;
    hasDropdown: boolean;
    submenu?: {
        menu: string;
        href: string;
    }[]
}

const menuItems: MenuItems[] = [
    { menu: "Product", href: "/enterprise", hasDropdown: true, 
        submenu: [
            { menu: "Change Money", href: '/'}
        ]
    },
    { menu: "Company", href: "/", hasDropdown: true, 
        submenu: [
        { menu: "Leadership", href: '/'},
        { menu: "Career", href: '/'},
        { menu: "Featured", href: '/'},
        ]
    },
    { menu: "Blog", href: "/", hasDropdown: false,},
    { menu: "Support", href: "/", hasDropdown: false,}
]

export default function Navbar () {

    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

    return (
        <section className="bg-primary py-4 text-white">
            <main className="main">
            <nav className="flex justify-between items-center">
                <Link href={'/'}>
                    <Logo />
                </Link>
                <Menu/>
                <div className="lg:flex hidden gap-10 text-sm justify-center items-center">
                    {menuItems.map(menu => (
                        <div
                        key={menu.menu}
                        className="relative"
                        onMouseEnter={() => menu.hasDropdown && setActiveDropdown(menu.menu)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                            key={menu.menu}
                            href={menu.href}
                            className="flex items-center gap-1 hover:text-gray-300"
                            >
                                {menu.menu} {menu.hasDropdown && <ChevronDown />}
                            </Link>
                            
                            {menu.hasDropdown && activeDropdown === menu.menu && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-primary shadow-xl rounded-lg p-2 z-50">
                                    {menu.submenu?.map(submenu => (
                                        <Link 
                                        href={submenu.href}
                                        key={submenu.menu} 
                                        className="block p-2 hover:bg-gray-100 rounded">
                                            {submenu.menu}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Button
                    className="px-5 py-3 bg-transparent rounded-xl hidden md:flex 
                    border hover:bg-purple-500 hover:border-none transition-all delay-300 ease-in-out
                    overflow-hidden border-white/70">
                        Download App
                    </Button>
                </div>
            </nav>
            </main>
        </section>
    )
}