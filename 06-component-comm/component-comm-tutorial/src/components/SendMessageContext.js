/**
 * form 
 * text input
 * send the text input to RecieveMessage
 */

import { Formik, Form, Field } from 'formik';
import React, {useContext} from 'react';
import MessageContext from '../context/message.context';

export default (props) => {
    const context = useContext(MessageContext);

    const handleSubmit = (values) => {
        console.log(values + ' we want to transfer message to RecieveMessage')
        context.setMessageContext(values.message);
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

