import React from 'react'
import "./Login.css";
function Register() {
  return (
<>
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
</>
  )
}

export default Register