/**
 * component will get a prop
 * num
 * countdown num until 0
 * remove the component
 */

 import React from 'react';

 export default class Countdown extends React.Component {
    // state = {
    //     counter: 5
    // }

    constructor(props) {
        super(props);

        // anti pattern
        // TBD
        this.state = {
            counter : props.initialCounter        
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            // if (this.state.counter === 0) {
            //     this.props.destroyCb(false);
            // } else {
                
            // }

            this.setState((currentState) => {
                return {
                    counter: currentState.counter - 1
                }
            })
        }, 1000)
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.counter === 0) {

            this.props.destroyCb(false);
        }

        if (prevProps.initialCounter !== this.props.initialCounter) {
            this.setState({
                counter: this.props.initialCounter
            })
        }
    }

    // shouldComponentUpdate() {
    //     return true;
    // }

    /**
     * react call this lifecycle hook
     * before removing the component
     * used for cleaning up
     */
    componentWillUnmount(){
        // ERRoR
        // super.componentWillMount()
        clearInterval(this.intervalId)

    }

     render() {
         return (
             <h1> {this.state.counter} </h1>
         )
     }
 }