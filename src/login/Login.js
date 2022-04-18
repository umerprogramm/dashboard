import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LogIn } from '../state/actions/action'
import './login.css'
import * as Realm from 'realm-web'


export default function Login() {

  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')
  const Dispatch = useDispatch()

 const Login =  async ()=>{

  
  const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
  const credentials = Realm.Credentials.anonymous();
  try {
    const User = await app.logIn(credentials);
    const product = await User.functions.GetLoginDetails()
    if(user === '' || pass === ''){
      alert("please fill the flied")
    }else if(user === product[0].username &&  pass === product[0].passward ){
      Dispatch(LogIn({user : "login" }))
     localStorage.setItem("username" , product[0].username )   
   }else{
     alert("you entered wrong password or username")
   }
    // product[0].passward
  
  } catch(err) {
    console.error("Failed to log in", err);
  }

     console.log(user)
     console.log(pass)
   


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
