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

 export default class Register extends React.Component {
    state = {
        name: 'Yariv Katz',
        email: 'yariv@nerdeez.com',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

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
                        onChange={this.handleChange}
                        type="text" className="form-control" name="name" />
                </div>
                <div className="form-group">
                    <label> Email </label>
                    <input
                        value={this.state.email} 
                        onChange={this.handleChange}
                        type="email" className="form-control" name="email" />
                </div>
                <div className="form-group">
                    <label> Password </label>
                    <input
                        value={this.state.password}
                        onChange={this.handleChange}
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