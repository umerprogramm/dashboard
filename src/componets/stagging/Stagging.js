import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import  './stagging.css'
import * as Realm from 'realm-web'
import Cards from './Cards'

export default function Stagging() {
  const [state, setstate] = useState([])
  useEffect(  () => {
    async function  FetchData(){
      const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const product = await user.functions.GetStagging()
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
      <span className='not_link'   to='/stagging'>Stagging</span>
      <Link className='Link' to='/all_products' > <span1>All products</span1> </Link>
      <Link className='Link' to='/derlivered'><span1>Derlivered</span1> </Link>

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
