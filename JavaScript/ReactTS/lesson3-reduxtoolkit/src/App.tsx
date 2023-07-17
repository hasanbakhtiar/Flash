import React, { useState } from "react";
import { add, remove } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const todoItems: any = useAppSelector((p) => p);
  const dispatch: any = useAppDispatch();

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(add(title));
    setTitle('');
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
                onChange={(e) => setTitle(e.target.value)}
                value={title}
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
              <li
                key={c}
                className="list-group-item d-flex justify-content-between"
              >
                {item.title}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(remove(item.id));
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
