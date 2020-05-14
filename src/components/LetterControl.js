import React, { Component } from 'react'
import Form from './Form';
import { connect } from 'react-redux';
import letterReducer from '../reducers';
import { letterAction, checkLetter, checkWinCondition } from '../actions';
import LetterDisplay from './LetterDisplay';
import WordDisplay from './WordDisplay';
import HangmanImage from './HangmanImage';

class LetterControl extends Component {

  /* somewhere in here we need to verify that they're not submitting the same letter twice - or throw an error if they are */
  handleLetterInput = (letter) => {
    const { letterAction, checkLetter, checkWinCondition } = this.props;
    letterAction(letter);
    checkLetter(letter);
    /* THIS DOESN'T WORK YET */
    checkWinCondition();
  }

  // handleShowWord = () => {
  //   console.log(this.props.targetWordArray)
  // }


  render() {
    return (
      <div>
        <HangmanImage number="3" />
        <Form handleSubmit={this.handleLetterInput} />
        <LetterDisplay letterArray={this.props.letterArray} />
        <WordDisplay rightGuesseArray={this.props.rightGuesseArray} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    letterArray: state.letterArray,
    targetWordArray: state.targetWordArray,
    targetWord: state.targetWord,
    numOfWrongGuesses: state.numOfWrongGuesses,
    rightGuesseArray: state.rightGuesseArray,
    win: state.win,
    lose: state.lose
  }
}

export default connect(mapStateToProps, { letterAction, checkLetter, checkWinCondition })(LetterControl);