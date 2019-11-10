/**
 * render props
 * make stronger component
 * not really stronger
 */

import React from 'react';

 export default class NoopRenderProp extends React.Component {
    render() {
        return this.props.render();
    }
 }