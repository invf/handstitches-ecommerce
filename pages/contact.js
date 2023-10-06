import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';

const Delivery = ({ products, bannerData }) => (
  <div className={styles.container}>
      <Head>
        <title>Contact | Hand Stitches</title>
        <meta name="description" content="Learn about the delivery options and policies for Hand Stitches products." />
        <link rel="icon" href="/favicon-32x32.ico" />
      </Head>

      <main className={styles.main}>
      <h2 className={styles.subtitle}>Contact Us
</h2>
<p className={styles.description}>At Handstitches Store, we value your feedback and are always happy to hear from our customers. If you have any questions, comments, or concerns, please don't hesitate to get in touch with us using one of the methods below:
</p>
<p className={styles.description}>Customer Service Hours: Monday - Sunday, 9am - 9pm EST
</p>
<p className={styles.description}>Phone: +380-067-506-50-75
</p>
<p className={styles.description}>Email: handstitches.ua@gmail.com
</p>


<p className={styles.description}>Thank you for choosing Handstitches Store! We look forward to hearing from you.
</p>

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

export default Delivery;
