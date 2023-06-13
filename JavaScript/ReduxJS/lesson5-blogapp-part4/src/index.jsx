import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './manager/store';
import { getBlogsFromDatabase } from './manager/actionBlog';
const mystore = configureStore();








const result = (
  <Provider store={mystore}>
  <App />
</Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

mystore.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})


