import React, { Component } from 'react'
import Form from './Form';
import { connect } from 'react-redux';
import letterReducer from '../reducers';
//Do we need to do this??? I don't think we should
// import { store } from '../index.js';
import { letterAction } from '../actions';


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
  
  handleLetterInput = (letter) => {
    console.log(letter); 
    this.props.dispatch(letterAction(letter));
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleLetterInput} />
        <div id="lettersGuessed">{this.props.letterArray}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    letterArray: state.letterArray
  }
}

export default connect(mapStateToProps)(LetterControl);