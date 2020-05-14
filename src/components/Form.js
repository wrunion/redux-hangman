import React from "react";
import PropTypes from "prop-types";


function Form(props) {
  function formSubmissionHandler(event) {
    event.preventDefault();
    const letter = event.target.letter.value;
    props.handleSubmit(letter.toUpperCase());
    document.getElementById('letter').value = '';
  }

  //Figure out how to reset/clear the form so that the next letter can be entered (w/out directly manipulating the DOM)
  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <p><input type="text" 
          id='letter'
          placeholder='Submit a Letter'
          maxLength="1"
          required
        /></p>
        <button type='submit'>Submit A letter</button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;

