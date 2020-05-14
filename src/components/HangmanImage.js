import React from 'react'
import image3 from '../assets/hangman3.png';
import './HangmanImage.css';

function ChangingImage() {
  // const { number } = this.props;
  return (
    <div className="ChangingImage">
      <img src={image3} alt="" className="HangmanImage" />  
    </div>
  )
}

export default ChangingImage;