import React from 'react'
import "./header.css"
export default function Header() {
     
    
  const Logout = ()=>{
     
  
     
    localStorage.removeItem("username");
    localStorage.removeItem("passward");
    window.location.reload();

  } 
  return (
    <>
    <div className='header'>
        <h2>Dashboard</h2>
        <span onClick={Logout}>Log out</span>
        </div>
      
        </>
  )
}
