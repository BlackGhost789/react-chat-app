import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = ({uname}) => {
  const [email, setEmail] = useState('')
  const [errorLogin , setErrorLogin] = useState('')
  const navigate = useNavigate()

  

  useEffect(()=>{
    if(Cookies.get('username')){
      navigate('/home')
    }
    
  },[ navigate])

  

  function submit(){
    uname(email)
    navigate('/home')
    
    
  }

  
  return (
    <div className='login-container'>
        <h2 className="title">Login</h2>
        
        <div className="login-container-form">
            <input type="text" placeholder='username' onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={submit}>login</button>
            {errorLogin}
        </div>
        <p>just enter a username plz <span><Link to='/signin' replace>Sign in</Link></span></p>
    </div>
  )
}

export default Login