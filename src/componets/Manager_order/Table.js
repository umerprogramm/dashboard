import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import './orders.css'
 

export default function Table(value) {

  const [state ,setstate] = useState(null) 

  
  const  send_data = async ()=>{
      setstate(value.order_num)
      alert('item sended')
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

      await fetch('http://localhost:5000/get_manage_request', {
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
      await fetch('http://localhost:5000/delete_tables', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data)
      });

    }
    return (
   
            <div className='Manage_orders'>
        
{
        
  value.order_num===state? 
            <table style={{display : 'none'}}>
        
            <tr>
              <th>Pizza</th>
              <th>Cold Drink</th>
              <th>order number</th>
              <th>customer Name</th>
              <th>Procseed</th>
        
            </tr>
        
          
             <tr>
               <td>{value.Meal}</td>
               <td>{value.drink}</td>
               <td>{value.order_num}</td>
               <td>{value.Customer}</td>
               <td id='procssed'><td id='Delete'><DeleteIcon onClick={DeleteData}/></td><td id='check'><CheckIcon onClick={send_data}/></td></td>
        
             </tr>
            
          
            
         
        </table>:   
        <table>
        
        <tr>
          <th>Pizza</th>
          <th>Cold Drink</th>
          <th>order number</th>
          <th>customer Name</th>
          <th>Procseed</th>
    
        </tr>
    
      
         <tr>
           <td>{value.Meal}</td>
           <td>{value.drink}</td>
           <td>{value.order_num}</td>
           <td>{value.Customer}</td>
           <td id='procssed'><td id='Delete'><DeleteIcon onClick={DeleteData}/></td><td id='check'><CheckIcon onClick={send_data}/></td></td>
    
         </tr>
        
      
        
     
    </table>

}
        
         
              </div>      
          )
}
