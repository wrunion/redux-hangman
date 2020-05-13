/* Action creator */ 
export const letterAction = (letter) => {
  /* Return a single letter */
  return {
    type: 'ADD_LETTER',
    letter: letter
  };
};