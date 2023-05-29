import React from 'react'
import { createStore } from 'redux'

const intialState = {count:0}


const countReducer =(state=intialState,action)=>{
        switch (action.type) {
            case "increment":
                return {count:state.count +1}
            case "decrement":
                return {count:state.count-1}
                case "reset":
                return {count:intialState.count}
            default:
                return state;
        }
}

const store = createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch({
    type:"increment"
})

store.dispatch({
    type:"reset"
})



store.dispatch({
    type:"decrement"
})
store.dispatch({
    type:"reset"
})



const App = () => {
  return (
    <div>App</div>
  )
}

export default App