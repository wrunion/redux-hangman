import React from "react";
import PropTypes from "prop-types";


function Form() {
  function formSubmissionHandler(event) {
    event.preventDefault();
    const letter = event.target.letter.value;
    console.log(letter);
  }

  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <p><textarea
          id='letter'
          placeholder='Submit a Letter' /></p>
        <button type='submit'>Submit A letter</button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
};

export default Form;

