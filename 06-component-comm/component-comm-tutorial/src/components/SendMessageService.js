/**
 * form 
 * text input
 * send the text input to RecieveMessage
 */

import { Formik, Form, Field } from 'formik';
import React from 'react';
import messageService from '../services/message.service';

export default (props) => {
    const handleSubmit = (values) => {
        console.log(values + ' we want to transfer message to RecieveMessage')
        messageService.messageChannel.next(values.message);
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

