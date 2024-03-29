import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
function SingleCard({ title, photo, price, id, alldata }) {
  const { addItem } = useCart();
  const notify = () =>
    toast.success("Product added to basket!", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <Col sm={6} md={3}>
      <Card>
        <Card.Img variant="top" src={photo} height={300} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}$</Card.Text>

          <Button
            variant="success"
            onClick={() => {
              notify(addItem(alldata));
            }}
          >
            Add to cart
          </Button>
          <LinkContainer to={`/products/${id}`}>
            <Button className="ms-3" variant="primary">
              Read More
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Col>
  );
}

export default SingleCard;
