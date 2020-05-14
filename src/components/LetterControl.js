import React, { Component } from 'react'
import Form from './Form';
import { connect } from 'react-redux';
import letterReducer from '../reducers';
import { letterAction, checkLetter, renderWordDisplay } from '../actions';
import LetterDisplay from './LetterDisplay';
import HangmanImage from './HangmanImage';

class LetterControl extends Component {

  /* somewhere in here we need to verify that they're not submitting the same letter twice - or throw an error if they are */
  handleLetterInput = (letter) => {
    const { letterAction, checkLetter, renderWordDisplay } = this.props; 
    letterAction(letter);
    checkLetter(letter);
    /* THIS DOESN'T WORK YET */
    renderWordDisplay(letter);
  }

  render() {
    return (
      <div>
        <HangmanImage number={this.props.numOfWrongGuesses} />
        <Form handleSubmit={this.handleLetterInput} />
        <LetterDisplay letterArray={this.props.letterArray} />
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
    numOfRightGuesses: state.numOfRightGuesses, 
    displayArray: state.displayArray,
    win: state.win,
    lose: state.lose
  }
}

export default connect(mapStateToProps, { letterAction, checkLetter, renderWordDisplay })(LetterControl);