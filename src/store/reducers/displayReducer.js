import { DISPLAY } from '../constants';
const displayReducer = (state = 'Display', action) => {
  switch (action.type) {
    case DISPLAY.main:
      return action.payload;

    case DISPLAY.secondary:
      return null;
    default:
      return state;
  }
};

export default displayReducer;
