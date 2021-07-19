import React, { useState , useEffect} from "react";
import axios from "axios";
import { Link ,useParams } from "react-router-dom";
import Modal  from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      backgroundColor:"#4a7969",
      transform: 'translate(-50%, -50%)',
    },
  };

const ViewUser = () =>{
const [user ,setUser] = useState({ firstname:"",lastname:"" , userid:"" , email:""});
const { id } = useParams();

useEffect(() => {
    loadUsers();
    
}, []);

const loadUsers = async() =>{
    const result =await axios.get(`http://127.0.0.1:3003/users/${id}`);
    setUser(result.data)
};

    return (
        <>
        
        <div className="container">
        <div className=" mt-4" style={{ marginLeft:"20rem ",width:"30rem",height:"20rem"}}>
        <Modal isOpen={true} style={customStyles}>
        <h2 style={{fontSize:"1.5rem",color:"white"}}>User Details</h2>
        <hr />
        <ul style={{listStyleType:"none",fontFamily:"-moz-initial",fontSize:"1.2rem", color:"white" }}>
            <b>
            <li>Firstname: {user.firstname}</li>
            <li>Lastname: {user.lastname}</li>
            <li>UserId: {user.userid}</li>
            <li>Email: {user.email}</li></b>
        </ul>
         
        <Link className="btn btn-primary mt-4" to="/listusers" style={{marginLeft:"16rem"}}>Okay</Link>
        </Modal>
        </div>
        </div>
        
        </>
    );
} 
export default ViewUser;