/**
 * actions that relate to the todo section
 */

// {type: 'SET_SEARCH', payload: ' what user typed in form '}

export const SET_SEARCH = '[todo] Set Search';

export const SET_TASKS = '[todo] Set Tasks';

export function setSearch(searchTerm) {
    return {type: SET_SEARCH, payload: searchTerm};
}

/**
 * with redux thunk instead of components need to deal with multiple actions
 * we can unite those actions with a single action
 * for example this action will change the search and also make a server call to grab the tasks
 * and populate the tasks from the server
 * @param {string} searchTerm 
 * @returns {Promise<void>}
 */
export function setSearchAndCallServer(searchTerm) {
    return async function(dispatch) {
        dispatch(setSearch(searchTerm));
        dispatch(setLoading(true));
        const response = await fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchTerm}`);
        const tasks = await response.json();
        dispatch(setTasks(tasks));
        dispatch(setLoading(false));
    }
}

export function setTasks(tasks) {
    return {type: SET_TASKS, payload: tasks};
}

export function setLoading(isLoading) {
    return {type: 'SET LOADING', payload: isLoading};
}


// Promise<action>
// export async function setAsyncTasks() {
//     const response = await fetch('...');
//     const tasks = await response.json();
//     return setTasks(tasks);
// }

