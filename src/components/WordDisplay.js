import React from 'react'
import './WordDisplay.css';

function WordDisplay(props) {
  return (
    <div className="WordDisplay">
      <h1>{props.displayArray}</h1> 
    </div>
  );
}

export default WordDisplay;