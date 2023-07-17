import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
