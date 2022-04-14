import React,{useState} from 'react'
import { DeleteOutline } from '@mui/icons-material'
import * as Realm from 'realm-web'


export default function Cards(value) {
  const [state ,setstate] = useState(null) 

  const DeleteData = async ()=>{
    setstate(value.order_num)

    const  order_num = value.order_num
    
    const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const product = await user.functions.DeleteDelivered(order_num)
      console.log(product)
    } catch(err) {
      console.error("Failed to log in", err);
    } 


   

  }
  return (
  <>
  {
 value.order_num===state ?
 <ul  style={{display : 'none'}} >
        <li>Name : {value.Customer}</li>
        <li>Order_Number : {value.order_num} </li>
        <li>Order : {value.Meal} </li>
        <li>Cold Drink : {value.drink} </li>
        <li className="options"><DeleteOutline onClick={DeleteData}/></li>
      </ul>:
      <ul>
      <li>Name : {value.Customer}</li>
      <li>Order_Number : {value.order_num} </li>
      <li>Order : {value.Meal} </li>
      <li>Cold Drink : {value.drink} </li>
      <li className="options"><DeleteOutline onClick={DeleteData}/></li>
    </ul>

}
  
  </>
  )
}
