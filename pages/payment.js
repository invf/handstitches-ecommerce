import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const Payment = ({ products, bannerData }) => (
  <div className={styles.container}>
      <Head>
        <title>Payment | Hand Stitches</title>
        <meta name="description" content="Learn about the payment options and policies for Hand Stitches products." />
        <link rel="icon" href="/favicon-32x32.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.subtitle}>
          Payment Options
        </h2>

        <p className={styles.description}>Dear customers,</p>

<p className={styles.description}>At HANDSTITCHES STORE, we strive to make your shopping experience convenient and secure. That's why we have partnered with 2Checkout (Verifone), a trusted payment system that ensures seamless transactions and supports various payment options.</p>
<p className={styles.description}>With 2Checkout, you can choose from a range of payment methods to complete your purchase. We accept PayPal, one of the world's most recognized and secure online payment systems. Whether you have a PayPal account or prefer to pay with a credit or debit card, you can easily complete your transaction using this widely trusted platform.</p>

<p className={styles.description}>Not only does 2Checkout support PayPal, but it also enables you to pay with all major card types. Visa, Mastercard, American Express, Discover, and more—whatever card you prefer to use, you can rest assured that our payment system is compatible.</p>
<p className={styles.description}>By utilizing 2Checkout, we ensure that your payment information is handled securely. 2Checkout's advanced encryption technology protects your sensitive data, giving you peace of mind during the checkout process.</p>

<p className={styles.description}>Please note that when you proceed to the payment page, you will be redirected to the 2Checkout (Verifone) platform. This is to guarantee the highest level of security and to facilitate a smooth and hassle-free payment experience.</p> 
<p className={styles.description}>If you have any questions or encounter any issues during the payment process, our dedicated customer support team is here to assist you. Don't hesitate to reach out to us via contact us directly at our Email: handstitches.ua@gmail.com or Mobile: +380-067-506-50-75 for prompt assistance.</p>

<p className={styles.description}>Thank you for choosing HANDSTITCHES STORE. We appreciate your trust and look forward to serving you with quality products and exceptional service. Happy shopping!</p>


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

export default Payment;
