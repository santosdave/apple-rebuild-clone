import Head from 'next/head'
import Header from '../components/Header'
import Homepage from '../components/Homepage'
import ShoppingCart from '../components/ShoppingCart'
import { Tab } from "@headlessui/react";
import AppleProduct from '../components/AppleProduct';
export default function Home() {
  return (
    <>
      <Head>
        <title>Apple Rebuild - Kenya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <ShoppingCart />

      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Homepage />
      </main>

      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
        <div className='space-y-10 py-16'>
          <h1 className='text-center text-white text-4xl font-medium tracking-wide  md:text-5xl'>
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List className='flex justify-center'>
              <Tab
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${selected
                    ? "borderGradient bg-[#35383C] text-white"
                    : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                Mac
              </Tab>
              <Tab
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${selected
                    ? "borderGradient bg-[#35383C] text-white"
                    : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                iPad
              </Tab>
              <Tab
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${selected
                    ? "borderGradient bg-[#35383C] text-white"
                    : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                iPhone
              </Tab>
              <Tab
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${selected
                    ? "borderGradient bg-[#35383C] text-white"
                    : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                Apple Watch
              </Tab>
            </Tab.List>
            <Tab.Panels className='mx-auto  max-w-fit pt-5 pb-24 sm:px-4'>
              <Tab.Panel className='tabPanel'>
                <AppleProduct />
                <AppleProduct />
                <AppleProduct />
                <AppleProduct />
              </Tab.Panel>
              <Tab.Panel className='tabPanel'>
                <AppleProduct />
                <AppleProduct />
                <AppleProduct />
              </Tab.Panel>
              <Tab.Panel className='tabPanel'>
                <AppleProduct />
                <AppleProduct />
              </Tab.Panel>
              <Tab.Panel className='tabPanel'>
                <AppleProduct />
                <AppleProduct />
                <AppleProduct />
                <AppleProduct />
                <AppleProduct />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}
