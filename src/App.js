import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./Pages/UserList";
import CreateUser from "./Pages/CreateUser";
import EditUser from "./Pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}/>  
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
