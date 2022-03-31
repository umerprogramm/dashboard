import React from 'react'
import "./sidebar.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import { NavLink } from 'react-router-dom';
import { Lock } from '@mui/icons-material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';



export default function Sidebar() {
  return (
    <div className='sidebar'>


      <ul>
    <NavLink exact to='/' className='Link' activeClassName='active-link'><li><ManageAccountsIcon /></li>Manager orders</NavLink>
      <NavLink to='/products' className='Link' activeClassName='active-link'><li><AddShoppingCartIcon /></li>Add product</NavLink>
       <NavLink to='/reviews' className='Link' activeClassName='active-link'><li><ThumbUpOutlinedIcon /></li>Customer reviews </NavLink>
       <NavLink to='/manage_products' className='Link' activeClassName='active-link'><li><TimelineOutlinedIcon /></li>Manage Products</NavLink>
     <NavLink to='/reset' className='Link' activeClassName='active-link'><li><Lock/></li>Reset passward </NavLink>

      </ul>


    </div>
  )
}
