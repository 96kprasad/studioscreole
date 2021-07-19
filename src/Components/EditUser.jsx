import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';


const EditUser = () =>{

    let history = useHistory();
    const { id } = useParams();
        const[ user ,setUser] = useState({firstname:"",lastname:"" , userid:"" ,email:"" , password:""});
     const {firstname , lastname , userid , email , password} = user;

     const onInputChange = e =>{
         setUser( {...user,[ e.target.name]:e.target.value})
     };

     useEffect ( () => {
         loadUser();

     },[])
     const onSubmit = async(e) =>{
        e.preventDefault();
        await axios.put(`http://127.0.0.1:3003/users/${id}`, user);
        history.push("/listusers");

     } ;

      const loadUser = async () =>{
          const result = await axios.get(`http://127.0.0.1:3003/users/${id}`);
          setUser(result.data);
      }

     return(
         <>
        
        <div className="container" style={{ textAlign:"left", fontWeight:"bold"}}>
        <div className="w-75 mx-auto shadow p-5" style={{background:"#f9fcc4"}}>
        <h2>Upadate User Details</h2>
        <form onSubmit={ e => onSubmit(e)}>
  <div className="form-group">
    <label  className="form-label">First Name</label>
    <input type="text"
           className="form-control from-control-lg" 
           placeholder=" Enter Firstname"
           name="firstname" value={firstname}    
           onChange={e => onInputChange(e)}
           required />
   
  </div>
  <div className="form-group mt-2">
    <label  className="form-label">Lastname</label>
    <input type="text" 
           className="form-control from-control-lg"
           placeholder="Edit Lastname"
           name="lastname" value={lastname}
           onChange={e => onInputChange(e)}
           required />
  </div>

  <div className="form-group mt-2">
    <label  className="form-label">UserId</label>
    <input type="text" 
           className="form-control from-control-lg"
           placeholder="Edit User Id"
           name="userid" value={userid}
           onChange={e => onInputChange(e)}
           required />
  </div>

  <div className="form-group mt-2">
    <label  className="form-label ">Email</label>
    <input type="email" 
           className="form-control" 
           placeholder="Edit Email"
           name="email" value={email} 
           onChange={e => onInputChange(e)}    
           required />
  </div>

  <div className="form-group mt-2">
    <label  className="form-label ">Password</label>
    <input type="text" 
           className="form-control" 
           placeholder="Edit Password"
           name="password" value={password} 
           onChange={e => onInputChange(e)}    
           required />
  </div>
 
  <button type="submit" className="btn btn-warning m-4 "><b>Update Employee</b></button>
</form>
</div>
</div>
</>
     );
}
export default EditUser;