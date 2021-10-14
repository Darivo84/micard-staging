import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Doctor from '../../assets/images/Doctor.png'

import './medInfo.css'

export default function MedInfo() {
  const history = useHistory()
  const [allergies, setAllergies] = useState("")
  const [illness, setIllness] = useState("")
  const [medications, setMedications] = useState("")

  const PostData = () => {
    
    fetch('/api/med', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body: JSON.stringify({        
        allergies,
        illness,
        medications,
      })
    }).then(res => res.json()).then(data => {
      console.log(data)
      if (data.error) {
        alert(data.error)
      } else {
        localStorage.setItem('jwt', data.token)
        alert("Thanks for updating your Medical Information!")
        history.push('/profile')
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
          <h2 className="MedLogoText">Medical Information</h2>
          <h4 className="MedFormTitle">Complete your profile by adding your medical information.</h4>
          <img
            className="img-fluid"
            src={Doctor}
            alt="doctor"
            style={{ width: '170', height: '160' }}
          />
        </div>

        <div className="col-md-2"></div>
        
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              
              <form>
                <div className="form-group">
                  <label htmlFor="allergies" className="MedFormLabel">Allergies</label>
                  <input 
                    value={allergies}
                    onChange={(e)=>setAllergies(e.target.value)}
                    type="text" 
                    className="MedInput" 
                    id="validationCustom01"
                    required
                    name="dateOfBirth"
                    placeholder="If 'Yes', please let us know..."
                    autoComplete="on" 
                  />
                  
                  <label htmlFor="illness" className="MedFormLabel">Illness(es)</label>
                  <input 
                    value={illness}
                    onChange={(e)=>setIllness(e.target.value)}
                    type="text" 
                    className="MedInput" 
                    id="validationCustom01"
                    required
                    name="illness"
                    placeholder="If 'Yes', please let us know..."
                    autoComplete="on" 
                  />
                  
                  <label htmlFor="medication" className="MedFormLabel">Vitamins / Supplements / Medications</label>
                  <input 
                    value={medications}
                    onChange={(e)=>setMedications(e.target.value)}
                    type="text" 
                    className="MedInput" 
                    id="validationCustom01"
                    required
                    name="medication"
                    placeholder="If 'Yes', please let us know..."
                    autoComplete="on" 
                  />
                </div>

                <button 
                  className="MedButton" 
                  type="button"
                  value="submit"
                  onClick={()=>PostData()}>
                  Continue to Profile
                </button>
              </form>
            
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
