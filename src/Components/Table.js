import React from "react";

const Table = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          );
        })}
        
      </tbody>
    </table>
  );
};

export default Table;
