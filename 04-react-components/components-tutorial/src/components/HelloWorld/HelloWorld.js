/**
 * component that displays hello world
 */

 import React from 'react';
import PropTypes from 'prop-types';

 // props => {msg: '...' }
export default function HelloWorld(props) {
    return (
        <div>
            <h1>
                <u>
                    { props.msg }
                </u>
            </h1>
        </div>
    )
}

HelloWorld.propTypes = {
    msg: PropTypes.string.isRequired
}