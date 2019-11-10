/**
 * react component
 * use Formik to create a login form
 * email => email validation
 * password => min length validation pattern: /[0-9a-z]+/
 */

import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
                .email('Invalid Email')
                .required('This field is required'),
    password: Yup.string()
                .required('Please enter password')
                .matches(/[0-9a-z]+/, 'Incorrect format')
                .min(5, 'Too short!')
})

export default () => {
    /**
     * when submitting the form
     * and after passing validation
     */
    // {email: '', password: ''}
    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
    <Formik
        initialValues={ {email: '', password: ''} }
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
    >
        <Form noValidate>
            <h1>Login with formik</h1>
            <div className="form-group">
                <label>Email</label>
                <Field
                    className="form-control" 
                    type="email" name="email" placeholder="yariv@nerdeez.com" />
                <ErrorMessage name="email" component="div" className="alert alert-danger"  />
            </div>
            <div className="form-group">
                <label>Password</label>
                <Field
                    className="form-control" 
                    type="password" name="password"  />
                <ErrorMessage name="password" component="div" className="alert alert-danger" />
            </div>
            <div className="form-group">
                <button
                    className="btn btn-primary" 
                    type="submit">Login</button>
            </div>
        </Form>
    </Formik>
    )
}