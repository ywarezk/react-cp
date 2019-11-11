/**
 * search form
 * when submitting change the todo state the search key
 */

import React from 'react';
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import { setSearchAndCallServer } from '../redux/actions/todo.actions';

const Search = ({setSearchAndCallServer}) => {
    const handleSearch = ({searchTerm}) => {
        setSearchAndCallServer(searchTerm);
    }

    return (
        <Formik
            initialValues={ {searchTerm: ''} }
            onSubmit={handleSearch}
        >
            <Form>
                <div className="form-group">
                    <Field type="search" name="searchTerm" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit">
                        Search
                    </button>
                </div>
            </Form>
        </Formik>
    )
}

export default connect(
    null,
    {
        // setSearch
        setSearchAndCallServer
    }
)(Search)