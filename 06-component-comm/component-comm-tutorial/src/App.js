import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SendMessage from './components/SendMessage';
import RevcieveMessage from './components/RevcieveMessage';
import SendMessageService from './components/SendMessageService';
import RevcieveMessageService from './components/RevcieveMessageService';
import SendMessageContext from './components/SendMessageContext';
import RevcieveMessageContext from './components/RevcieveMessageContext';
import MessageContext from './context/message.context';
import SendMessageRedux from './components/SendMessageRedux';
import RevcieveMessageRedux from './components/RevcieveMessageRedux';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [message, setMessage] = useState('hello world');
  const [messageContext, setMessageContext] = useState('initial state context');


  const messageCb = (message) => {
    setMessage(message);
  }

  return (
    <Provider store={store} >
      <div className="App">
        <SendMessage cb={messageCb} />

        <RevcieveMessage messageFromSend={message}  />

        <h1>Send with service and rxjs</h1>

        <SendMessageService />
        <RevcieveMessageService />

        <h1>
          share data with context
        </h1>

        <MessageContext.Provider value={ {message: messageContext, setMessageContext} } >
          <SendMessageContext />
          <RevcieveMessageContext />
        </MessageContext.Provider>

        <h1>Redux</h1>

        <SendMessageRedux />
        <RevcieveMessageRedux />
        
      </div>
    </Provider>
    
  );
}

export default App;
