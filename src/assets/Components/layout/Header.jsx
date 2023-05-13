import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from '../../styles/layout/Header-styled';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <StyledHeader>
      <h1>header</h1>
    </StyledHeader>
  );
}

export default Header;