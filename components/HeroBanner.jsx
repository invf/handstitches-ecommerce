import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>       
           
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        
             
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />       
        
        <div>        

          <div className="desc">
          
            <h4>{heroBanner.desc}</h4>
            <Link href={`/product/${heroBanner.product}`}>
            <button type="button" style={{ float: 'left' }}>{heroBanner.buttonText}</button>

            </Link>
            
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default HeroBanner