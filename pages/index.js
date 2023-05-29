import Head from 'next/head'
import Image from 'next/image'
import { global } from 'styled-jsx/css'
import Reviews from '@/components/Reviews'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Properties from '@/components/Properties'
import Tour from '@/components/Tour'
import Tips from '@/components/Tips'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import { Lexend } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({ subsets: ['latin'] });


export default function Home() {
  return (
    <>
      <Head>
        <title>Houter - House Hunter</title>
        <meta name="description" content="Find or sell your property" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={lexend.className}>
        <NavBar />
        <Hero />
        <Properties />
        <Tour />
        <Reviews />
        <Tips />
        <Subscribe />
        <Footer />
      </main>
    </>
  )
}
