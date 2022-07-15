import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";  
import Form from "./form";
import Sidebar from "./Sidebar";
import Todo from "./Todo"; 
/* import Login from "./Login" */

  function App(){
    const[logedIn , setLogedin] = useState(false)
  return(
        <div>
        {logedIn ? <><div style={{display:"flex" , flexDirection:"column"}} className="app"><Navbar/><div style={{display:"flex"}}> <Sidebar /> <Todo /></div></div></> : <Form onLoginSuccess={()=> {
          setLogedin(true)
          console.log("checkkk")
          }} /> }
        </div>
)};
export default App;
