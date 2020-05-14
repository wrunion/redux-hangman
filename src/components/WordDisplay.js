import React from 'react'
import './WordDisplay.css';

function WordDisplay(props) {
  return (
    <div className="WordDisplay">
      <h2>{props.displayArray}</h2> 
    </div>
  );
}

export default WordDisplay;