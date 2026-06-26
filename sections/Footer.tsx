import {ChevronLeft} from 'lucide-react'
import Link from 'next/link'
import { Resources, QuickLinks } from '@/utils/data'
import Button from '@/components/ui/Button'
import {SiGithub, SiFacebook, SiX, SiInstagram} from 'react-icons/si'

export default function Footer () {
    return (
        <section className="py-16 md:py-18 lg:py-20 text-primary">
            <div className="main">
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 pb-20 border-b border-primary/40">
                    <div className='space-y-3'>
                        <h1 className='font-bold text-2xl'>SnapCard</h1>
                        <p className='text-primary/80'>Building the next generation of virtuals card through our unique product.</p>
                        <div className='flex text-xl gap-4 text-primary/80'>
                            <Link href={'#'}><SiGithub/></Link>
                            <Link href={'#'}><SiFacebook/></Link>
                            <Link href={'#'}><SiX/></Link>
                            <Link href={'#'}><SiInstagram/></Link>
                        </div>
                    </div>
                    <div className='space-y-2 md:space-y-4'>
                        <h1 className='font-bold text-lg'>Quick Links</h1>
                        <div className='flex flex-col gap-2 text-primary/80'>
                            {QuickLinks.map(link => (
                                <Link
                                href={link.href}
                                key={link.id}
                                >
                                    {link.link}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-2 md:space-y-4'>
                        <h1 className='font-bold text-lg'>Quick Links</h1>
                        <div className='flex flex-col gap-2 text-primary/80'>
                            {Resources.map(r => (
                                <Link
                                href={r.href}
                                key={r.id}
                                >
                                    {r.resource}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h1 className=' text-xl font-bold mb-5'>Subscribe</h1>
                        <p className='text-primary/80'>Join our newsletter for startup insights and opportunities.</p>
                        <div className='flex gap-2 mt-2'>
                            <input type="text" placeholder='Your email'
                            className='py-2 px-4 bg-white border rounded-md border-gray-300'
                            />
                            <Button
                            className='px-4 py-2 bg-primary rounded-lg'
                            ><ChevronLeft className='text-white'/></Button>
                        </div>
                    </div>
                </footer>
            </div>
            <div className='mt-5 text-center text-gray-500'>
                        &copy; {new Date().getFullYear()} SnapCard. All right reserved
                </div>
        </section>
    )
}