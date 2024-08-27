import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import nswimg from "../Image/Screenshot (95).png";

const Login = (props) => {
   const[credentials, setCredentials] = useState({email:"", password:""})
   let Navigate = useNavigate();
    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        fetch()
        const response = await fetch("http://localhost:5000/api/auth/login",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Accound Logged in Successfully ", "success")
        Navigate("/");
         
      }
      else{
        props.showAlert("Invalid Details", "danger")
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
    <h2 className='my-1'>Login to Continue to Nsw Note Book</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlfor="email" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" value={credentials.email} onChange={onChange} id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" value={credentials.password} onChange={onChange}id="password"/>
  </div>
  <button type="submit" className="btn btn-success">Login</button>
</form>
    </div>
  </div>
  </div>
 
 
    
  )
}

export default Login
