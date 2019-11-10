/**
 * get the message SendMessage is sending
 * display it
 */

 import React from 'react';
 import { connect } from 'react-redux';

 const RecieveMessage = (props) => {
     return (
         <h1>{props.messageFromState}</h1>
     )
 }

 export default connect(
     function mapStateToProps(state) {
        return {
            messageFromState : state.message
        }
     }
 )(RecieveMessage);