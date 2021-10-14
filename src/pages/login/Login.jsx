import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/images/MICardLogo-Grad.png'

import './login.css'

export default function Login() {
  const history = useHistory();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const PostData = () => {
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      alert("Your email address is invalid. Please try again.")
      return
    }
    fetch("https://micardstaging.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({        
        email,
        password,
      })
    }).then(res => res.json()).then(data => {
      console.log(data)
      if (data.error) {
        alert(data.error)
      } else {
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        alert(`Welcome back! ${data.firstname}`)
        history.push("/basic-info")
      }
    })
    .catch(err => {
      console.log(err);
    })  
  }

  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100">
        
        
        <div className="col-md-4">
        <img
              className="img-fluid"
              src={Logo}
              alt="Logo"
              style={{ width: '170', height: '160' }}
            />
            <h2 className="LoginLogoText">
              MICard Go
          </h2>
        </div>

        <div className="col-md-2"></div>

        <div className="col-md-6">

          <div className="card">
            <div className="card-body">
              <div className="LoginFormTitle">
                <h4>Welcome back! Please Login.</h4>
              </div>

              <form>
                <div className="form-group">

                  <label htmlFor="email" className="LoginFormLabel">Email</label>
                  <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="LoginInput" 
                    required
                    name="email"
                    placeholder="Your email..."
                    autoComplete="on"
                  />
                  
                  <label htmlFor="password" className="LoginFormLabel">Password</label>
                  <input 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    className="LoginInput" 
                    required
                    name="password"
                    minLength="6"
                    placeholder="Your password..."
                    autoComplete="on"
                  />
                </div>
                <button 
                  className="LoginButton" 
                  type="button"
                  value="submit"
                  onClick={()=>PostData()}>
                  Login
                </button>
              </form>

              <Link to="/signup" className="AuthSwitchLink" style={{ textDecoration: 'none' }}>
                <p className="LoginLink">Don't have an account? Please sign up.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
