import React,{useState,useEffect} from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Table from './Table';

export default function Manager_order() {
  const [state, setstate] = useState([])
  useEffect(  () => {
    async function  FetchData(){
      const response = await fetch('http://localhost:5000/manage_orders');
      const data = await response.json();
       setstate(data); 
    }
   FetchData()
   }, []);
  return (
<>
    <Header/>    
      <Sidebar/>



{

state.map( value =>{

  return(
    <Table
    key={value._id}
    Meal={value.Meal}
    order_num={value.order_num}
    drink={value.drink}
    Customer={value.name}
    />
  )
})
}


 
          
      </>
  )
}
