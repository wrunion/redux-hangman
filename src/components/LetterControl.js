import React, { Component } from 'react'

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
  }

  render() {
    return (
      <div className="LetterControl">
        <h3>"You Win!" / "You lose!" goes here</h3>
      </div>
    )
  }
}

export default LetterControl;