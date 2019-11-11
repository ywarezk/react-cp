/**
 * display the todo list from the state
 * change the search should change the todo list
 */

import React from 'react';
import {connect} from 'react-redux';
// import {setTasks, setTasksFromServer} from '../redux/actions/todo.actions';



const TodoList = ({tasks, search, setTasksFromServer}) => {
    // useEffect(() => {
    //     setTasksFromServer(search);
    // }, [search])

    // useEffect(() => {
    //     // setIsLoading(true);
    //     fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`).then((response) => {
    //         return response.json();
    //     }).then((tasks) => {
    //         // setIsLoading(false)
    //         setTasks(tasks);
    //     })
    // }, [search])

    return (
        <ul className="list-group">
            {
                tasks.map((singleTask) => {
                    return (
                        <li key={singleTask.id} className="list-group-name">
                            {singleTask.title}    
                        </li>
                    )
                })        
            }            
        </ul>
    )
}

export default connect(
    // state => { // this is implementing a function}
    state => ({
        tasks: state.todo.tasks,
        // search: state.todo.search
    }),
    // {
    //     setTasksFromServer
    //     // setTasks,
    //     // setIsLoading,
    //     // setError,

    // }
    
)(TodoList)