import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./Pages/UserList";
import CreateUser from "./Pages/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}/>  
        <Route path="/create" element={<CreateUser />} />
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
