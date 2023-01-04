import React from 'react'
import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";

type Props = {}

export default function ShoppingCart({ }: Props) {
    return (
        <Link href='/checkout'>
            <div className='fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300'>
                <span className='absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
                    4
                </span>
                <ShoppingBagIcon className="headerIcon h-8 w-8 text-black" />
            </div>
        </Link>
    )
}