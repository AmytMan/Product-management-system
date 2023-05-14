import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Product from "../../features/productSlice/Product";
import Category from "../../features/fetchCategory/Category";
import Header from "../header/Header";

function Dashboard() {
  const [showProduct, setShowProduct] = useState(true);
  const [showCategory, setShowCategory] = useState(true);

  const handleProductButtonClick = () => {
    setShowProduct(true);
    setShowCategory(false);
  };

  const handleCategoryButtonClick = () => {
    setShowProduct(false);
    setShowCategory(true);
  };

  return (
    <div>
      <div className="fixed-top bg-header">
        <Header />
      </div>

      <Container className="header-2">
        <Row>
          <Col className="d-flex justify-content-between">
            <Button
              variant="info"
              onClick={handleProductButtonClick}
              active={showProduct}
            >
              Products
            </Button>
            <Button
              variant="info"
              onClick={handleCategoryButtonClick}
              active={showCategory}
            >
              Categories
            </Button>
          </Col>
        </Row>

        {showProduct && (
          <Row className="mt-3 ">
            <Col>
              <Product />
            </Col>
          </Row>
        )}

        {showCategory && (
          <Row className="mt-3 ">
            <Col>
              <Category />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Dashboard;
