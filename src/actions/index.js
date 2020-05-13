/* Action creator */ 
export const inputtedLetter = (letter) => {
  /* Return a single letter */
  return {
    type: 'INPUT_LETTER',
    payload: letter
  };
};