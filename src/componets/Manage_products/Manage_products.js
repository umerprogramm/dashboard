import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './manage_products.css'
import { NavLink } from 'react-router-dom';




export default function Manage_products() {
  return (
    <>
    <Header/>    
      <Sidebar/>
      <div className='Manage_products'>
     <NavLink className='Link'   to='/stagging'> <span>Stagging</span> </NavLink>
     <NavLink  className='Link'  to='/all_products'> <span>All products</span> </NavLink>
     <NavLink  className='Link'  to='/derlivered'> <span>Derlivered</span> </NavLink>

      </div>
     <h1>Wellcome to  Manage products 👋</h1>
  

      </>
  )
}
