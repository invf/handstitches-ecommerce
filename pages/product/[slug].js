import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import ReactGA from 'react-ga4';



const ProductDetails = ({ product, products }) => {
  const { image, name, ID_2checkout, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const TRACKING_ID = 'G-3MGRZ05J9J';
  ReactGA.initialize(TRACKING_ID);
  


  const handleBuyNow = () => {
    ReactGA.send({ hitType: 'event', eventCategory: 'Button', eventAction: 'Buy Now', eventLabel: 'Product Details' });
    window.open('https://secure.2checkout.com/checkout/buy?merchant=254173080635&tpl=default&return-type=redirect&return-url=https%3A%2F%2Fwww.handstitches.com%2Fsuccess&prod='+ID_2checkout+'&qty=1&signature=9a98596be5bb14c075db36e711191201eadc76066b2479c4e3471d4b6e362e50', '_blank');
  }


  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (25)
            </p>
          </div>

        <div className="product-detail-desc">
          {/* Other fields */}
          <h4>Details: </h4>
          {details.map((item, index) => (
            <p key={item._key}>{item.children[0].text}</p>
          ))}
          {/* Remaining code */}
        </div>


          <p className="price">${price}</p>
          
          <div className="quantity">
            <h3>Quantity:</h3>
              <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              {/* <span className="plus" onClick={incQty}><AiOutlinePlus /></span> */}
              <span className="plus" ><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            {/* <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button> */}
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails