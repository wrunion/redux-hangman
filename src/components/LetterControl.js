import React, { Component } from 'react'
import Form from './Form';
import { connect } from 'react-redux';
import letterReducer from '../reducers';
import { letterAction, checkLetter, checkWinCondition } from '../actions';
import LetterDisplay from './LetterDisplay';

class LetterControl extends Component {

  handleLetterInput = (letter) => {
    const { letterAction, checkLetter, checkWinCondition } = this.props; 
    letterAction(letter);
    checkLetter(letter);
    checkWinCondition();
  }

  render() {
    return (
      <div>
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
    win: state.win,
    lose: state.lose
  }
}

export default connect(mapStateToProps, { letterAction, checkLetter, checkWinCondition })(LetterControl);