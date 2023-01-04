import Head from 'next/head'
import Header from '../components/Header'
import Homepage from '../components/Homepage'
import ShoppingCart from '../components/ShoppingCart'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apple Rebuild - Kenya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header/>

     <ShoppingCart/>

     <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Homepage/>
     </main>
    </>
  )
}
