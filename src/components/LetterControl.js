import React, { Component } from 'react'
import Form from './Form';
import { connect } from 'react-redux';
import letterReducer from '../reducers';
import { letterAction, checkLetter } from '../actions';
import LetterDisplay from './LetterDisplay';

class LetterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // numberOfWrongGuesses: 0,
      // numberOfCorrectGuesses: 0,
      // win: false,
      // lose: false,
      // currentGuess: ''
    }
  }

  // checkWinCondition = () => {
  //   if (this.state.numberOfCorrectGuesses === this.state.targetWordArray.length) {
  //     this.setState({win: true});
  //   }
  // }

  handleLetterInput = (letter) => {
    const { letterAction, checkLetter } = this.props; 
    letterAction(letter);
    checkLetter(letter);
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleLetterInput} />
        <LetterDisplay letterArray={this.props.letterArray} />
        {/* {this.props.targetWordArray} */}
        {/* <div id="lettersGuessed">{this.props.letterArray}</div> */}
        {/* Create LetterDisplayDiv component  */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    letterArray: state.letterArray,
    targetWordArray: state.targetWordArray
  }
}

export default connect(mapStateToProps, { letterAction, checkLetter })(LetterControl);