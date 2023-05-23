import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from '../../styles/surface/Card-styled';

Card.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string
};


Card.defaultProps = {

}

function Card( { item: { id, title, body, image } } ) {
  return (
    <StyledCard layout={ id % 2 === 0 && 'row-reverse' }>

      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`../../images/${image}`} alt="" />
      </div>
    
    </StyledCard>
  );
}

export default Card;