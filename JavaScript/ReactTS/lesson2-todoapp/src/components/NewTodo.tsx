import React, {  useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

type NewTodoProps = {
    addInputValue:(todoText:string)=>void;
}

const NewTodo:React.FC<NewTodoProps> = ({addInputValue}) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitedHandler = (e:React.FormEvent) => {
    const enterValue = textInputRef.current!.value;
    e.preventDefault();
    if (!enterValue) {
            alert('please enter value in input')
    }else{
            addInputValue(enterValue);
            textInputRef.current!.value ="";
    }
  };

  return (
    <Form onSubmit={todoSubmitedHandler}>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Add todo" ref={textInputRef} />
        <Button type="submit" variant="outline-success">Add</Button>
      </InputGroup>
    </Form>
  );
};

export default NewTodo;
