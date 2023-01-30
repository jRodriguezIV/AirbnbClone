import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/Header'
import Banner from 'components/Banner'
import { Inter } from '@next/font/google'
import styles from '<clone>/styles/Home.module.css'
import SmallCard from 'components/SmallCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData }) {
  return (
    <>
      <Head>
        <title>Joe's Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">


        {/* Header */} <Header />
        <Banner />

        <main className='max-w-7xl mx-auto px-8 sm:px-16 bg-white'>
          <section className='pt-6'>
            <h2 className=' text-black text-4xl font-semibold pb-5 '>Explore Nearby</h2>

            {/* Pull some data from a server - API endpoints */}
            {exploreData?.map(({img, distance, location}) => (
              <SmallCard key={img} img={img} distance={distance} location={location} />
            ))}

          </section>
        </main>

      </div>
    </>

  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) => res.json());
  
  return {
    props: {
      exploreData : exploreData
    }
  };
}
