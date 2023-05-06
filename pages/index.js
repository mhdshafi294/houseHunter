import Head from 'next/head'
import Image from 'next/image'
import { global } from 'styled-jsx/css'
import Reviews from '@/components/Reviews'
import { Lexend } from '@next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({ subsets: ['latin'] });


export default function Home() {
  return (
    <>
      <Head>
        <title>Houter - House Hunter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={lexend.className}>
        <Reviews/>
      </main>
    </>
  )
}
