import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { StyledSocialIcons } from '../../styles/display/SocialIcons-styled';

SocialIcons.propTypes = {
  
};

function SocialIcons(props) {
  return (
   <StyledSocialIcons>

   <li>
    <a href="https://twitter.com/home">
      <FaFacebookF />
    </a>
   </li>

   <li>
    <a href="https://pt-br.facebook.com/">
      <FaTwitter  />
    </a>
   </li>

   <li>
    <a href="https://www.linkedin.com/">
      <FaLinkedin />
    </a>
   </li>

  </StyledSocialIcons>
  )
}

export default SocialIcons;