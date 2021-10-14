import React, { useRef } from 'react';
import TextField from '../textFields/TextField';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function InfoFormTest() {
  const dateOfBirth = useRef();
  const address1 = useRef();
  const address2 = useRef();
  const city = useRef();
  const county = useRef();
  const country = useRef();
  const postalCode = useRef();
  const history = useHistory();

  const handleClick = async () => {
    // e.preventDefault();
    // const user = values;
    // console.log(values);
    const user = {
      dateOfBirth: dateOfBirth.current.value,
      address1: address1.current.value,
      address2: address2.current.value,
      city: city.current.value,
      county: county.current.value,
      country: country.current.value,
      postalCode: country.current.value,
    };
    console.log(user);
    // try {
    //   await axios.post(
    //     `http://localhost:8800/api/users/615ef969689aea226b2e9e49`,
    //     user
    //   );
    //   history.push('/medical-info');
    // } catch (err) {
    //   console.log('Oh Shit on Basic Info!: ', err.message);
    // }
  };

  return (
    <form onSubmit={handleClick}>
      <TextField
        ref={dateOfBirth}
        type="text"
        label="Date of birth"
        name="dob"
        placeholder="dd / mm / yyyy"
      />
      <TextField
        ref={address1}
        type="text"
        label="Address line 1"
        name="address1"
        placeholder="Your address..."
      />
      <TextField
        ref={address2}
        type="text"
        label="Address line 2"
        name="address2"
        placeholder="Your address continued..."
      />
      <TextField
        ref={city}
        type="text"
        label="City"
        name="city"
        placeholder="Your city..."
      />
      <TextField
        ref={county}
        type="text"
        label="State / County / Province"
        name="county"
        placeholder="Your state, county or province..."
      />
      <TextField
        ref={country}
        type="text"
        label="Country"
        name="country"
        placeholder="Your country..."
      />
      <TextField
        ref={postalCode}
        type="text"
        label="Postal / Zip Code"
        name="postalCode"
        placeholder="Your postalCode..."
      />
      <button
        className="btn btn-dark mt-3 col-sm-12"
        type="submit"
        style={{
          padding: 15,
          backgroundColor: '#C64156',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          marginVertical: 5,
          height: 50,
          marginBottom: 20,
          border: 'none',
          minWidth: '100%',
        }}
      >
        Continue to Medical Info
      </button>
    </form>
  );
}
