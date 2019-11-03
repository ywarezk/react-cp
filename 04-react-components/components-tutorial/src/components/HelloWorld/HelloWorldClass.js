/**
 * component that displays hello world
 * format class
 */

import React from 'react';
import PropTypes from 'prop-types';

// this.props => {message: '....'}
export default class HelloWorld extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired
    }

    static defaultProps = {
        message: 'default value'
    }

    render() {
        return (
            <div>
                <h1>
                    <u>
                        { this.props.message }
                    </u>
                </h1>
            </div>
        )
    }
}