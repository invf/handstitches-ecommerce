import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';

const Delivery = ({ products, bannerData }) => (
  <div className={styles.container}>
      <Head>
        <title>Privacy Policy | Hand Stitches</title>
        <meta name="description" content="Learn about the delivery options and policies for Hand Stitches products." />
        <link rel="icon" href="/favicon-32x32.ico" />
      </Head>

      <main className={styles.main}>
      <h2 className={styles.subtitle}>Privacy Policy
</h2>

<p className={styles.description}>At MYNEWPROFILE, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website or use our services.
</p>

<h2 className={styles.subtitle}>What Information Do We Collect?
</h2>

<p className={styles.description}>When you visit our website, we DO NOT COLLECT information about you, including:
</p>
<p className={styles.description}>Non-personal information such as your IP address, browser type, and device information, which we may collect automatically through cookies or other tracking technologies.
</p>
<h2 className={styles.subtitle}>How Do We Use Your Information?
</h2>

<p className={styles.description}>We may use your personal information to:
</p>
<p className={styles.description}>Provide you with the products and services you request, including customer support and technical assistance.
</p>
<p className={styles.description}>Communicate with you about our products, services, and promotions.
</p>
<p className={styles.description}>Improve our website and services, including by analyzing user behavior and preferences.
</p>
<p className={styles.description}>Comply with legal obligations, such as responding to subpoenas or court orders.
</p>
<h2 className={styles.subtitle}>How Do We Protect Your Information?
</h2>

<p className={styles.description}>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use a variety of security technologies and procedures to help protect your information from unauthorized access, use, or disclosure.
</p>
<p className={styles.description}>However, please note that no method of transmitting or storing data is completely secure, and we cannot guarantee the security of your personal information.
</p>
<h2 className={styles.subtitle}>Do We Share Your Information?
</h2>

<p className={styles.description}>We do not sell or rent your personal information to third parties. We may share your information with our partners or service providers who help us provide our products and services, but only to the extent necessary to perform these functions.
</p>
<p className={styles.description}>We may also disclose your information if we are required by law to do so, or if we believe in good faith that such disclosure is necessary to comply with legal obligations or protect our rights, property, or safety.
</p>
<h2 className={styles.subtitle}>Your Choices
</h2>

<p className={styles.description}>You may opt-out of receiving marketing communications from us at any time by following the instructions in our emails or contacting us directly. However, we may still send you administrative or transactional messages, such as confirmation emails or notifications of changes to our policies.
</p>
<h2 className={styles.subtitle}>Changes to This Privacy Policy
</h2>

<p className={styles.description}>We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by posting the revised policy on our website or by sending you an email.
</p>
<h2 className={styles.subtitle}>Contact Us
</h2>

<p className={styles.description}>If you have any questions or concerns about our Privacy Policy, please contact us at Email: admin@mynewprofile.online.
</p>
<p className={styles.description}>Thank you for choosing MYNEWPROFILE!
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
