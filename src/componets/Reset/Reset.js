import React,{useState} from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './reset.css'
import * as Realm from "realm-web"

export default function Reset() {
  const [oldOnchangePassward, setOldOnchangePassward] = useState('')
  const [setoldPassward, set_OldOnchangePassward] = useState('')
  const [resetPassward, OnchangeResetPassward] = useState('')
  const [setResetPassward, set_ResetPassward] = useState('')
  const [ConfirmPassward, setConfrimPassward] =useState('')
  const [setConfirmPassward, set_ConfrimPassward] =useState('')



  const Reset = async ()=>{
    setOldOnchangePassward('')
    OnchangeResetPassward('')
    setConfrimPassward('')
    set_ResetPassward(resetPassward)
    set_OldOnchangePassward(oldOnchangePassward)
    set_ConfrimPassward(ConfirmPassward)
    if(localStorage.getItem('password') !== oldOnchangePassward ){
      alert('you old passward is wrong')
    }else{
      localStorage.setItem('password',resetPassward)
      const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const product = await user.functions.upadatePass(oldOnchangePassward ,resetPassward )
      } catch(err) {
        console.error("Failed to log in", err);
      }
  
    }
  }
  return (
    <>
      <Header/>    
      <Sidebar/>
      <div className='reset'>
      
    <input placeholder='Enter your old passward'
      value={oldOnchangePassward}
      onChange={e=>setOldOnchangePassward(e.target.value)}
    />
    <input placeholder='Enter your new passward'
      value={resetPassward}
      onChange={e=>{OnchangeResetPassward(e.target.value)}}
    />
    <input placeholder='Confirm passward passward'
      value={ConfirmPassward}
      onChange={e=>setConfrimPassward(e.target.value)}  
       

    />
    <span onClick={Reset}>Reset</span>
      </div>
    </>
  )
}
