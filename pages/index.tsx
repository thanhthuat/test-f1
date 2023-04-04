import Head from 'next/head'
import { Inter } from 'next/font/google'
import Carosel from '@components/carosels/carosel'
import HomeCompany from '@components/company/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>News website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
           rel="stylesheet"
           href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Head>
      <main >
       <HomeCompany/>
     
      </main>
    </>
  )
}
