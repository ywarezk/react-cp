/**
 * form 
 * text input
 * send the text input to RecieveMessage
 */

import { Formik, Form, Field } from 'formik';
import React from 'react';
import {setMessage} from '../redux/actions';
import {connect} from 'react-redux';


const SendMessage =  (props) => {
    const handleSubmit = (values) => {
        console.log(values + ' we want to transfer message to RecieveMessage')
        props.setMessageThroughStore(values.message);
        // props.cb(values.message);
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
    {
        setMessageThroughStore: setMessage
    }
)(SendMessage)

