import React from 'react'
import image3 from '../assets/hangman3.png';
import './HangmanImage.css';

function HangmanImage(props) {
  const { number } = props;
  if (number === "3") {
  return (
    <div className="HangmanImage">
      {/* <img src={`image${number}`} alt="" className="HangmanImage" />   */}
      <img src={image3} alt="" />
    </div>
  );
  } else {
    return <div>[Image will go here. Number is: {number}]</div>
  }
}

export default HangmanImage;