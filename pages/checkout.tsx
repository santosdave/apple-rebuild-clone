import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import CustomButton from '../components/CustomButton'
import AppleCheckoutProduct from '../components/AppleCheckoutProduct'
import { ChevronDownIcon } from '@heroicons/react/outline'
type Props = {}

export default function checkout({ }: Props) {
    return (
        <div className='min-h-screen  overflow-hidden bg-[#E7ECEE]'>
            <Head>
                <title>Bag - Apple (KE)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='mx-auto max-w-5xl  pb-24'>
                <div className='px-2'>
                    <h1 className='my-4 text-3xl font-semibold lg:text-4xl'>
                        Review your bag
                    </h1>
                    <p className='my-4'>Free delivery and free returns.</p>
                    <CustomButton title="Continue Shopping" />
                    <div className='mx-5 md:mx-8'>
                        <AppleCheckoutProduct />
                        <AppleCheckoutProduct />
                        <AppleCheckoutProduct />
                        <AppleCheckoutProduct />
                        <AppleCheckoutProduct />
                        <div className='my-12 mt-6 ml-auto max-w-3xl'>
                            <div className='divide-y divide-gray-300'>
                                <div className='pb-4'>
                                    <div className='flex justify-between'>
                                        <p>Subtotal</p>
                                        <p>Ksh 70,000.00</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Shipping</p>
                                        <p>Free</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col gap-x-1 lg:flex-row'>
                                            Estimated tax for:
                                            <p className='flex cursor-pointer items-end text-blue-500 hover:underline'>
                                                Enter zip code
                                                <ChevronDownIcon className="h-6 w-6" />
                                            </p>
                                        </div>
                                        <p>Ksh -</p>
                                    </div>
                                </div>
                                <div className='flex justify-between pt-4 text-xl font-semibold'>
                                    <h4>
                                        Total</h4>
                                    <h4>
                                        Ksh 70,000.00
                                    </h4>
                                </div>
                            </div>
                            <div className='my-14 space-y-14'>
                                <h4 className='text-xl font-semibold'>
                                    How would you like to check out?
                                </h4>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <div className='order-2 flex flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center'>
                                        <h4 className='mb-4 flex flex-col text-xl font-semibold'>
                                            <span>Pay Monthly</span>
                                            <span>with Apple Card {" "}</span>
                                            <span>
                                                Ksh 2300.00/mo. at 0% APR<sup className="-top-1">◊</sup>
                                            </span>
                                        </h4>
                                        <CustomButton title="Check Out with Apple Card Monthly Installments" />
                                        <p className="mt-2 max-w-[240px] text-[13px]">
                                            Ksh 0.00 due today, which includes applicable full-price
                                            items, down payments, shipping, and taxes.
                                        </p>
                                    </div>
                                    <div className='flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2'>
                                        <h4 className='mb-4 flex flex-col text-xl font-semibold'>
                                            Pay in full
                                            <span>
                                                Ksh 70,000.00
                                            </span>
                                        </h4>
                                        <CustomButton title="Check Out"  width="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}