import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader, StyledNav, StyledLog, StyledImg } from '../../styles/layout/Header-styled';
import { StyledFlex } from '../../styles/layout/Flex-styled';
import { Container } from '../../styles/layout/Container-styled';
import { Button } from '../../styles/input/Button-styled';
import Logo from '../../images/logo_white.svg';
import Img from '../../images/illustration-mockups.svg';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <StyledHeader>
      <Container>

        <StyledNav>
          <StyledLog src={Logo} alt=''/>
          <Button>try</Button>
        </StyledNav>

        <StyledFlex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <StyledImg src={Img} alt='' />
        </StyledFlex>
      
      </Container>
    </StyledHeader>
  );
}

export default Header;