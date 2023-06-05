import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

const Dashboard = () => {
    const blogdata = useSelector(state=>state);
    
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
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {blogdata.map((item,count)=>{
        return (
            <tr>
            <td>{count+1}</td>
            <td>{item.title}</td>
            <td>{item.auther}</td>
            <td><Button variant='danger'>Delete</Button></td>
          </tr>
        )
    })}
     
   

    </tbody>
  </Table>
   </>
  )
}

export default Dashboard