import React from 'react'

function WordDisplay(props) {
  return (
    // <div className="targetWordArray">

    //   {props.targetWordArray.toString()}

    // </div>

    <div className="rightGuesseArray">
      {props.rightGuesseArray.join('')}
      <p>_ _ _ _ _ _</p>
    </div>
  )
}

export default WordDisplay;