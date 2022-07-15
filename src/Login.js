import React from 'react'
import "./Login.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
function Login() {
  return (
    <>
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form" method='POST'>
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <AccountCircleIcon fontSize='large'/>
            <input type="text" placeholder="Username" name="username" />
          </div>
          <div className="input-field">
          <LockIcon fontSize='large'/>
            <input type="password" placeholder="Password" name="password" />
          </div>
          <input type="submit" Value="Login" className="btn solid" /> 
        </form>
        <form action="#" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            
            <input type="text" placeholder="Username" name="username"/>
          </div>
          <div className="input-field">
            
            <input type="email" placeholder="Email" name="email"/>
          </div>
          <div className="input-field">
            
            <input type="password" placeholder="Password" name="password"/>
          </div>
          <input type="submit" className="btn" Value="Sign up" href="/signup"/>
        </form>
      </div>
    </div>
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Let's get into it and together #MakeItHappen
          </p>
          <button className="btn transparent" id="sign-up-btn">
            Sign up
          </button>
        </div>
        <img src="../images/Saly-1.png" className="image" alt="Logo here!" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Hello fellow mate! Let's conqurer the tasks with MakeItHappen
          </p>
          <button className="btn transparent" id="sign-in-btn">
            Sign in
          </button>
        </div>
        <img src="../images/Saly-1.png" className="image" alt="" />
      </div>
   </div>
  </div>   
<script src="Switch.js"></script>
  </>
  )
}
export default Login;
