import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/images/MICardLogo-Grad.png'

// import M from 'materialize-css'

import './signup.css'

export default function Signup() {
  const history = useHistory();
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const PostData = () => {
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      alert("Your email address is invalid. Please try again.")
      return
    }
    
    fetch('https://radiant-cliffs-18017.herokuapp.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      })
    }).then(res => res.json()).then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        alert(data.message)
        history.push('/login')
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
            <h2 className="SignupLogoText">
              MICard Go
          </h2>
        </div>

        <div className="col-md-2"></div>

        <div className="col-md-6">

        <div className="card" style={{ padding: '15px' }}>
          <div className="SignupFormTitle">
              <h4>
                Welcome! Please Sign Up.
              </h4>
            </div>

            <form>
              <div className="form-group">

              <label htmlFor="firstname" className="SignupFormLabel">First name</label>
              <input 
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                type="text" 
                className="SignupInput" 
                name="firstName"
                placeholder="Your first name..."
                autoComplete="on" 
              />
              <div className="invalid-feedback">Please choose a username.</div>
              
              <label htmlFor="lastname" className="SignupFormLabel">Last name</label>
              <input 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                type="text"
                className="SignupInput" 
                name="lastname"
                placeholder="Your last name..."
                autoComplete="on"
              />
              
              <label htmlFor="phonenumber" className="SignupFormLabel">Phone number</label>
              <input 
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                type="text"
                className="SignupInput" 
                name="phonenumber"
                placeholder="Your phone number..."
                autoComplete="on"
              />
              
              <label htmlFor="email" className="SignupFormLabel">Email</label>
              <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="SignupInput" 
                name="email"
                placeholder="Your email..."
                autoComplete="on"
              />
              
              <label htmlFor="password" className="SignupFormLabel">Password</label>
              <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                className="SignupInput" 
                name="password"
                minLength="6"
                placeholder="Your password..."
                autoComplete="on"
              />
              </div>
              <button 
                className="SignupButton" 
                type="button"
                value="submit" 
                onClick={()=>PostData()}>
                Sign Up
              </button>
            </form>
            <Link
            to="/login"
            className="AuthSwitchLink"
            style={{
              textDecoration: 'none',
            }}
          >
            <p className="SignupLink">Already have an account? Please login.</p>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}
