import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
  const [formData,setFormData]=useState({userName:"",email:"",password:""})
  const navigate=useNavigate()
  
  
  const handleChange=(e)=>{
    const{name,value}=e.target
    setFormData(prev=>({...prev,[name]:value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.get("http://localhost:4000/products")

    .then(res =>{
      const duplicate=res.data.find(u=> u.email === formData.email)
      if(duplicate){  
        alert("Account already exists. You will be redirected to the Login Page");
        navigate("/login")
      }  
      else{
      axios.post("http://localhost:4000/products",formData)
      console.log("Account created successfully")
      navigate("/login")
      } 
    })
    .catch(err=>{
      console.log(err)
    })

  }

  return (

    <div>
      <form className='signup' onSubmit={handleSubmit}>
        <div className='signup-form'>
        <label>UserName</label><br></br>
        <input type='text' name="userName" value={formData.userName} onChange={handleChange} required/><br></br>
        <label>Email</label><br></br>
        <input type='email' name="email" value={formData.email} onChange={handleChange} required/><br></br>
        <label>Password</label><br></br>
        <input type='password' name="password" value={formData.password} onChange={handleChange} required/><br></br>
        <button>Login</button>
        </div>
      </form>

    </div>
  )
}
