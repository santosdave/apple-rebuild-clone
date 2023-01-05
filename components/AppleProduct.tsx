import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function AppleProduct({ }: Props) {
    return (
        <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10'>
            <div className='relative h-64 w-full md:h-72'>
                <Image
                    src='/ipad8.png'
                    fill
                    className="object-contain"
                    alt="" />
            </div>
            <div className="flex flex-1 items-center justify-between space-x-3">
                <div className="space-y-2 text-xl text-white md:text-2xl">
                    <p>Mac Air</p>
                    <p>KES 20,000</p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center flex-shrink cursor-pointer rounded-full bg-gradient-to-r  from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]">
                    <ShoppingCartIcon className="h-8 w-8 text-white" />
                </div>
            </div>
        </div>
    )
}