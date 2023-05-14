import React, { useState } from "react";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "./CategoryApi";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
function Category() {
  const { data: categoryData, isLoading } = useGetCategoriesQuery();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleClose = () => setSelectedCategory(null);

  const [deleteCategory] = useDeleteCategoryMutation();
  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      deleteCategory(id)
        .then((res) => {
          alert("category Deleted successfully.");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <h5 className="m-3 text-center">All Categories</h5>
        <div className="d-flex align-items-center justify-content-center bg-white p-2 m-3 rounded ">
          <Link to="/createcategory" className="btn btn-success">
            create +{" "}
          </Link>
        </div>
      </div>
      <table className="table text-white">
        <thead>
          <tr>
            <th>Sn.</th>
            <th>Title</th>
            <th>Image</th>
            <th>Action's</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}.</td>
              <td>{category.name}</td>
              <td>
                <img
                  src={category.image}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>
                <Button
                  variant="danger"
                  className=" mx-2"
                  onClick={() => handleDelete(category.id)}
                >
                  {" "}
                  Delete
                </Button>
                <Link to={`/editcategory/${category.id}`}>
                  <Button variant="success">Edit </Button>
                </Link>
                <Button
                  variant="info"
                  className=" text-white mx-2"
                  onClick={() => setSelectedCategory(category)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        show={selectedCategory !== null}
        onHide={handleClose}
        className="text-dark text-capitalize"
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Category: {selectedCategory?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedCategory?.image}
            style={{ width: "100%", height: "300px" }}
          />
          <ul>
            <li>
              <h6>Id: {selectedCategory?.id}</h6>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
