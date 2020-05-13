import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Your name goes here...' />
        <input
          type='text'
          name='location'
          placeholder='Please type location...' />
        <p><textarea
          name='issue'
          placeholder='Describe your issue...' /></p>
        <button type='submit'></button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
};

export default LetterInput;

