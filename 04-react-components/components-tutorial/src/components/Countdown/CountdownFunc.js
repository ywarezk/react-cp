/**
 * get counter from parent
 * countdown until zero
 * destroy the component
 */

 import React, {useState, useEffect} from 'react';

 export default (props) => {

    // anti pattern
    const [counter, setCounter] = useState(props.initialCounter);

    // componentDidMount + componentDidUpdate, componentWillUnmout
    // useEffect(() => ..., []) === componentDidMount
    useEffect(function(){
        console.log('how many times');
        // setTimeout(() => {
        //     if (counter === 0) {
        //         // destroy
        //         props.destroyCb(false)
        //     } else {
        //         setCounter(counter - 1);
        //     }
        // }, 1000);

        const intervalId = setInterval(() => {
            // if (counter === 0) {
            //     // destroy
            //     props.destroyCb(false)
            // } else {
                setCounter(counter - 1);
            // }
        }, 1000);

        return function() {
            clearInterval(intervalId);
        }
    });

    useEffect(() => {
        setCounter(props.initialCounter);
    }, [props.initialCounter])


    useEffect(() => {
        if (counter === 0) {
            props.destroyCb(false);
        }
    }, [counter, props])

     return (
         <h1> {counter} </h1>
     )
 }