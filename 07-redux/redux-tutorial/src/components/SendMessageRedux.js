/**
 * form 
 * text input
 * send the text input to RecieveMessage
 */

import { Formik, Form, Field } from 'formik';
import React from 'react';
import {setMessage} from '../redux/actions/comm.actions';
import {connect} from 'react-redux';


const SendMessage =  (props) => {
    const handleSubmit = (values) => {
        props.setMessageThroughStore(values.message);
    }

    return (
        <Formik
            initialValues={ {message: 'hello world'} }
            onSubmit={handleSubmit}
        >
            <Form>
                <Field type="text" name="message" />
                <br />
                <button type="submit">Send message</button>
            </Form>
        </Formik>
    )
}

export default connect(
    null,
    // (message) => { store.dispatch(setMessage(message))} 
    {
        setMessageThroughStore: setMessage
    },
    // function mapDispatchToProps(dispatch) {
    //     return {
    //         setMessageThroughStore: (message) => dispatch(setMessage(message)) 
    //     }
    // }
)(SendMessage)

