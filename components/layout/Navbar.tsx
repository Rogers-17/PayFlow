"use client"
import Link from "next/link";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Menu from '@/components/ui/Menu'
import * as React from 'react'
import { ChevronDown, X } from 'lucide-react';
import { NavbarMenu } from "@/utils/data";

export default function Navbar () {

    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const menuItems = NavbarMenu

    return (
        <section className="sticky top-0 z-50 backdrop-blur-md bg-primary py-4 text-white">
            <main className="main">
            <nav className="flex items-center justify-between">
                <Link href={'/'}>
                    <Logo />
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden" >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu />
                    )}
                </button>
                <div className="hidden lg:flex items-center gap-8 text-sm">
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
                                className="flex items-center gap-1 transition-colors duration-200 hover:text-purple-300"
                            >
                                {menu.menu} {menu.hasDropdown && <ChevronDown />}
                            </Link>
                            
                            {menu.hasDropdown && activeDropdown === menu.menu && (
                                <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-gray-100 bg-white p-2 text-primary shadow-2xl z-50">
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
                    border hover:bg-purple-500 hover:border-purple-500 transition-all duration-100 ease-in-out
                    overflow-hidden border-white/70">
                        Download App
                    </Button>
                </div>
            </nav>
            
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${ isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0" } `}>
                <div className="flex flex-col gap-2 py-5">
                    {menuItems.map(link => (
                        <Link
                            key={link.menu}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg px-4 py-3 transition hover:bg-white/10">
                            {link.menu}
                        </Link>
                    ))}
                    <Button
                        className=" mt-3 w-full rounded-xl border  border-white/40 bg-transparent 
                        py-3 transition duration-300  hover:bg-white  hover:text-primary "
                    >
                        Download App
                    </Button>

                </div>
            </div>
            </main>
        </section>
    )
}