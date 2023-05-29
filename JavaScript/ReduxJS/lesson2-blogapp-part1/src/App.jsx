import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Home from './components/Home'


const initialBlog = [
    {
        id: 1,
        title: "Blog One",
        auther: "Jhon"
    },
    {
        id: 2,
        title: "Blog Two",
        auther: "Doe"
    },
    
]


const blogReducer = (state = initialBlog, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [...state,action.newblog]

        default:
            return state
    }
}

const mystore = createStore(blogReducer);


mystore.dispatch({
    type:"ADD_BLOG",
    newblog:{
        id:3,
        title:"Blog Three",
        auther:"Mika Dayi"
    }
})



const App = () => {

    return (
        <Provider store={mystore}>
            <Home/>
        </Provider>
    )
}

export default App