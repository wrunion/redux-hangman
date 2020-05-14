/* Action creator */
export const letterAction = (letter) => {
  /* Return a single letter */
  return {
    type: 'ADD_LETTER',
    letter: letter
  };
};

/* Action creator */
export const checkLetter = (letter) => {
  return {
    type: 'CHECK_LETTER',
    letter: letter
  };
};

export const checkWinCondition = (num) => {
  return {
    type: 'CHECK_WIN_CONDITION',
    num: num
  }
}

