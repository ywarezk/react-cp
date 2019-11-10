/**
 * user submits the form
 * create action that will be sent when user submits the form
 * { type: 'SET_MESSAGE', payload?: newMessage}
 * 
 */

 export function setMessage(newMessage) {
     return { type: 'SET_MESSAGE', payload: newMessage}
 }