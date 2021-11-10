import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { useRoutes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuth"));
  const routes = useRoutes(isAuthenticated);
  return(
    <Router>
      <Navbar/>
      <div className="container">  
          {routes}
      </div>  
    </Router>
  )
}
export default App;