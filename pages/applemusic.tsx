import Head from 'next/head'
import Header from '../components/Header'
import ShoppingCart from '../components/ShoppingCart'
import { Tab } from "@headlessui/react";
import AppleMusicPage from '../components/AppleMusicPage';

type Props = {}

export default function applemusic({ }: Props) {
    return (
        <>
            <Head>
                <title>Apple Rebuild - Kenya</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <ShoppingCart />

            <main className='relative h-[200vh] bg-[#E7ECEE]'>
               <AppleMusicPage/>
            </main>
            <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
                <div className='space-y-10 py-16'>
                    <h1 className='text-center text-white text-4xl font-medium tracking-wide  md:text-5xl'>
                      Music lives here.
                    </h1>
                </div>
            </section>
        </>
    )
}