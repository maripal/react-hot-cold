import {createStore} from 'redux';

//import reducer
import {gameReducer} from './reducer';
//export createStore(reducer) here
export default createStore(gameReducer);