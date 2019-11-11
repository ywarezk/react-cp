import {combineReducers} from 'redux';
import commReducer from './comm.reducer';
import todoReducer from './todo.reducer';

const masterReducer = combineReducers({
    comm: commReducer,
    todo: todoReducer
});

export default masterReducer;