import React from 'react';
import { Link } from "react-router-dom";

 const Header = () =>{
     return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Creole Studios </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link className="nav-link" to="/listusers">List Employees</Link>
              </li>
                          
           </ul>
            <div className="adduser">
                <Link  to="/signup" className="btn btn-primary " style={{marginLeft:"55rem"}}>Add User </Link>
              </div>
          </div>
        </div>
      </nav>
      </>
     );

 }
 export default Header;