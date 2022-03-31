import React,{useState} from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './reset.css'

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
    if(localStorage.getItem('passward') !== oldOnchangePassward ){
      alert('you old passward is wrong')
    }else{
      localStorage.setItem('passward',resetPassward)
    const rawResponse = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ passward: resetPassward , oldPassward : oldOnchangePassward })
    })
  
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
