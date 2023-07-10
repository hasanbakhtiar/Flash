import { Button, ListGroup } from "react-bootstrap";
import { TodoType } from "../config";


const TodoList:React.FC<TodoType[]> = ({comingItem}) => {
  return (
    <ListGroup>
        {comingItem.map((item:string,c:number)=>{
                    return<ListGroup.Item key={c} className="d-flex justify-content-between">
                    <span>{item.title}</span>
                    <Button variant="danger">X</Button>
                  </ListGroup.Item>
        })}
   
    </ListGroup>
  );
};

export default TodoList;
