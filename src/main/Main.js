import React from 'react'
import Reset from '../componets//Reset/Reset';
import Manager_order from '../componets/Manager_order/Manager_order'
import Add_products from '../componets/Add_Products/Add_products'
import { Route ,Switch } from 'react-router-dom';
import Manage_products from '../componets/Manage_products/Manage_products';
import  Stagging from '../componets/stagging/Stagging';
import Derlivered from '../componets/derliverd/Derlivered';
import All_products from '../componets/all_products/All_products';






export default function Main() {

  return (
    <>
      <Switch>
 <Route path='/products' component={Add_products}/>
 <Route path='/reset' component={Reset}/>
 <Route path='/manage_products' component={Manage_products}/>
 <Route path='/stagging' component={Stagging}/>
 <Route exact path='/' component={Manager_order}/>
  <Route path='/derlivered' component={Derlivered}/>
  <Route path='/all_products' component={All_products}/>
 </Switch> 
  
    </>
  )
}
