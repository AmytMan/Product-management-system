import { useDeleteProductMutation, useGetProductsQuery } from "./ProductApi";
import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const { data, error, isLoading } = useGetProductsQuery();
  const reversedData = data ? data.slice().reverse() : [];

  const [deletePost] = useDeleteProductMutation();

  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      deletePost(id)
        .then((res) => {
          alert("Product Deleted successfully.");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleClose = () => setSelectedProduct(null);

  if (isLoading) {
    return <div>Products Loading....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5 className="m-3 text-center">All Products</h5>
        <div className="d-flex align-items-center justify-content-center bg-white p-2 m-3 rounded ">
          <Link to="/add" className="btn btn-success">
            create +{" "}
          </Link>
        </div>
      </div>

      <table className="table text-white text-capitalize">
        <thead>
          <tr>
            <th>Sn.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action's</th>
          </tr>
        </thead>
        <tbody>
          {reversedData.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}.</td>
              <td>
                <img
                  src={product.images}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.category.name}</td>
              <td>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(product.id)}
                >
                  {" "}
                  Delete
                </button>
                <Link
                  to={`/update/${product.id}`}
                  className="btn btn-success mx-2"
                >
                  Update
                </Link>
                <button
                  className="btn btn-info text-white mx-2"
                  onClick={() => setSelectedProduct(product)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        show={selectedProduct !== null}
        onHide={handleClose}
        className="text-dark text-capitalize"
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-uppercase">
            {selectedProduct?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProduct?.images}
            style={{ width: "100%", height: "300px" }}
          />
          <ul>
            <li>
              <p className="fs-bolder">{selectedProduct?.description}</p>
            </li>
            <li>
              <h6>Price: ${selectedProduct?.price}</h6>
            </li>
            <li>
              <h6>Category: {selectedProduct?.category.name}</h6>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Product;
