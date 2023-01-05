import Head from 'next/head'
import Header from '../components/Header'
import ShoppingCart from '../components/ShoppingCart'
import { Tab } from "@headlessui/react";
import IphonePage from '../components/IphonePage';
import AppleProduct from '../components/AppleProduct';

type Props = {}

export default function Iphone({ }: Props) {
    return (
        <>
            <Head>
                <title>iPhone - Apple (KE)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <ShoppingCart />
            <main className='relative h-[200vh] bg-[#E7ECEE]'>
                <IphonePage />
            </main>
            <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
                <div className='space-y-10 py-16'>
                    <h1 className='text-center text-white text-4xl font-medium tracking-wide  md:text-5xl'>
                        Which iPhone is right for you?
                    </h1>
                    <div className='mx-auto  max-w-fit pt-5 pb-24 sm:px-4'>
                        <div className='tabPanel'>
                            <AppleProduct />
                            <AppleProduct />
                            <AppleProduct />
                            <AppleProduct />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}