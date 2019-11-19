import { KEYPRESS } from '../constants/';

const keypressReducer = (state = null, action) => {
  switch (action.type) {
    case KEYPRESS:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

export default keypressReducer;
