import { NavbarMenuItems } from "@/types/types"

export const QuickLinks = [
    {
        id: 1,
        link: "How it Works",
        href: "#how"
    },
    {
        id: 2,
        link: "Benefits",
        href: "#benefits"
    },
    {
        id: 3,
        link: "FAQ",
        href: "#faq"
    },
]

export const Resources = [
    {
        id: 1,
        resource: "Blog",
        href: "#"
    },
    {
        id: 2,
        resource: "Startup Resources",
        href: "#"
    },
    {
        id: 3,
        resource: "Privacy Policy",
        href: "#"
    },
    {
        id: 4,
        resource: "Terms of Service",
        href: "#"
    },
]


export const NavbarMenu: NavbarMenuItems[] = [
    { menu: "Product", href: "/enterprise", hasDropdown: true, 
        submenu: [
            { menu: "Change Money", href: '/support'}
        ]
    },
    { menu: "Company", href: "/", hasDropdown: true, 
        submenu: [
        { menu: "Leadership", href: '/blog'},
        { menu: "Career", href: '/blog'},
        { menu: "Featured", href: '/support'},
        ]
    },
    { menu: "Blog", href: "/blog", hasDropdown: false,},
    { menu: "Support", href: "/support", hasDropdown: false,}
]