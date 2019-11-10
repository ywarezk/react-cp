/**
 * register form
 * email
 * password
 * name
 * 
 * class component
 * controlled
 */

import React from 'react';
import forms from '../../hoc/forms.hoc.1';

// forms(initialState)(LoginComponent) => StrongerLogin

 class Register extends React.Component {

    handleLogin = (event) => {
        console.log(`
            Email: ${this.state.email}
            Password: ${this.state.password}
        `);
        event.preventDefault();
    }

     render() {
         return (
            <form onSubmit={this.handleLogin} noValidate>
                <h1>Register Class Controlled</h1>
                <div className="form-group">
                    <label> Name </label>
                    <input
                        value={this.state.name} 
                        onChange={this.props.changeCb}
                        type="text" className="form-control" name="name" />
                </div>
                <div className="form-group">
                    <label> Email </label>
                    <input
                        value={this.state.email} 
                        onChange={this.props.changeCb}
                        type="email" className="form-control" name="email" />
                </div>
                <div className="form-group">
                    <label> Password </label>
                    <input
                        value={this.state.password}
                        onChange={this.props.changeCb}
                        placeholder="Please enter your password" 
                        name="password" type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
         );
     }
 }

 forms({
    name: 'Yariv Katz',
    email: 'yariv@nerdeez.com',
    password: ''
 })(Register)