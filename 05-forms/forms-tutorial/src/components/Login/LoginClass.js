/**
 * Login form
 * class component
 */

 import React, {createRef} from 'react';


 // grab the email input
 // grab the password input
 // uncontrolled
 // print to console

 export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = createRef();
        this.passwordRef = createRef();
    } 

    /**
     * will run when submittinhg the form
     */
    handleLogin = (event) => {
        console.log(
            `
                Email: ${this.emailRef.current.value} 
                Password: ${this.passwordRef.current.value} 
            `
        );

        event.preventDefault();
    }
    
    render() {
        

        return (
            <form onSubmit={this.handleLogin} noValidate>
                <h1>Login Class</h1>
                <div className="form-group">
                    <label> Email </label>
                    <input ref={this.emailRef} type="email" className="form-control" name="my-email" />
                </div>
                <div className="form-group">
                    <label> Password </label>
                    <input ref={this.passwordRef} name="my-password" type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        )
     }
 }