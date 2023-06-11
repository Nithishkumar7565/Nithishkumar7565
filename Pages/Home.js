import React,{useEffect, useState} from "react";
import axios from "axios";
import {Link,useNavigate,useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";


export default function Home() {
    const [users,setUsers]=useState([]);

    const { id } = useParams();
    useEffect(() =>{
        loadUsers();

    },[]);

    const loadUsers =async ()=>{
        const result =await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user2/${id}`);
      loadUsers();
    };
   

  return (
   
     
    <div className='container'>
       <Navbar/>
       
        <div childrenlassName='py-4'>
        <table class="table border shadow">
  <thead>
    <tr>
    <th scope="col">S.No</th>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">USERNAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE_NUMBER</th>
     <th scope="col">PASSWORD</th>
      <th scope="col" style={{
                        textAlign:"30px"
                      }}>ACTION</th>
     
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>
        (
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
            
            <td>{user.password}</td>
             <td>
                <Link className="btn btn-primary mx-2"
                 to={`/viewuser/${user.id}`}>View
               
                </Link>
                <Link className="btn btn-outline-primary mx-2"
               to={`/edituser/${user.id}`}
                >Edit</Link>
                <button className="btn btn-danger mx-2"
                onClick={() => deleteUser(user.id)}
                >Delete</button>
             </td>
   

          </tr>


        ))
    }
  
   
  </tbody>
</table>
        </div>
    </div>

  )
}
