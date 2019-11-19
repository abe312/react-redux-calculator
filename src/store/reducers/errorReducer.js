import { ERROR, CLEAR_ERROR } from '../constants';

export default function(state = null, action) {
  switch (action.type) {
    case ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return state;
    default:
      return state;
  }
}
