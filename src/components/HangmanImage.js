import React from 'react'
import image0 from '../assets/image0.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'

// import image3 from '../assets/hangman3.png';
// import image4 from '../assets/hangman4.png';
// import image5 from '../assets/hangman5.png';
// import image6 from '../assets/hangman6.png';
// import image7 from '../assets/hangman7.png';
// import image8 from '../assets/hangman8.png';
// import image9 from '../assets/hangman9.png';
// import image10 from '../assets/hangman10.png';
import './HangmanImage.css';

function HangmanImage(props) {
  const { number } = props;
  if (number === 0) {
    return (
      <div className="HangmanImage">
        <img src={image0} alt="" />
      </div>
    );
  } else if (number) {
    if (number === 1) {
      return (
        <div className="HangmanImage">
          <img src={image1} alt="" />
        </div>
      );
    } else if (number === 2) {
      return (
        <div className="HangmanImage">
          <img src={image2} alt="" />
        </div>
      );
    } else if (number === 3) {
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
    } else if (number >= 7) {
      return (
        <div className="HangmanImage">
          <img src={image7} alt="" />
          <h2>You Lose!</h2>
        </div>
      );
    } else {
      return (
        <div className="HangmanImage">
          <img src={image0} alt="" />
        </div>
      );
    }
  }
}

export default HangmanImage;