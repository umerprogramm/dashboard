import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LogIn } from '../state/actions/action'
import './login.css'

export default function Login() {
  const Dispatch = useDispatch()
  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')

 const Login = async ()=>{

     let response = await fetch('http://localhost:5000/hello')
      let data = await response.json()
      let username = data[0].username
      let passward = data[0].passward
       localStorage.setItem('username' , data[0].username)
       localStorage.setItem('passward' , data[0].passward)

  Dispatch(LogIn({username  , passward }))
 }

  
  
  
  return (
    <>
  
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
        <button onClick={Login}>sumbit</button>
      </div>
 
    </div>
    

    </>
  )
    
}
