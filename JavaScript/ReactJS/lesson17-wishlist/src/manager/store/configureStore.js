import { combineReducers, createStore } from "redux";
import { wishReducer } from "../reducer/wishReducer";

 const configureStore = ()=>{
    const store = createStore(combineReducers({
        wish:wishReducer
    }));
    return store;
}
export default configureStore;