import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";

import AppContext from "../../../context/AppContext";

UpdateProduct.propTypes = {};

function UpdateProduct(props) {
  const [list, setList] = useState(useContext(AppContext));
  const { id } = useParams();
  const handleSubmit = (values) => {
    list.splice(id, 1, values);
    list[id] = "";
  };
  return (
    <div className="container">
      <h1>Update Product</h1>
      <Formik
        initialValues={list[id]}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <Field className="name" type="text" name="name" />
            <ErrorMessage
              name="name"
              className="alert  alert-danger alert-dismissible"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              Price
            </label>
            <Field className="price" type="text" name="price" />
            <ErrorMessage
              name="price"
              className="alert  alert-danger alert-dismissible"
              component={"span"}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateProduct;
