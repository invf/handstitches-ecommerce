import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';

const Terms = ({ products, bannerData }) => (
  <div className={styles.container}>
      <Head>
        <title>Refund Policy | Hand Stitches</title>
        <meta name="description" content="Learn about the data collection and usage policies for Hand Stitches." />
        <link rel="icon" href="/favicon-32x32.ico" />
      </Head>

      <main className={styles.main}>
      <h2 className={styles.subtitle}>
Refund Policy
</h2>
<p className={styles.description}>
At HANDSTITCHES STORE, we take pride in the quality of our products and we want our customers to be completely satisfied with their purchase.
</p> 
<p className={styles.description}>
However, if for any reason you are not satisfied with your purchase, we offer a refund policy to ensure your satisfaction.
</p>
<h2 className={styles.subtitle}>
Refund Eligibility
</h2>
<p className={styles.description}>
You may request a refund for your order within 30 days of the purchase date.
</p> 
<p className={styles.description}>
To be eligible for a refund, the product must be returned in its original condition and packaging, without any signs of wear or damage.
</p> 
<p className={styles.description}>
Please note that any customizations made to the product, such as personalized embroidery or modifications to the design, may make the product ineligible for a refund.
</p>
<h2 className={styles.subtitle}>
Refund Process
</h2>
<p className={styles.description}>
To request a refund, please contact our customer service team at our Email: handstitches.ua@gmail.com or Mobile: +380-067-506-50-75 with your order number and a brief explanation of why you would like to return the product.
</p>
<p className={styles.description}>
Once we have received your request, we will review your request and notify you of your refund eligibility.
</p>

<p className={styles.description}>
If you are eligible for a refund, we will provide you with a return shipping label and instructions on how to send the product back to us.
</p> 
<p className={styles.description}>
Once we have received and inspected the product, we will issue a refund to the original payment method used to make the purchase.
</p> 
<p className={styles.description}>
Please note that shipping costs are non-refundable and the cost of return shipping will be deducted from your refund.
</p>

<p className={styles.description}>
If you receive a product that is damaged or defective, please contact us immediately and we will work with you to resolve the issue.
</p> 
<p className={styles.description}>
We may offer a replacement product or a full refund, depending on the circumstances.
</p>
<h2 className={styles.subtitle}>
Contact Us
</h2>
<p className={styles.description}>
If you have any questions about our refund policy or would like to request a refund, please contact our customer service team at our Email: handstitches.ua@gmail.com or Mobile: +380-067-506-50-75.
</p>
<p className={styles.description}>
We are committed to providing our customers with a positive shopping experience and will do our best to address any concerns you may have.
</p>

      </main>

      <footer className={styles.footer}>
        <p>Hand Stitches &copy; 2023</p>
      </footer>
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

export default Terms;
