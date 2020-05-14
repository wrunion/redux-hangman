import React from 'react'

function LetterDisplay(props) {
  return (
    <div className="LetterDisplay">
      {props.letterArray.join('')}
    </div>
  )
}

export default LetterDisplay;
