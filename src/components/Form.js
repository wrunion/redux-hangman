import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p><textarea
          name='letter'
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

