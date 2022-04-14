import React,{useState,useEffect} from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Table from './Table';
import * as Realm from 'realm-web'


export default function Manager_order() {
  const [state, setstate] = useState([])
  useEffect(  () => {
    async function  FetchData(){
      const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const product = await user.functions.GetOrders()
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



{

state.map( value =>{

  return(
    <Table
    key={value._id}
    Meal={value.product_name}
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
