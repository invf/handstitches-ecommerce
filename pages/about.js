import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';
import Link from 'next/link';
import Image from 'next/image';

import imageAsset from '/public/assets/about.webp'
import GifAsset from '/public/assets/stitch.gif'
import imageTable from '/public/assets/table_short.webp'


const About = ({ products, bannerData }) => (
  <div className={styles.container}>
       <Head>
         <title>About Hand Stitches</title>
         <meta name="description" content="Learn about Hand Stitches and our commitment to quality handmade products." />
         <link rel="icon" href="/favicon-32x32.ico" />
       </Head>

       <main className={styles.main}>
       
       <div className={styles.image}>
       <Image className={styles.image} src={imageAsset} width={300} height={300} style={styles.center} />

        </div>
        
         <h2 className={styles.subtitle}>
           About Us
         </h2>

         <p className={styles.description}>We are Viktor and Larysa, a happily married couple from Ukraine with 37 years of marriage experience.</p>
<p className={styles.description}>We have a large and joyful family, and we share a passion for embroidery.</p>
<p className={styles.description}>Embroidery started as Larysa's hobby, but with the support and assistance of my husband, Viktor, we have turned it into a successful business.</p>
<p className={styles.description}>We work together on the design and promotion of our creations.</p>
<div className={styles.image}>
       <Image className={styles.image} src={GifAsset} width={300} height={300} style={styles.center} />

        </div>

<p className={styles.description}>Our ultimate goal is to make the world a better place by bringing joy and happiness through our embroidery.</p>
<p className={styles.description}>Our dedication and hard work are evident in the high-quality pieces we produce.</p>
<p className={styles.description}>Our business has flourished, and we continue to create new and unique designs to satisfy our customers.</p>
<div className={styles.image}>
       <Image className={styles.image} src={imageTable} width={300} height={300} style={styles.center} />

        </div>

<p className={styles.description}>We are a true inspiration to those who want to turn their passions into successful businesses.</p>
<p className={styles.description}>We have shown that with perseverance and determination, anything is possible.</p>
<p className={styles.description}>Our love for each other and our craft is reflected in our creations, and we strive to spread that love and joy to others.</p>

<p className={styles.description}>If you're looking for beautiful and unique embroidery pieces, look no further than our business.</p>
<p className={styles.description}>You'll not only receive high-quality pieces, but you'll also be supporting a loving and hardworking family who are dedicated to making the world a happier place.</p>



       </main>


     </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default About;
