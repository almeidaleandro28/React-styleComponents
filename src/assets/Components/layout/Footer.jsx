import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../styles/layout/Container-styled';
import { StyledFooter } from '../../styles/layout/Footer-styled';
import { StyledFlex } from '../../styles/layout/Flex-styled';
import SocialIcons from '../display/SocialIcons';

Footer.propTypes = {
  
};

function Footer(props) {
  return (
    <StyledFooter >
   
      <Container>
        <StyledFlex>

          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />

        </StyledFlex>

        <p>&copy; 2021 Huddle. All rights reserved</p>

      </Container>
    
    </StyledFooter>
  );
}

export default Footer;