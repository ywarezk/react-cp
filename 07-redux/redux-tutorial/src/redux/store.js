import {createStore, compose, applyMiddleware} from 'redux';
import masterReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// ...
// store.dispatch(action)
// ...
// if action is promise
//      promise.then((resutl) => dispatch(result))
// else
// dispatch(...)

// if action is a function
//     action(search)(dispatch)

const store = createStore(
    masterReducer, 
    process.env.NODE_ENV !== 'production' ?  composeWithDevTools(
        applyMiddleware(
            thunk
        )
        
    ) : compose(

    )
);

export default store;