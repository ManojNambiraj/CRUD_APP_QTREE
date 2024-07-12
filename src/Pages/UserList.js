import { useEffect, useState } from "react";
import Table from "../Components/Table";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let studentsData = await axios.get(
        "https://668d4175099db4c579f24e88.mockapi.io/student"
      );

      setData(studentsData.data);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <div>
        <Link to={"/create"} className="btn btn-primary">
          Create User
        </Link>
      </div>
      <Table data={data} />
    </div>
  );
};

export default UserList;
