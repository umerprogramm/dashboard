import React,{useState,useEffect} from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'
import './products.css'
import Cards from './Cards'

export default function All_products() {
  const [state, setstate] = useState([])

  useEffect(  () => {
    async function  FetchData(){
      const response = await fetch('http://localhost:5000/menu');
      const data = await response.json();
      setstate(data); 
    }
   FetchData()
   }, []);
 return( 
   <>
  <Header/>    
      <Sidebar/>
      <div className='Manage_products'>
      <Link to='/stagging' className='Link'><span>Stagging</span> </Link>
          <span className='not_link'>All products</span> 
      <Link className='Link' to='/derlivered'><span>Derlivered</span> </Link>
      </div>

      <div className='all_products'>

      {
        
        state.map( (value) =>{
          
          return(
    <Cards
    key={value._id}
    name = {value.product_name}
    url = {value.url}
    

    />
  )
})
}
</div>

  </>
  )
}
