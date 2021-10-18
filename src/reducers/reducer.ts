import { combineReducers } from 'redux';
import cycleReducer from './cycleReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
    menu: menuReducer,
    cycle: cycleReducer
});

export default rootReducer;
