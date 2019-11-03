/**
 * component displays hello world
 * press button
 * change text to foo bar
 */

 import React from 'react';

 export default class HelloChange extends React.Component {
    state = {
        message: 'hello world from class'
    }

    changeTheText = () => {
        // alert(this.state.message);
        
        // not how we change the state
        // this.state.message = '...'

        // this.setState({
        //     message: 'foo bar'
        // });

        // anti pattern
        // this.setState({
        //     message: this.state.message + ' foo bar'
        // })

        // OK
        this.setState(function(currentState){
            return {
                message: currentState.message + ' foo bar'
            }
        })


    }

    render() {
        return (
            <div>
                <h1>
                    { this.state.message }
                </h1>
                <button onClick={this.changeTheText} >Change Text</button>
            </div>
        )
    }
 }

//  class Person {
//      static whatIsThis() {
//          console.log(this)
//      }

//      whatIsThis() {
//         console.log(this)
//      }
//  }

//  Person.whatIsThis()

//  const person = new Person();
//  person.whatIsThis();

//  const a = {wat: person.whatIsThis}
//  a.wat()