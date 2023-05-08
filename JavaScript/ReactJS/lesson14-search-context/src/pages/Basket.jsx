import React from "react";
import { Button, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
const Basket = () => {
  const { items, updateItemQuantity, removeItem, cartTotal, emptyCart, isEmpty } = useCart();
  const notify = () =>
    toast.error("Deleted!", {
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
    isEmpty?<div className="d-flex align-items-center justify-content-center">
      <img className="text-center" src="https://cdn.dribbble.com/users/461802/screenshots/4421003/media/e5ec819f7ae4ac0b46aa96643193d5e8.gif" alt="err"/>
    </div> :
    <div>
      <h1 className="text-center my-5">Cart </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, count) => {
            return (
              <tr>
                <td>{count + 1}</td>
                <td>
                  <img src={item.image} width={50} alt="" />
                </td>
                <td>{item.title}</td>
                <td>{item.price.toFixed() * item.quantity}$</td>
                <td>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <span className="mx-3">{item.quantity}</span>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      notify(removeItem(item.id));
                    }}
                  >
                    X
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button
        onClick={() => {
          emptyCart();
        }}
        variant="danger"
      >
        Clear Cart
      </Button>
      <h4>
        Total Price:<span className="text-danger">{cartTotal.toFixed()}$</span>
      </h4>
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
    </div>
  );
};

export default Basket;
