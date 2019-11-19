import {
  KEYPRESS,
  EQUALS,
  EQUALS_PRESS,
  OPERATOR,
  OPERATOR_PRESS,
  CLEAR,
  CLEAR_PRESS,
  KEYCLICK,
} from '../constants';

const operators = '/*+-';
const initialState = {
  formula: '',
  total: 0,
};
/*

if(lastKey was int and currentKey is also int){
  in the array add it in a string format
}

if (lastKey == '/' || lastKey == '*') {

  if (lastKey == key) return;


  if(display == '') return; // ignore this press

   if(key == "-") normalProcedure
  else if (key == "+") return ; // ignore


    if (lastKey == '/'  && key == '*') {
        updateLastKey to *

    }

    if(lastKey == '*' && key == '/' {
          updateLastKey to /
    }

}


if (lastKey == '-'){
  if (lastKey == key) return;
  if(key == '/' || key=='*' || key=='+') change lastKey to key
}

if (lastKey == '+'){
  if (lastKey == key) return;
  if(key=='-' || key == '/' || key=='*' ) change lastKey to key

}
*/

//for evalling:
/*

4 rounds
let operators = ['/', '*', '+', '-']

in the array first parse the integers (string to int)

eval 4 times 
in the round take 2 integers next to the operator (if presnt) and eval it and add it to the array
repeat with * + -

set final value to primary__display
after this if key press is operators then push the result to secondasry__display
otherwise if input is integer then run ac (clear the display)
*/
const calculate = exp => {
  // break at operators then eval
  try {
    return +eval(exp).toFixed(3);
  } catch (e) {
    return 'invalid input :(';
  }
};

const calculationReducer = (state = initialState, action) => {
  switch (action.type) {
    // case KEYPRESS:
    //   if (eval(initialState.display)) return { ...initialState };

    // case DISPLAY.secondary:
    //   return null;
    case KEYCLICK:
    case KEYPRESS:
      if (
        action.payload === '.' &&
        initialState.formula[initialState.formula.length - 1] === '.'
      ) {
        return state;
      } else {
        // const formula = initialState.formula + action.payload;
        return { ...state, formula: state.formula + action.payload };
      }

    case OPERATOR:
    case OPERATOR_PRESS: {
      const dm = '/*';
      const as = '+-';
      if (
        !state.formula ||
        (state.formula.length === 1 && as.includes(state.formula[0]))
      ) {
        if (dm.includes(action.payload)) return state;
        else {
          // state.formula = action.payload;
          return { ...state, formula: action.payload };
        }
      } else if (operators.includes(state.formula[state.formula.length - 1])) {
        // state.formula = initialState.formula.slice(0, -1) + action.payload;
        return {
          ...state,
          formula: state.formula.slice(0, -1) + action.payload,
        };
      } else {
        // state.formula = initialState.formula + action.payload;

        // return state;
        return { ...state, formula: state.formula + action.payload };
      }
    }

    case CLEAR:
    case CLEAR_PRESS: {
      // state.formula = '';
      // state.total = 0;
      return { ...state, formula: '', total: 0 };
    }
    case EQUALS:
    case EQUALS_PRESS: {
      let result = calculate(state.formula);
      // state.total = result;
      // return state;
      return { ...state, total: result };
    }
    default:
      return state;
  }
};

export default calculationReducer;

/*

if keypress =, and parsing display string doens't equate to anything then show error'

otherwise for all other keys add to display string


*/
