import React from "react";
import PropTypes from "prop-types";


function Form(props) {
  function formSubmissionHandler(event) {
    event.preventDefault();
    const letter = event.target.letter.value;
    props.handleSubmit(letter.toUpperCase());
  }

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

