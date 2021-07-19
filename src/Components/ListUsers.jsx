import React , { useState , useEffect} from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const ListUsers = () =>
 {
    
     const[users,setUsers]=useState([]);
     
     useEffect(() => {
         
        loaduser();
             
         }
     , []);

     const loaduser = async() =>{
         const result =await axios.get("http://127.0.0.1:3003/users");
         
         setUsers(result.data.reverse())
     };

     const deleteUser = async id =>{
         await axios.delete(`http://127.0.0.1:3003/users/${id}`);
         toast.warn('User deleted Sucessfuly!', {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
       loaduser();
       
     };
     return(<>
        
        <div className="container">
        <div className="py-4">
        <div className="py-4">
        <h2>Users List</h2>
        <hr />
        </div>
        <table class="table border shadow"  >
  <thead class="table-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">UserId</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
        users.map((user , index) =>(
        <tr>
        <th scope="col">{index + 1}</th>
       <td> {user.firstname} </td>
       <td> {user.lastname} </td>
       <td> {user.userid} </td>
       <td> {user.email} </td>
       <td> 
      
       <Link class="btn btn-primary m-2" to={`/viewuser/${user.id}`}>View</Link>
       <Link class="btn btn-outline-secondary m-2" to={`/edit/${user.id}`}>Edit</Link>

       {/* Use Below Link to Delete Record Directly  & Comment the seconnd Link of Delete User */}
     {/*  <Link to={"/listusers"} class="btn btn-danger" onClick={ () => deleteUser(user.id)}>Delete</Link>  */}
     
       <Link to={"/listusers"} class="btn btn-danger" to="/delete">Delete</Link>
       </td>
       </tr>

     
        ))
      }
  </tbody>
</table>

        </div>
        </div>
        <ToastContainer />
        </>

    );
 }
 export default ListUsers;