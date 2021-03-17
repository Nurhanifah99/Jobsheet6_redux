import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer'
// import App from './App';
import CreateTodo from './containers/CreateTodo'
import registerServiceWorker from 'react-service-worker';
import Table from './containers/Table'

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>
  f)(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
  {/* <App /> */}
  <CreateTodo />
  <Table />
</Provider>
  , document.getElementById('root'));
registerServiceWorker();