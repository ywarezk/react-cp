/**
 * get the message SendMessage is sending
 * display it
 */

import React, {useContext} from 'react';
import MessageContext from '../context/message.context';

 export default (props) => {
    const value = useContext(MessageContext);

     return (
         <h1>{value.message}</h1>
     )
 }