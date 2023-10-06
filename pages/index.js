import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
// import ReactGA from 'react-ga';
import { useEffect } from 'react';
import ReactGA from "react-ga4";

const Home = ({ products, bannerData }) => {


  const TRACKING_ID = 'G-3MGRZ05J9J'
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Custom Title" });

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      <div className="products-heading">
        <h2>Our Collection</h2>
        <p>Add a personal touch to your home with our embroidery paintings</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  };
};

export default Home;
