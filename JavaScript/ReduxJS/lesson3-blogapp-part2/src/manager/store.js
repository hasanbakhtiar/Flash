import { createStore } from "redux";
import { blogReducer } from "./reducerBlog";

const configureStore = () => {
    const store = createStore(blogReducer);
    return store;
};

export default configureStore;