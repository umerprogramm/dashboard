import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import  './stagging.css'
import Cards from './Cards'

export default function Stagging() {
  const [state, setstate] = useState([])
  useEffect(  () => {
    async function  FetchData(){
      const response = await fetch('http://localhost:5000/send_to_stagging');
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
      <span className='not_link'   to='/stagging'>Stagging</span>
      <Link className='Link' to='/all_products' > <span>All products</span> </Link>
      <Link className='Link' to='/derlivered'><span>Derlivered</span> </Link>

      </div>
      <div className='Stagging'>
      {
        
        state.map( (value) =>{
          
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
