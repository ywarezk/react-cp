/**
 * reducer
 * take the state
 * take the action
 * return newState
 * 
 * - state immutable
 * (state, action) => newState
 */

 export default function reducer(state, action) {
     switch(action.type) {
        case 'SET_MESSAGE':
            return {...state, message: action.payload};
        default:
            return state;
     }
 }