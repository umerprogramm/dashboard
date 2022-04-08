import React from 'react'
import { useDispatch } from 'react-redux'
import { LogOut } from '../../state/actions/action'
import "./header.css"
export default function Header() {
     
     const Dispatch = useDispatch()
    
  const Logout = ()=>{
     
     {Dispatch(LogOut("logOut"))}
     
    localStorage.removeItem("username");
    localStorage.removeItem("passward");
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
