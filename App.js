import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from"./Pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddUser from"./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Login from "./users/Login";
import Homemain from "./Pages/Homemain";


function App() {
  return (
    <div className="App">
      <Router>
     
    
        <Routes>
         <Route exact path="/" element={<Login/>}/>   
                <Route exact path="/Homemain" element={<Homemain/>}/>     
          <Route exact path="/Home" element={<Home/>}/>    
          <Route exact path="/adduser" element={<AddUser/>}/>    
           <Route exact path="/edituser/:id" element={<EditUser/>}/>  
         <Route exact path="/viewuser/:id" element={<ViewUser/>}/>     
        </Routes>
      </Router>
    </div>
  );
}
export default App;