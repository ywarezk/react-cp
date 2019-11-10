/**
 * create parent
 * with common things to form
 * create it with hoc
 */

import React from 'react';

// forms(initialState)(LoginComponent) => StrongerLogin
// forms(initialState, LoginComponent) => StrongLogin

export default function forms(initialState) {
    
    return function(LoginComponent) {

        return class StrongerForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = initialState;
            }

            handleChange = (event) => {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }
            
            render() {
                return <LoginComponent {...this.props} changeCb={this.handleChange} state={this.state} />
            }
        }

    }
}