import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './storeRedux';
import TodoListRedux from './TodoListRedux';
const App = (
  <Provider store={store}>
    <TodoListRedux/>
  </Provider>
  );
ReactDOM.render(App, document.getElementById('root'));