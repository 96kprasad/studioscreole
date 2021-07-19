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
      backgroundColor:"#2f5c4c",
      transform: 'translate(-50%, -50%)',
    },
  };

const Delete = () =>{
const [user ,setUser] = useState({ firstname:"",lastname:"" , userid:"" , email:""});
const { id } = useParams();

useEffect(() => {
    loadUsers();
    
}, []);

const deleteUser = async id =>{
    await axios.delete(`http://127.0.0.1:3003/users/${id}`,user);
    loadUsers();
  
};

const loadUsers = async() =>{
    const result =await axios.get(`http://127.0.0.1:3003/users/${id}`);
    setUser(result.data)
};

    return (
        <>
        
        <div className="container">
        <div className=" mt-4" style={{ marginLeft:"20rem ",width:"30rem",height:"20rem"}}>
        <Modal isOpen={true} style={customStyles}>
        <h1 style={{fontSize:"1rem",color:"white"}}>Do you really want to delete the record..?</h1>
        <hr />
        <Link className="btn btn-primary mt-2 " to="/listusers" onClick={ () => deleteUser(user.id)}>Delete</Link>
        <Link className="btn btn-primary mt-2 " to="/listusers" style={{marginLeft:"2rem"}}>Close</Link>
        </Modal>
        </div>
        </div>
        
        </>
    );
} 
export default Delete;