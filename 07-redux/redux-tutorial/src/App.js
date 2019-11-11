import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import SendMessageRedux from './components/SendMessageRedux';
import RevcieveMessageRedux from './components/RevcieveMessageRedux';
import Search from './components/Search';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <h1>Send message Recieve Message with Redux</h1>

        <SendMessageRedux />
        <RevcieveMessageRedux />

        <h1>Todo</h1>
        <Search />

        <TodoList />
      </div>
    </Provider>    
  );
}

export default App;
