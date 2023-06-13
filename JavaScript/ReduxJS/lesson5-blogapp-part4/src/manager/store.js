import { applyMiddleware, compose, createStore } from "redux";
import { blogReducer } from "./reducerBlog";
import thunk from "redux-thunk";

const configureStore = () => {
    const store = createStore(blogReducer,compose(applyMiddleware(thunk)));
    return store;
};

export default configureStore;