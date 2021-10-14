// import { useEffect, useState } from "react";
import QRCode from 'react-google-qrcode';
// import axios from "axios";
// import { useHistory } from 'react-router-dom'
// import { useParams } from "react-router";

import './profile.css'

// Apple Wallet 
// ==========================================================================   
// import AppleBtn from '../../assets/images/AppleBtn.png'

export default function Profile() {
  // const history = useHistory()
  // const [user, setUser] = useState({});
  // const firstName = useParams().firstName;
  // const lastName = useParams().lastName;

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/user?firstName=${firstName}`);
  //     // const res = await axios.get(`/users?lastName=${lastName}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [firstName, lastName]);

  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100">
        <h2 className="ProfileTitle">MIProfile</h2>
        <hr />
        <div className="col-sm-12 row">
          <div className="col-sm-6">
            <div className="ProfileQrContainer">
              <QRCode data="https://www.google.com" size={210} framed  style={{ alignItems: 'center' }}/>
            </div>
          </div>
          <div className="col-sm-6" style={{ alignItems: 'center' }}>
              <h4 className="ProfileUser">Undefined Undefined</h4>
              <div className="userInfoContainer">
                <div className="col-sm-4">
                  <p className="ProfileUserData">
                    <span>Phone Number:</span> 
                    <br />
                    <span>Email:</span>
                    <br />
                    <span>Address line 1:</span>
                    <br />
                    <span>Address line 2:</span>
                    <br />
                    <span>City:</span>
                    <br />
                    <span>County:</span>
                    <br />
                    <span>Country:</span>
                    <br />
                    <span>Postal / Zip Code:</span>
                  </p>
                </div>
                <div className="col-sm-8">
                <p className="ProfileUserDataInfo">
                <span>Undefined</span> 
                    <br />
                    <span>Undefined</span>
                    <br />
                    <span>Undefined</span>
                    <br />
                    <span>Undefined</span>
                    <br />
                    <span>Undefined</span>
                    <br />
                    <span>Undefined</span>
                    <br />
                    <span>Undefined</span>
                    <br />
                    <span>Undefined</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <button className="ProfileLogoutButton"type="submit">Add to Apple Wallet</button>
        </div>
        <div className="col-sm-4">
          <button className="ProfileLogoutButton"type="submit">Add to Google Pay</button>
        </div>
        <div className="col-sm-4">
          <button className="ProfileLogoutButton"type="submit">Logout</button>
        </div>
        
      </div>
    </div>
  )
}
