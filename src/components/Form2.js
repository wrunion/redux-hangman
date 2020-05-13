import React from "react";
import PropTypes from "prop-types";


function Form(props) {
  function formSubmissionHandler(event) {
    event.preventDefault();
    const letter = event.target.letter.value;
    console.log(letter);
    props.onSubmit(letter);
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
//i dont think we needs this cuz its not a prop type anymore?
Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
};

export default Form;