import calculationReducer from './calculationReducer';
// import displayReducer from './displayReducer';
// import keypressReducer from './keypressReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // keypress: keypressReducer,
  calculation: calculationReducer,
  // display: displayReducer,
});

export default rootReducer;
