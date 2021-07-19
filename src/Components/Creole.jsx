import creole from "../Images/download.png";
import React, { useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect , useParams} from "react-router-dom";
import axios from 'axios';
const Creole = (Login, error) =>{

    const adminid="123456";
    const adminpassword="123456";

    const [details, setDetails]=useState( {userid: "" , password:"" } )
    const [user ,setUser] = useState({ userid:"" , password:""});
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
        
    }, []);
    
    const loadUsers = async() =>{
        const result =await axios.get(`http://127.0.0.1:3003/users/${id}`);
        setUser(result.data)
    };
    
    const submitHandler = e =>{
        e.preventDefault();

        if(user.userid==details.userid && user.password == details.password)
        {
            toast.success('Admin Login Sucessfully...! ', {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                <Redirect to="/"></Redirect>
        }
           else if (adminid == details.userid && adminpassword == details.password)
            
            {
                toast.success('Admin Login Sucessfully...! ', {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    <Redirect to="/"></Redirect>
            }

           

        
        else{
            toast.error('Please Enter Correct Details ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
            };

    const onInputChange = e =>{
     setDetails( {...details, [e.target.name]: e.target.value} )
    };
      
    return(
        <>
        <img src={creole}  style={{marginTop:"-55px",marginLeft:"35rem"} } />

        <div className="container " style={{ textAlign:"left", fontWeight:"bold"}}>
        <div className="w-50 shadow p-5 " style={{background:"#dff9c3",border:"2px",marginLeft:"16rem"}}>
        <h2>Sign-In</h2>
        <hr />
        <form onSubmit={ submitHandler }>
  <div className="form-group ">
    <label  className="form-label">UserId</label>
    <input type="text"
           className="form-control from-control-lg" 
           placeholder=" Enter User Id"
               required  style={{ width:"300px" }}
               name="userid"
               value={details.userid}
               onChange={e => onInputChange(e)}   
               />
   
  </div>
  

  <div className="form-group mt-2">
    <label  className="form-label ">Password</label>
    <input type="password" 
           className="form-control" 
           placeholder="Enter Password"   
           required style={{ width:"300px" }} 
           name="password"
           value={details.password}
           onChange={e => onInputChange(e)}      
           />
  </div>
  
  <button type="submit" className="btn btn-primary m-4 ">Submit</button>
</form>
</div>
</div>
<ToastContainer />
        </>
    );
}
export default Creole;