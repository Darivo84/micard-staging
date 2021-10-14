import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Lunch from '../../assets/images/Lunch.png'
// Gender icons
// ========================================================================== 
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';

import './basicInfo.css'

export default function BasicInfo() {
  const history = useHistory()
  // const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');


  const PostData = () => {
    
    fetch('/api/basic', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Bearer '+localStorage.getItem('jwt')
      },
      body: JSON.stringify({        
        dateOfBirth,
        address1,
        address2,
        city,
        county,
        country,
        postalCode,
      })
    }).then(res => res.json()).then(data => {
      console.log(data)
      if (data.error) {
        alert(data.error)
      } else {
        localStorage.setItem('jwt', data.token)
        alert("Thanks for updating your Basic Information!")
        history.push('/medical-info')
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
        <h2 className="BasicLogoText">Basic Information</h2>
          <h4 className="BasicFormTitle">Add to your profile by completing your basic information.</h4>
          <img
            className="img-fluid"
            src={Lunch}
            alt="lunch"
            style={{ width: '170', height: '160' }}
          />
        </div>
        
        <div className="col-md-2"></div>

        <div className="col-md-6">
          
        <div className="card">

          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="gender" className="BasicFormLabel">Gender</label>

                <div className="BasicGenderRow">
                  <Link to="#" className="BasicGenderLinks">
                    <MaleIcon fontSize='large' className="BasicGenderIcons" />
                    <p>Male</p>
                  </Link>
                  <Link to="#" className="BasicGenderLinks">
                    <FemaleIcon fontSize='large' className="BasicGenderIcons" />
                    <p>Female</p>
                  </Link>
                  <Link to="#" className="BasicGenderLinks">
                    <TransgenderIcon fontSize='large' className="BasicGenderIcons" />
                    <p>Other</p>
                  </Link>
                  
                </div>

                <label htmlFor="dateOfBirth" className="BasicFormLabel">Date of birth</label>
                <input 
                  value={dateOfBirth}
                  onChange={(e)=>setDateOfBirth(e.target.value)}
                  type="text" 
                  className="BasicInput" 
                  id="validationCustom01"
                  required
                  name="dateOfBirth"
                  placeholder="dd / mm / yyyy"
                  autoComplete="on" 
                />
                
                <label htmlFor="address1" className="BasicFormLabel">Address line 1</label>
                <input 
                  value={address1}
                  onChange={(e)=>setAddress1(e.target.value)}
                  type="text" 
                  className="BasicInput" 
                  id="validationCustom01"
                  required
                  name="address1"
                  placeholder="Your address..."
                  autoComplete="on" 
                />
                
                <label htmlFor="address2" className="BasicFormLabel">Address line 2</label>
                <input 
                  value={address2}
                  onChange={(e)=>setAddress2(e.target.value)}
                  type="text" 
                  className="BasicInput" 
                  id="validationCustom01"
                  required
                  name="address2"
                  placeholder="Your address continued..."
                  autoComplete="on" 
                />
                
                <label htmlFor="city" className="BasicFormLabel">City</label>
                <input 
                  value={city}
                  onChange={(e)=>setCity(e.target.value)}
                  type="text" 
                  className="BasicInput" 
                  id="validationCustom01"
                  required
                  name="city"
                  placeholder="Your city..."
                  autoComplete="on" 
                />
                
                <label htmlFor="county" className="BasicFormLabel">State / County / Province</label>
                <input 
                  value={county}
                  onChange={(e)=>setCounty(e.target.value)}
                  type="text" 
                  className="BasicInput" 
                  id="validationCustom01"
                  required
                  name="county"
                  placeholder="State / County / Province"
                  autoComplete="on" 
                />
                
                <label htmlFor="country" className="BasicFormLabel">Country</label>
                <input 
                  value={country}
                  onChange={(e)=>setCountry(e.target.value)}
                  type="text" 
                  className="BasicInput" 
                  id="validationCustom01"
                  required
                  name="country"
                  placeholder="Your country..."
                  autoComplete="on" 
                />
                
                <label htmlFor="postalCode" className="BasicFormLabel">Postal / Zip Code</label>
                <input 
                  value={postalCode}
                  onChange={(e)=>setPostalCode(e.target.value)}
                  type="text" 
                  className="BasicInput" 
                  id="validationCustom01"
                  required
                  name="country"
                  placeholder="Your country..."
                  autoComplete="on" 
                />

              </div>
              <button 
                className="BasicButton" 
                type="button"
                value="submit"
                onClick={()=>PostData()}>
                Continue to Medical Info
              </button>
            </form>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
