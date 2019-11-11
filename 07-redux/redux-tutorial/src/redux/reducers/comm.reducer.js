/**
 * reducer
 * take the state
 * take the action
 * return newState
 * 
 * - state immutable
 * (state, action) => newState
 */

const initialCommState = {
    message: 'the initial value in message',
    // messageLength: ('the initial value in message').length
    // hello: 'world'
}

export default function commReducer(state = initialCommState, action) {
    switch(action.type) {
        
        case 'SET_MESSAGE':
            return {...state, message: action.payload};
        default:
            return state;
    }
}