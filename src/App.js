import React, {useState} from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Header from "./Components/Header";
import Creole from "./Components/Creole";
import PageNotFound from "./Components/PageNotFound";
import SignUp from "./Components/SignUp";
import ListUsers from "./Components/ListUsers";
import EditUser from "./Components/EditUser";
import ViewUser from "./Components/ViewUser";
import Delete from "./Components/Delete";


function App() {

 

  return (
    <>
    <div className="App">

   
    <Router>
    <Header />
      <Switch>
      <Route exact path="/" component={Creole} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/listusers" component={ListUsers} />
      <Route exact path="/edit/:id" component={EditUser} />
      <Route exact path="/viewuser/:id" component={ViewUser} />
      <Route exact path="/delete" component={Delete} />
      
      <Route component={PageNotFound} />
      </Switch>

    </Router>

    
   
   
    </div>
    </>
  );
}

export default App;
