import React from 'react'
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

type Props = {}

export default function AppleCheckoutProduct({ }: Props) {
    return (
        <div className='flex  flex-col gap-x-4 border-b border-gray-300 py-5 lg:flex-row lg:items-center'>
            <div className='relative h-36 w-36'>
                <Image
                    src="/ipad8.png"
                    fill
                    className='object-contain'
                    alt=''
                />
            </div>
            <div className='flex flex-1 items-end justify-between lg:items-center'>
                <div className='flex-1 space-y-2'>
                    <div className='flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl'>
                        <h4 className='font-semibold lg:w-96'>
                            Macbook Air with M2 Chip
                        </h4>
                        <div className='flex items-center gap-x-1 font-semibold'>
                            4
                            <div>
                                <ChevronUpIcon className="h-6 w-6 text-blue-500" />
                                <ChevronDownIcon className="h-6 w-6 text-blue-500" />
                            </div>
                        </div>
                    </div>
                    <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Show product details
                        <ChevronDownIcon className="h-6 w-6" />
                    </p>
                </div>
                <div className='flex  flex-col items-end space-y-4'>
                    <h4 className='text-xl font-semibold lg:text-2xl'>
                        Ksh 4000.00
                    </h4>
                    <button
                        className='text-blue-500 hover:underline'
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}