import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import {  removeBlogFromDatabase } from '../../manager/actionBlog';

const Dashboard = () => {
    const blogdata = useSelector(state=>state);
    const dispatch = useDispatch();
  return (
   <>
   <h1 className='my-5 text-center'>Admin Panel</h1>
   <LinkContainer to="/admin/add"><Button variant='dark mb-3'>Add new blog</Button></LinkContainer>
   <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Auther</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {blogdata.map((item,count)=>{
        return (
            <tr key={item.id}>
            <td>{count+1}</td>
            <td>{item.title}</td>
            <td>{item.auther}</td>
            <td><LinkContainer to={`/admin/edit/${item.id}`}><Button variant='warning'>Edit</Button></LinkContainer></td>
            <td><Button variant='danger' onClick={()=>{dispatch(removeBlogFromDatabase(item.id))}}>Delete</Button></td>
          </tr>
        )
    })}
     
   

    </tbody>
  </Table>
   </>
  )
}

export default Dashboard