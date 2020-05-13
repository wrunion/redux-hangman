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

  handleEditingTicketInList = (letter) => {
    const { dispatch } = this.props;
    const action = this.inputtedLetter(letter);
    dispatch(action);
  }



  handleLetterInput = (letter) => {
    console.log(letter); //This is the letter the user inputted
    this.props.dispatch(letterReducer(letter));
    // console.log(store.getState());
    // store.subscribe(() =>
    //   console.log(store.getState())
    // );
    // const { targetWordArray } = this.state;    

    // const isLetterInWord = targetWordArray.find(e =>  e === letter);
    // // this.setState({lettersGuessedArray: [...this.state.lettersGuessedArray, letter]});

    // if (isLetterInWord === undefined) {
    //   console.log("no")
    //   //incorrect guess
    //   //add letter to "guessed" array; 
    //   //add one to incorrect guesses
    // } else {
    //   console.log("yes")
    //   //correct guess
    //   //add letter to "guessed array"
    //   //add one to correct guesses
    // }
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

//lettersGuessedArray //state 

const mapStateToProps = state => {
  return {
    letterArray: state.letterArray
  }
}

// export default connect(mapStateToProps,  {
//   addLetterToArray: letterArrayReducer
// })(LetterControl);


export default connect(mapStateToProps)(LetterControl);