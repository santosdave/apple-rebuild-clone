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
                <Link href='/mac'>
                    <div className="headerLink">Mac</div>
                </Link>
                <Link href='/ipad'>
                    <div className="headerLink">Ipad</div>
                </Link>
                <Link href='/iphone'>
                    <div className="headerLink">Iphone</div>
                </Link>
                <Link href='/applemusic'>
                    <div className="headerLink">Music</div>
                </Link>
                <Link href='/applemusic'>
                    <div className="headerLink"></div>
                </Link>
                <Link href='/applesupport'>
                    <div className="headerLink">Support</div>
                </Link>
                <Link href='/applebuy'>
                    <div className="headerLink">Where to Buy</div>
                </Link>
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