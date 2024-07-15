import React from "react";
import { Link } from "react-router-dom";

const Table = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Mobile</th>
          <th scope="col">Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/edit/${item.id}`} className="btn btn-sm btn-warning">Edit</Link>
                <button className="btn btn-sm btn-danger" onClick={() => {props.handleDelete(item.id)}}>Delete</button>
              </td>
            </tr>
          );
        })}
        
      </tbody>
    </table>
  );
};

export default Table;
