'use client'


import Link from 'next/link';
import Head from 'next/head'
import Header from './Header/page';
import Hero from './Hero/page';
import Product from './Product/page';
import Users from './Users/page';
import FeaturesSection from './Features/page';
import Footer from './Footer/page';

export default function Home() {
  

  return (
    <div>
      
      
      
      <div className="bg-[#00695c] text-white min-h-screen">
      <Head>
        <title>AI Chatbot Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Hero/>
        <Product/>
        <Users/>
        <FeaturesSection/>
      </main>
      <Footer/>

      {/* <Head>
        <title>AI Chatbot Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>           
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer /> */}
    </div>
    </div>
    
  );
}

