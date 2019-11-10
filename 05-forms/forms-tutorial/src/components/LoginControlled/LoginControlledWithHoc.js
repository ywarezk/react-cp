/**
 * login
 * controlled
 */
import React from 'react';
import forms from '../../hoc/forms.hoc.1';

class Login extends React.Component {

    /**
     * will run when submittinhg the form
     */
    handleLogin = (event) => {
        console.log(`
            Email: ${this.state.email}
            Password: ${this.state.password}
        `);
        event.preventDefault();
    }

    // handleEmailChange = (event) => {
    //     this.setState({
    //         email: event.target.value.toUpperCase()
    //     })
    // }

    // handlePasswordChange = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    render() {    
        return (
            <form onSubmit={this.handleLogin} noValidate>
                <h1>Login Class Controlled</h1>
                <div className="form-group">
                    <label> Email </label>
                    <input
                        value={this.props.state.email} 
                        onChange={this.props.changeCb}
                        type="email" className="form-control" name="email" />
                </div>
                <div className="form-group">
                    <label> Password </label>
                    <input
                        value={this.props.state.password}
                        onChange={this.props.changeCb}
                        placeholder="Please enter your password" 
                        name="password" type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        )
     }
 }

 export default form({
    email: 'yariv@nerdeez.com',
    password: ''
 })(Login);

