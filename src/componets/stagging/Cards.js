import React,{useState} from 'react'
import { DeleteOutline } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check';



export default function Cards(value) {

  const [state ,setstate] = useState(null) 
  const  send_data = async ()=>{

    setstate(value.order_num)
    let  name = value.Customer
    let Meal = value.Meal
    let order_num = value.order_num
    let drink = value.drink
    const Data = {
      name,
      Meal,
      order_num,
      drink 
    }

    const rawResponse = await fetch('http://localhost:5000/get_stagging_request', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    });

  
  }


  const DeleteData = async ()=>{
    setstate(value.order_num)

    const Data = {
      order_num : value.order_num
    }
     await fetch('http://localhost:5000/delete_stagging', {
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
        <li className="options"><DeleteOutline onClick={DeleteData}/><CheckIcon onClick={send_data}/> </li>
      </ul>:
      <ul>
      <li>Name : {value.Customer}</li>
      <li>Order_Number : {value.order_num} </li>
      <li>Order : {value.Meal} </li>
      <li>Cold Drink : {value.drink} </li>
      <li className="options"><DeleteOutline onClick={DeleteData}/><CheckIcon onClick={send_data}/> </li>
    </ul>

}
      </>


  )
}
