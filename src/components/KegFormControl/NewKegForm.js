import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegFormCreation({
      name: event.target.name.value, 
      brewery: event.target.brewery.value,
      abv: event.target.abv.value, 
      origin: event.target.origin.value,
      pintPrice: event.target.origin.value,
      kegLevel: 124,
      id: v4()
    })
  }

    return (
      <React.Fragment>
      <form onSubmit={ handleNewKegFormSubmission }>
        <input
          type='text'
          name='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          brewery='brewery'
          placeholder='Brewery'/>
        <input
          type='text'
          abv='abv'
          placeholder='ABV'/>
        <input
          type='text'
          origin='origin'
          placeholder='Origin'/>
        <input
          type='number'
          pintPrice='pintPrice'
          placeholder='Pint Price'/>

        <button type='submit'>ADD NEW KEG</button>        
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegFormCreation: PropTypes.func
};

export default NewKegForm;

