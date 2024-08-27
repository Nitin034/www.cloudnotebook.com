import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import nswimg from "../Image/Screenshot (95).png";

const Signup = (props) => {
    const[credentials, setCredentials] = useState({name:"", email:"", password:"", cpassword:""})

    let Navigate = useNavigate();
    const handleSubmit= async (e)=>{
    e.preventDefault();
    fetch()
    const {name, email, password,} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, password})
  });
  const json = await response.json()
  console.log(json);
  if (json.success){
    // Save the auth token and redirect
    localStorage.setItem('token', json.authtoken);
    Navigate("/");
    props.showAlert("Accound Created Successfully ", "success")
  }
  else{
    props.showAlert("Invalid Credentials", "danger")
  }
}

const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }
  return (
    <div className="d-flex justify-content-center my-3"> 
    <div className="card" style={{width: "23rem"}}>
    <img src={nswimg} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <div className='container mt-2'>
    <h2 className='my-3'>Create an Account to use Nsw Note Book</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-success">Sign up</button>
</form>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Signup
