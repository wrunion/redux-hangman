import React, { Component } from 'react'
import Form from './Form';

class LetterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetWord: 'BANANA',
      targetWordArray: ['B','A','N','A'],
      lettersGuessedArray: [],
      numberOfWrongGuesses: 0,
      numberOfCorrectGuesses: 0,
      win: false,
      // lose: false,
      // currentGuess: ''
    }
  }

  checkWinCondition = () => {
    if (this.state.numberOfCorrectGuesses === this.state.targetWordArray.length) {
      this.setState({win: true});
    }
  }

  handleLetterInput = (letter) => {
    console.log(letter); //This is the letter the user inputted

  const { targetWordArray } = this.state;    

    const isLetterInWord = targetWordArray.find(e =>  e === letter);
    this.setState({lettersGuessedArray: [...this.state.lettersGuessedArray, letter]});

    if (isLetterInWord === undefined) {
      console.log("no")
      //incorrect guess
      //add letter to "guessed" array; 
      //add one to incorrect guesses
    } else {
      console.log("yes")
      //correct guess
      //add letter to "guessed array"
      //add one to correct guesses
    }
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleLetterInput} />
        <div id="lettersGuessed">{this.state.lettersGuessedArray}</div>
      </div>
    );
  }
}

export default LetterControl;