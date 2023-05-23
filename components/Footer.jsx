import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Handstitches. All rights reserverd</p>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SocialIcon url="https://pinterest.com/handstitchesua" style={{ margin: '0 5px' }} />
      <SocialIcon url="https://reddit.com/" style={{ margin: '0 5px' }} />
      <SocialIcon url="https://twitter.com/" style={{ margin: '0 5px' }} />
    </div>
      
    </div>

    
  )
  
}



export default Footer