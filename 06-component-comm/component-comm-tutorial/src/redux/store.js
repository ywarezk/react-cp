import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer, {
    message: 'initial message from redux'
});

export default store;