import axios from 'axios';
import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 const SignUp = () =>{
    let history = useHistory();
    const[user, setUser] =useState( {

        firstname:"",
        lastname:"",
        userid:"",
        email:"",
        password:""
    });
    const { firstname , lastname , userid , email , password}= user;
    const onInputChange = e => {
        setUser( {...user,[e.target.name]: e.target.value} )
    };

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://127.0.0.1:3003/users", user);
        toast.warn(' User Added Sucessfully..!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        history.push("/listusers")
        
    };

    return(
        <>
        <div className="container" style={{ textAlign:"left", fontWeight:"bold"}}>
        <div className="w-50 mt-4 shadow p-5" style={{background:"#aaf8ec",marginLeft:"20rem",height:"37rem"}}>
        <h2>Sign Up</h2>
        <hr />
        <form onSubmit={e => onSubmit(e)} style={{ width:"300px" }}> 
  <div class="form-group ">
    <label  class="form-label">First Name</label>
    <input type="text"
           class="form-control from-control-lg" 
           placeholder=" Enter Firstname"
           name="firstname" 
           value={firstname}
           onChange={e => onInputChange(e)}
           required />
   
  </div>
  <div class="form-group mt-2">
    <label  class="form-label">Lastname</label>
    <input type="text" 
           class="form-control from-control-lg"
           placeholder="Enter Lastname"
           name="lastname" 
           value={lastname} 
           onChange={e => onInputChange(e)}      
           required />
  </div>

  <div class="form-group mt-2">
    <label  class="form-label">User Id</label>
    <input type="text" 
           class="form-control from-control-lg"
           placeholder="Enter Lastname"
           name="userid" 
           value={userid}
           onChange={e => onInputChange(e)}        
           required />
  </div>

  

  <div class="form-group mt-2">
    <label  class="form-label ">Email</label>
    <input type="email" 
           class="form-control" 
           placeholder="Enter Email"  
           name="email" 
           value={email}
           onChange={e => onInputChange(e)}
           required />
  </div>

  <div class="form-group mt-2">
    <label  class="form-label ">Password</label>
    <input type="password" 
           class="form-control" 
           placeholder="Enter Password" 
           name="password" 
           value={password}
           onChange={e => onInputChange(e)}
           required />
  </div>
  
  <button type="submit" class="btn btn-primary m-4 ">Submit</button>
</form>
</div>
</div>
<ToastContainer />
</>
    );
}
export default SignUp;