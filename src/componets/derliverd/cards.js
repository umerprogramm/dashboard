import React,{useState} from 'react'
import { DeleteOutline } from '@mui/icons-material'

export default function Cards(value) {
  const [state ,setstate] = useState(null) 

  const DeleteData = async ()=>{
    setstate(value.order_num)

    const Data = {
      order_num : value.order_num
    }
     await fetch('http://localhost:5000/Delete_Derlivery_Data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    });


   

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
