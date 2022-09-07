import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";

export default function ListProduct() {
  const navigate = useNavigate();
  const [list, setList] = useState(useContext(AppContext));
  const handleDelete = (index) => {
    list.splice(index, 1);
    navigate("/home");
  };
  return (
    <div className="container">
      <h2>List Products:</h2>
      <NavLink to={"/products"} className="btn btn-primary">
        Create Product
      </NavLink>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.name} </td>
              <td>{item.price}$</td>
              <td>
                <Link to={`/home/update/${index}`} className="btn btn-primary">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
