import {
  KEYPRESS,
  KEYCLICK,
  EQUALS,
  EQUALS_PRESS,
  OPERATOR,
  OPERATOR_PRESS,
  CLEAR,
  CLEAR_PRESS,
  ERROR,
  CLEAR_ERROR,
} from '../constants';

const keyclick = key => ({
  type: KEYCLICK,
  payload: key,
});
const keypress = event => ({
  type: KEYPRESS,
  payload: String.fromCharCode(event.keyCode),
});

const equals = () => ({
  type: EQUALS,
});
const equalsPress = () => ({
  type: EQUALS_PRESS,
});

const operator = op => ({
  type: OPERATOR,
  payload: op,
});

const operatorPress = event => ({
  type: OPERATOR_PRESS,

  payload: event.key,
});

const clear = () => ({
  type: CLEAR,
});
const clearPress = () => ({
  type: CLEAR_PRESS,
});

const error = () => ({
  type: ERROR,
  payload: 'invalid input',
});

const clearError = () => ({
  type: CLEAR_ERROR,
});

export {
  keypress,
  keyclick,
  error,
  clearError,
  equals,
  operator,
  clear,
  operatorPress,
  equalsPress,
  clearPress,
};
