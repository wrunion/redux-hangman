import React from 'react'
import image3 from '../assets/hangman3.png';
import './HangmanImage.css';

function HangmanImage(props) {
  const { number } = props.number;
  // const imageToShow = `image${number}`;
  return (
    <div className="HangmanImage">
      {/* <img src={`image${number}`} alt="" className="HangmanImage" />   */}
      <img src={image3} alt="" />
    </div>
  )
}

export default HangmanImage;