import React, { useState } from 'react'
import Main from '../main/Main'
import './login.css'

export default function Login() {

  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')
  const [username, setusername] = useState('')
  const [passward, setpassward] = useState('')
  const [SerUserName, setSerUserName] = useState('name')
  const [SerPass, setSerPass] = useState('pass')
 

  
  const LogIn = async () => {
    setusername(user)
    setpassward(pass)
    
    let response = await fetch('http://localhost:5000/hello')
    let data = await response.json()
    setSerUserName(data[0].username)
    setSerPass(data[0].passward)
    localStorage.setItem("username",data[0].username)
    localStorage.setItem("passward",data[0].passward)

   
  }
  
  return (
    <>
    {(username === SerUserName && passward === SerPass) || localStorage.getItem('passward') ?
    <Main/>:
    <div className='container'> 
    
      <div className='login'>
        <input
          value={user}
          onChange={e => { setuser(e.target.value) }}
          placeholder='Enter you username'/>
        <input
          value={pass}
          onChange={e => { setpass(e.target.value) }}
          type='password' placeholder='Enter your passward'/>
        <button onClick={LogIn}>sumbit</button>
      </div>
 
    </div>
    
}
    </>
  )
    
}
