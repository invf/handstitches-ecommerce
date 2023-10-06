import React, { useEffect } from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import ReactGA from 'react-ga4';

const Product = ({ product: { image, name, slug, price } }) => {
  const TRACKING_ID = 'G-3MGRZ05J9J';

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: 'pageview', page: `/product/${slug.current}`, title: name });
  }, [name, slug.current]);

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image && image[0])}
            width={330}
            height={330}
            className='product-image'
            alt={name}
          />          
          <p className='product-price'>{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
