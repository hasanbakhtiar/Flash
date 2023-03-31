import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import nature from './img/unsplash.jpg'
class List extends React.Component{
    render(){
        return(
            <ol>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ol>
        )
    }
}


class App extends React.Component{
    render(){
        return(
           <>
             <h1>Hello</h1>
             <img width={200} src={nature} alt="" />
            <List/>
           </>
        )
    }
    
}


ReactDOM.render(<App/>,document.querySelector('#root'));