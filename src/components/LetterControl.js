import React, { Component } from 'react'
import Form from './Form';

class LetterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetWord: 'BANANA',
      targetWordArray: ['B','A','N','A'],
      lettersGuessed: [],
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
    if (isLetterInWord === undefined) {
      console.log("no")
    } else {
      console.log("yes")
    }
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleLetterInput} />
      </div>
    );
  }
}

export default LetterControl;