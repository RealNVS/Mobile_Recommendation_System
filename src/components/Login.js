import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'


export default function Login() {
    const data=useContext(AuthContext)
    const [formData,setFormData]=useState({email:"",password:""})
    const navigate=useNavigate()
    const [users,setUsers]=useState([])
    const [message,setMessage] = useState("")
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData(prev=>({...prev,[name]:value}))
    }
        useEffect(()=>{
            axios.get("http://localhost:4000/products")
            .then(res=>setUsers(res.data))
            .catch(err=>console.log(err))
        
        },[])

        const handleSubmit=(e)=>{
            e.preventDefault()
            const found=users.find(x=>x.email===formData.email && x.password === formData.password)
            if(found){
                setMessage("Logged in Successfully")
                data.login({ name: found.name, email: found.email });

                navigate("/")
            }
            else{
                setMessage("Invalid Username or Password... Try again") 
            }
        }

    return (
    <div>
      
    <form className='login' onSubmit={handleSubmit}>
        <div className='login-form' >
        <label>Email</label><br></br>
        <input type='email' name="email" value={formData.email} onChange={handleChange} required/><br></br>
        <label>Password</label><br></br>
        <input type='password' name="password" value={formData.password} onChange={handleChange} required/><br></br>
        <button>Login</button>
        {message && <h2 style={{ color: message.includes("Invalid") ? "aqua" : "lime", marginTop: "10px" }}>{message}</h2>}
        </div>
    </form>
    </div>
  )
}
