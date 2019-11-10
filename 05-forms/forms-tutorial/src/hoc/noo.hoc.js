/**
 * create parent
 * with common things to form
 * create it with hoc
 */

import React from 'react';

// noop(LoginComponent) => LoginComponent

export default function noop(LoginComponent) {
    
    return class SameLogin extends React.Component {
        render() {
            return <LoginComponent {...this.props} />
        }
    }

}

