/**
 * hello world
 * button
 * click button change text
 * Function Component
 */

import React, {useState} from 'react';

export default () => {
    // message
    // const messageArray = useState('hello world from function');
    // const message = messageArray[0];
    // const setMessage = messageArray[1];

    // if (false) {
    const [message, setMessage] = useState('hello world from function');
    // }
    

    // const [count, setCount] = useState(0);

    // const [complex, setComplex] = useState({
    //     message: 'hello',
    //     count: 0
    // })

    const changeTheText = () => {
        // setMessage('foo bar function');
        setMessage(message + ' foo bar');
    }

    return (
        <div>
            <h1>
                { message }
            </h1>
            <button onClick={changeTheText} >Change Text</button>
        </div>
    )
}