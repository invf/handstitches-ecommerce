import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';

const Delivery = ({ products, bannerData }) => (
  <div className={styles.container}>
      <Head>
        <title>Delivery | Your Store</title>
        <link rel="icon" href="./favicon-32x32.ico" />
      </Head>
      <main className={styles.main}>
        <h3 className={styles.subtitle}>Delivery Information</h3>
        <p>
          At HANDSTITCHES STORE, we are committed to providing reliable and efficient delivery services for our customers. We offer various delivery options to ensure your orders reach you in a timely and convenient manner.
        </p>
        <h3 className={styles.subtitle}>Delivery Methods and Carriers</h3>
        <p>
          Our products are delivered through trusted and reputable postal services, including USPS, UPS, GLS, DHL Express, FedEx, and Nova Poshta Global. These carriers have a proven track record of delivering packages securely and on time.
        </p>
        <h3 className={styles.subtitle}>Delivery Options</h3>
        <p>
          We understand that every customer has unique delivery preferences and requirements. Therefore, we offer the following delivery options for you to choose from:
        </p>
        <ul>
          <li>Standard Delivery: Our standard delivery option ensures that your order is delivered within a reasonable timeframe.</li>
          <li>Express Delivery: If you need your items urgently, we offer an express delivery service to expedite the shipping process.</li>
          <li>International Delivery: For our valued international customers, we provide international shipping options to delivery our products worldwide.</li>
        </ul>
        <p>
          Please note that delivery times may vary depending on your location and the shipping method you select during checkout. Rest assured, we work diligently to process and ship your orders as quickly as possible.
        </p>
        <h3 className={styles.subtitle}>Tracking Your Order</h3>
        <p>
          Once your order is dispatched, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the progress of your shipment and stay updated on its estimated delivery date.
        </p>
        <p>
          If you have any questions or concerns regarding your delivery, our customer support team is always available to assist you. You can reach out to us through our contact page or by phone.
        </p>
        <p>
          Thank you for choosing Your Store. We appreciate your business and look forward to delivering your products to you with care and efficiency.
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
