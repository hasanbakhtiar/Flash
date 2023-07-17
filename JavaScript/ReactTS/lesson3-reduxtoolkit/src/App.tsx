import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/todoSlice";

const App: React.FC = () => {
  const todoItems: any = useSelector((p) => p);
  const dispatch: any = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(todoItems);
  
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(add(inputRef.current!.value))
  };
  return (
    <div className="container">
      <h1 className="my-5 text-center">Todo App</h1>
      <div className="d-flex justify-content-center">
        <div className="col-6">
          <form onSubmit={formSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="enter todo"
                ref={inputRef}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                id="button-addon2"
              >
                Add
              </button>
            </div>
          </form>
          <ul className="list-group">
            {todoItems.todos.map((item: any, c: number) => (
              <li key={c} className="list-group-item">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
