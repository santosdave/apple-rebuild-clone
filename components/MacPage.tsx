import React from 'react'
import Image from "next/image";
import CustomButton from './CustomButton';

type Props = {}

export default function MacPage({ }: Props) {
    return (
        <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8 overflow-hidden bg-black'>
            <div className='space-y-8'>
                <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                    <span className='block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>
                    MacBook
                    </span>
                    <span className="block text-white opacity-60">Powerful.</span>
                    <span className="block text-white opacity-60">Don’t take it lightly.</span>
                </h1>
                <div className="space-x-8">
                    <CustomButton title='Buy Now' />
                    <a className="link">Learn More</a>
                </div>
            </div>
            <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
                <Image src="/mac2.jpg" fill className='object-contain' alt='' />
            </div>
        </section>
    )
}