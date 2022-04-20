import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import * as Realm from 'realm-web'
import Cards from './cards'
import './derlivered.css'

export default function Derlivered() {
  const [state, setstate] = useState([])
  useEffect(  () => {
    async function  FetchData(){
      const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const product = await user.functions.GetDelivered()
        setstate(product)
      } catch(err) {
        console.error("Failed to log in", err);
      } 
    }
   FetchData()
   }, []);
  return (
    <>
    <Header/>    
    <Sidebar/>
    <div className='Manage_products'>
    <Link to='/stagging' className='Link'><span1>Stagging</span1> </Link>
    <Link  className='Link'  to='/all_products'> <span1>All products</span1> </Link>

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
