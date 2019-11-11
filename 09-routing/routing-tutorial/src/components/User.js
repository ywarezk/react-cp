/**
 * This component will displayed on the root path
 */

 import React from 'react';

 export default ({match}) => {
     return (
        <h1>This is user: {match.params.name} {match.params.age}</h1>
     )
 }