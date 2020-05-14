import React from 'react'

function LetterDisplay(props) {
  return (
    <div className="LetterDisplay">
      <h4>You have guessed:</h4>
      {props.letterArray.join('')}
    </div>
  )
}

export default LetterDisplay;
