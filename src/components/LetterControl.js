import React, { Component } from 'react'
import Form from './Form';
import { connect } from 'react-redux';
import { inputtedLetter } from '../actions';
// import PropTypes from "prop-types";
// import * as a from './../actions';

class LetterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetWord: 'BANANA',
      targetWordArray: ['B','A','N','A'],
      // lettersGuessedArray: [] //REPLACED BY REDUX STATE
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

  handleEditingTicketInList = (letter) => {
    const { dispatch } = this.props;
    const action = this.inputtedLetter(letter);
    dispatch(action);
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
        <div id="lettersGuessed">{this.props.lettersGuessedArray}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lettersGuessedArray: state.lettersGuessedArray
  }
}

// this.props.lettersGuessedArray(letter);

// LetterControl = connect(LetterControl)
// export default LetterControl;

// alt way
export default connect(mapStateToProps,  {
  addLetterToArray: inputtedLetter
})(LetterControl);