import React from 'react'
import Login from '../../login/Login';
import "./header.css"

export default function Header() {
  const LogOut = ()=>{
    localStorage.removeItem("passward");
    return(
      <Login/>
    )
  } 
  return (
    <>
    <div className='header'>
        <h2>Dashboard</h2>
        <span onClick={LogOut}>Log out</span>
        </div>
      
        </>
  )
}
