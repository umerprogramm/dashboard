import React from 'react'
import "./sidebar.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import { NavLink } from 'react-router-dom';
import { Lock } from '@mui/icons-material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';



export default function Sidebar() {
  return (
    <div className='sidebar'>


      <ul>
    <NavLink exact to='/' className='Link' activeClassName='active-link'><li><ManageAccountsIcon /></li></NavLink>
      <NavLink to='/products' className='Link' activeClassName='active-link'><li><AddShoppingCartIcon /></li></NavLink>
       <NavLink to='/manage_products' className='Link' activeClassName='active-link'><li><TimelineOutlinedIcon /></li></NavLink>
     <NavLink to='/reset' className='EndLink' activeClassName='active-link'><span><Lock/></span></NavLink>

      </ul>


    </div>
  )
}
