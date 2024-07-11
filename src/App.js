import { useEffect, useState } from 'react';
import './App.css';
import Table from './Components/Table';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let studentsData = await axios.get("https://668d4175099db4c579f24e88.mockapi.io/student")

      setData(studentsData.data);
    }

    getData();
  })

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;

// API Method:

// create   ->   POST
// Read     ->   GET
// Update   ->   PUT
// Delete   ->   DELETE