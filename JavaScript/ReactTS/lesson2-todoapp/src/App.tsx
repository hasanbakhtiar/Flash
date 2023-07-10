import { Col, Container } from "react-bootstrap";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import { TodoType } from "./config";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    console.log(todos);
  });

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now().toString(), title: text },
    ]);
  };
  return (
    <Container>
      <h1 className="text-center my-3">Todo App</h1>
      <div className="d-flex justify-content-center">
        <Col sm={12} md={5}>
          <NewTodo addInputValue={todoAddHandler} />
          <TodoList comingItem={todos} />
        </Col>
      </div>
    </Container>
  );
};

export default App;
