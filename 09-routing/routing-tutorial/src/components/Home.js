/**
 * This component will displayed on the root path
 */

 import React from 'react';

 export default ({history}) => {
     
     return (
        <>
            <h1>Hey I'm in the homepage</h1>
            <button onClick={() => history.push('/about')}>About page</button>
        </>
     )
 }