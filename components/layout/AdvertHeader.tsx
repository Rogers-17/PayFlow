'use client'
import ArrowRight from '@/assets/images/arrow-right.svg'
import Image from 'next/image'
import { XIcon }  from 'lucide-react'
import React from 'react'

export default function AdvertHeader() {

    const [isVisible, setIsVisible] = React.useState(true)

    if (!isVisible) return null

    return (
        <div className="relative flex justify-center items-center px-4 py-3 gap-3 
        bg-secondary text-primary z-60 border-b border-primary/10">
                <p className="hidden text-sm text-primary/80 lg:block">Join the PayFlow community with private beta in Sinkor</p>
            <div className="group inline-flex cursor-pointer items-center gap-2 font-medium">
                <p>Get Started for free</p>
                <Image src={ArrowRight} alt='Arrow right' 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
                <button onClick={() => setIsVisible(false)}
                aria-label='Dimiss banner'
                className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 
                border-white border text-white/80 hover:bg-primary/10  transition
                font-bold text-xl'
                    >
                    <XIcon size={18} className='font-bold'/>
                </button>
        </div>
    )
}