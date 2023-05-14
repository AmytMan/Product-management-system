import React from "react";
import { useGetProductByIdQuery } from "../../features/productSlice/ProductApi";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function ProductById() {
  const { productId } = useParams();
  const { data: productById, isLoading } = useGetProductByIdQuery(productId);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center text-black text-capitalize vh-100">
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={productById.images} />
          <Card.Body>
            <Card.Title>Title: {productById.title}</Card.Title>
            <Card.Text>Description: {productById.description}</Card.Text>
            <Card.Text>Price: {productById.price}</Card.Text>
            <Card.Text>Category: {productById.category.name}</Card.Text>
            <Link to="/dashboard">
              <Button variant="primary">Go to Dashboard</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductById;
