import {SET_SEARCH, SET_TASKS} from '../actions/todo.actions';


const initialTodoState = {
    tasks: [],
    search: '',
    isLoading: false,
    user: {
        name: {
            firstName: 'Yariv',
            lastName: 'Katz'
        }
    }
}

export default function todoReducer(state = initialTodoState, action) {
    switch(action.type) {
        case SET_SEARCH:
            return {...state, search: action.payload}
        case '[todo] Set Last Name':
            return {
                ...state, 
                user: {
                    ...state.user, 
                    name: {
                        ...state.user.name, 
                        lastName: action.payload
                    }
                }
            }
        case SET_TASKS:
            return {...state, tasks: action.payload}
        default:
            return state;
    }
}