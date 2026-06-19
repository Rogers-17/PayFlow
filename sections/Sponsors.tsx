import acmeLogo from '@/assets/images/logo-acme.png'
import quantumLogo from '@/assets/images/logo-quantum.png'
import echoLogo from '@/assets/images/logo-echo.png'
import celestialLogo from '@/assets/images/logo-celestial.png'
import pulseLogo from '@/assets/images/logo-pulse.png'
import apexLogo from '@/assets/images/logo-apex.png'
import Image from 'next/image'


export default function Sponsors () {
    return (
        <section className="py-16 md:py-18 lg:py-20">
            <div className="main">
                <p className='text-4xl font-bold text-primary'>Our Partners</p>
                <p className='text-xl mt-2 text-primary/80'>
                    We are trusted by leading businesses across different sectors
                </p>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-14 overflow-hidden mt-10'>
                    <Image src={acmeLogo} alt='ACME logo' 
                    className='logo-ticker-image'/>
                    <Image src={quantumLogo} alt='QUANTUM Logo' 
                    className='logo-ticker-image'/>
                    <Image src={echoLogo} alt='ECHO Logo' 
                    className='logo-ticker-image'/>
                    <Image src={celestialLogo} alt='CELESTIAL Logo' 
                    className='logo-ticker-image'/>
                    <Image src={pulseLogo} alt='PULSE Logo' 
                    className='logo-ticker-image'/>
                    <Image src={apexLogo} alt='APEX logo' 
                    className='logo-ticker-image'/>
                </div>
            </div>
        </section>
    )
}