import React,{useState,useEffect} from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'
import './products.css'
import * as Realm from 'realm-web'
import Cards from './Cards'

export default function All_products() {
  const [state, setstate] = useState([])

  useEffect(  () => {
    async function  FetchData(){
      const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const product = await user.functions.GetMenu()
        setstate(product)
      } catch(err) {
        console.error("Failed to log in", err);
      }
     
    }
   FetchData()
   }, []);
 return( 
   <>
  <Header/>    
      <Sidebar/>
      <div className='Manage_products'>
      <Link to='/stagging' className='Link'><span1>Stagging</span1> </Link>
          <span className='not_link'>All products</span> 
      <Link className='Link' to='/derlivered'><span1>Derlivered</span1> </Link>
      </div>

      <div className='all_products'>

      {
        
        state.map( (value) =>{
          
          return(
    <Cards
    key={value._id}
    name = {value.product_name}
    url = {value.Url}
    product_id = {value.product_id}
    
    

    />
  )
})
}
</div>

  </>
  )
}
