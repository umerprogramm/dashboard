import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LogIn } from '../state/actions/action'
import * as Realm from 'realm-web'
import './login.css'

export default function Login() {
  const Dispatch = useDispatch()
  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')

 const Login = async ()=>{

  const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
  const credentials = Realm.Credentials.anonymous();
  try {
    const user = await app.logIn(credentials);
    const data = await user.functions.GetLoginDetails()
    let username = data[0].username
    let passward = data[0].passward
    Dispatch(LogIn({username  , passward }))
     localStorage.setItem('username' , data[0].username)
     localStorage.setItem('passward' , data[0].passward)
     window.location.reload();
  } catch(err) {
    console.error("Failed to log in", err);
  }
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
