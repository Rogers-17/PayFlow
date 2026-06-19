import ArrowRight from '@/assets/images/arrow-right.svg'
import Image from 'next/image'

export default function AdvertHeader() {
    return (
        <div className="flex justify-center items-center py-3 gap-2 bg-secondary text-sm">
            <p>Join the PayFlow community with private beta in Sinkor</p>
            <Image src={ArrowRight} alt='Arrow right' className='inline-flex justify-center items-center'/>
        </div>
    )
}