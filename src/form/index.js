import React, { useState } from 'react'
import './style.css'
const Form = ({onLoginSuccess}) => {
    const[showSignup , setShowSignup] = useState(false)
  return (
    <div className="container">
  <div className="forms-container">
    <div className="signin-signup">
     {!showSignup &&  <form  className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input onClick={()=> onLoginSuccess() }  defaultValue="Login" className="btn solid" />
        <p className="social-text">
          Or Sign in with social platforms <br />
          
        </p>
        {/* <div className="social-media">
          <a className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
        </div> */}
      </form>}
   {showSignup &&    <form action="/index" style={{opacity:"1"}} className="sign-up-form" method="post">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" name="username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" name="password" />
        </div>
        <input type="submit" className="btn" defaultValue="Sign up" />
         
         
      </form>}
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>Let's get into it and together #MakeItHappen</p>
        <button onClick={()=> setShowSignup(!showSignup)} className="btn transparent" id="sign-up-btn">
          {!showSignup ? "Sign up" : "Sign In"}
        </button>
      </div>
      <img src="./images/Saly-1.png" className="image" alt="" />
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>Ofcourse you are, let's take you to the Login Page!</p>
        <button className="btn transparent" id="sign-in-btn">
          Sign in
        </button>
      </div>
      <img src="./images/Saly-42.png" className="image" alt="" />
    </div>
  </div>
</div>

  )

}






export default Form
