import React from 'react'
import image3 from '../assets/hangman3.png';
import image4 from '../assets/hangman4.png';
import image5 from '../assets/hangman5.png';
import image6 from '../assets/hangman6.png';
import image7 from '../assets/hangman7.png';
import image8 from '../assets/hangman8.png';
import image9 from '../assets/hangman9.png';
import image10 from '../assets/hangman10.png';
import './HangmanImage.css';

function HangmanImage(props) {
  const { number } = props;
  if (!number) {
    return (
      <div className="HangmanImage">
        <img src={image3} alt="" />
      </div>
    );
  } else if (number) {
    if (number === 3) {
      return (
        <div className="HangmanImage">
          <img src={image3} alt="" />
        </div>
      );
    } else if (number === 4) {
      return (
        <div className="HangmanImage">
          <img src={image4} alt="" />
        </div>
      );
    } else if (number === 5) {
      return (
        <div className="HangmanImage">
          <img src={image5} alt="" />
        </div>
      );
    } else if (number === 6) {
      return (
        <div className="HangmanImage">
          <img src={image6} alt="" />
        </div>
      );
    } else if (number === 7) {
      return (
        <div className="HangmanImage">
          <img src={image7} alt="" />
        </div>
      );
    } else if (number === 8) {
      return (
        <div className="HangmanImage">
          <img src={image8} alt="" />
        </div>
      );
    } else if (number === 9) {
      return (
        <div className="HangmanImage">
          <img src={image9} alt="" />
        </div>
      );
    } else if (number === 10) {
      return (
        <div className="HangmanImage">
          <h2>You Lose!</h2>
          <img src={image10} alt="" />
        </div>
      );
    }
     else {
      return (
        <div className="HangmanImage">
          <img src={image3} alt="" />
        </div>
      );
    }
  }
}

export default HangmanImage;