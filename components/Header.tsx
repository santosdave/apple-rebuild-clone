import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {
    SearchIcon,
    ShoppingBagIcon,
    UserIcon,
} from "@heroicons/react/outline";


type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-zinc-900 p-1'>
            <div className='flex items-center justify-center md:w-1/5'>
                <Link href="/">
                    <div className='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
                        <Image
                            src="https://rb.gy/vsvv2o"
                            fill
                            alt=''
                            className='object-contain '
                        />
                    </div>
                </Link>
            </div>
            <div className='hidden md:flex flex-1 items-center space-x-8'>
                <a className="headerLink">Mac</a>
                <a className="headerLink">Ipad</a>
                <a className="headerLink">Iphone</a>
                <a className="headerLink">Music</a>
                <a className="headerLink">Products</a>
                <a className="headerLink">Explore</a>
                <a className="headerLink">Support</a>
                <a className="headerLink">Business</a>
                <a className="headerLink">Where to Buy</a>
            </div>
            <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
                <SearchIcon className="headerIcon" />
                <Link href='/checkout'>
                    <div className='relative cursor-pointer'>
                        <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
                            4
                        </span>
                        <ShoppingBagIcon className="headerIcon" />
                    </div>
                </Link>

                <UserIcon className="headerIcon" />
            </div>
        </header>
    )
}