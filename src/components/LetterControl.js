import React, { Component } from 'react'
import Form from './Form';

class LetterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordToGuess: 'BANANA',
      wordToGuessArray: ['B','A','N','A'],
      lettersGuessed: [],
      // lettersGuessedCorrect: [],
      numberOfWrongGuesses: 0,
      numberOfCorrectGuesses: 0,
      win: false,
      // lose: false,
      currentGuess: ''
    }
  }

  checkWinCondition = () => {
    if (this.state.numberOfCorrectGuesses === this.state.wordToGuessArray.length) {
      this.setState({win: true});
    }
  }

  handleLetterInput = (letter) => {
    this.setState({currentGuess: letter});
    console.log(letter);
  }

  render() {
    return (
      <Form formSubmissionHandler={this.handleLetterInput} />
    
    )
  }
}

export default LetterControl;