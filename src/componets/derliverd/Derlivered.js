import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Cards from './cards'
import './derlivered.css'

export default function Derlivered() {
  const [state, setstate] = useState([])
  useEffect(  () => {
    async function  FetchData(){
      const response = await fetch('http://localhost:5000/send_to_derlivery');
      const data = await response.json();
       setstate(data); 
    }
   FetchData()
   }, []);
  return (
    <>
    <Header/>    
    <Sidebar/>
    <div className='Manage_products'>
    <Link to='/stagging' className='Link'><span>Stagging</span> </Link>
    <Link  className='Link'  to='/all_products'> <span>All products</span> </Link>

    <span className='not_link'>Delivered</span>
    </div>
    <div className='Derlivered'>
    {

state.map( value =>{

  return(
    <Cards
    key={value._id}
    Meal={value.Meal}
    order_num={value.order_num}
    drink={value.drink} 
    Customer={value.name}
    />
  )
})
}
    
    </div>
    </>
  )
}
