/**
 * <StrongerForm initialState={ {email: '', password: ''} } render={(handleChange) => <form>....</form> } />
 */

 import React from 'react';

 export default class StrongerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.initialState;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
         this.props.render(this.handleChange);
        //  this.props.children(this.handleChange)
    }
 }