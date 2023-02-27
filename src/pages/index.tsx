import Head from 'next/head'
import { Inter } from '@next/font/google'
import Script from 'next/script'
import Blogs from './blogs'
import Footer from './footer'
import Card from './Card'
import Services from './services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css"  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>


      <main>
      <Services />
      <Card />
      <Blogs />
      <Footer />
      </main>
    </>
  )
} 
