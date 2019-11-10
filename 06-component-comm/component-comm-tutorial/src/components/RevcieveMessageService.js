/**
 * get the message SendMessage is sending
 * display it
 */

 import React, {useState, useEffect} from 'react';
 import messageService from '../services/message.service';

 export default (props) => {
    const [message, setMessage] = useState('initial Message');

    useEffect(() => {
        const sub = messageService.messageChannel.subscribe((newMessage) => {
            setMessage(newMessage);
        });

        return () => {
            sub.unsubscribe();
        }
    }, []);

     return (
         <h1>{message}</h1>
     )
 }