import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';

const rootReducer = combineReducers({
	router: routerReducer,
  	authentication,
  	alert
});

export default rootReducer;