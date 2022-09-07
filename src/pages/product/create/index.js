import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import AppContext from "../../../context/AppContext";
import { useState, useContext } from "react";
CreateProduct.propTypes = {};

function CreateProduct(props) {
  const [list, setList] = useState(useContext(AppContext));

  const handleSubmit = (values, form) => {
    list.push(values);
    form.resetForm();
  };

  return (
    <div className="container">
      <h1>Create Product</h1>
      <Formik
        initialValues={{
          name: "",
          price: "",
        }}
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
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateProduct;
