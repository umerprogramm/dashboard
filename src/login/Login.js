import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LogIn } from '../state/actions/action'
import './login.css'
import * as Realm from 'realm-web'


export default function Login() {

  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')
  const [disbaled , setDisbaled] = useState(false)
  const Dispatch = useDispatch()

 const Login =  async ()=>{

  setDisbaled(true)
  const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
  const credentials = Realm.Credentials.anonymous();
  try {
    const User = await app.logIn(credentials);
    const product = await User.functions.GetLoginDetails()
    if(user === '' || pass === ''){
      alert("please fill the flied")
      setDisbaled(false)
    }else if(user === product[0].username &&  pass === product[0].passward ){
      
      Dispatch(LogIn({user : "login" }))
     localStorage.setItem("username" , product[0].username )   
     localStorage.setItem("password" , product[0].passward )  
   }else{
     alert("you entered wrong password or username")
     setDisbaled(false)
   }
  
  } catch(err) {
    console.error("Failed to log in", err);
    setDisbaled(false)
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
        <button onClick={Login} disabled={disbaled}>{disbaled ? "loading...":"sumbit"}</button>
      </div>
 
    </div>
    

    </>
  )
    
}
