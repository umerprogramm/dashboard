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
     <NavLink className='Link'   to='/stagging'> <span1>Stagging</span1> </NavLink>
     <NavLink  className='Link'  to='/all_products'> <span1>All products</span1> </NavLink>
     <NavLink  className='Link'  to='/derlivered'> <span1>Derlivered</span1> </NavLink>

      </div>
     <h1>Wellcome to  Manage products 👋</h1>
  

      </>
  )
}
