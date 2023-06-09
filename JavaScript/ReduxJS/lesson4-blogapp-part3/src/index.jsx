import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './manager/store';
import { addblog } from './manager/actionBlog';
const mystore = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

// mystore.subscribe(()=>{
//   console.log(mystore.getState());
// })
 mystore.dispatch(addblog({title:"test",auther:"jest"}))
// mystore.dispatch(removeBlog({id:blog1.newblog.id}))



root.render(
  <React.StrictMode>
  <Provider store={mystore}>
    <App />
  </Provider>
  </React.StrictMode>
);
