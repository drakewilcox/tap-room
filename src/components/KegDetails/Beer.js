import React from 'react';
import PropTypes from 'prop-types';

const Beer = (props) => {
  return (
    <div>
      <h3>Beer Details:</h3>
      <p><em>Click on a menu item to view details and make sales reports: </em></p>
      
      <p><strong>Name:</strong> {props.beer.name}</p>
      <p><strong>Brewery:</strong> {props.beer.brewery}</p>
      <p><strong>ABV:</strong> {props.beer.abv}</p>
      <p><strong>Origin:</strong> {props.beer.origin}</p>
      <p><strong>Pint Price:</strong> {props.beer.pintPrice}</p>
      <p><strong>KegLevel:</strong> {props.beer.kegLevel}</p>
    </div>
  )
}

Beer.propTypes = {
  beer: PropTypes.object,
}

export default Beer; 