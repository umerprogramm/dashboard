import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import './orders.css'
import * as Realm from 'realm-web'

 

export default function Table(value) {

  const [state ,setstate] = useState(null) 

  
  const  send_data = async ()=>{

      setstate(value.order_num)
      alert('item sended')
      let  name = value.Customer
      let Meal = value.Meal
      let order_num = value.order_num
      let drink = value.drink

      const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const product = await user.functions.SendToStagging(name , Meal ,order_num ,drink  )
     
        console.log(product)
      } catch(err) {
        console.error("Failed to log in", err);
      }
  
    }

    const DeleteData = async ()=>{
      setstate(value.order_num)

       const order_num = value.order_num
       const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
       const credentials = Realm.Credentials.anonymous();
       try {
         const user = await app.logIn(credentials);
         const product = await user.functions.DeleteManageOrder( order_num )
         console.log(product)
       } catch(err) {
         console.error("Failed to log in", err);
       }

    }
    return (
   
            <div className='Manage_orders'>
        
{
        
  value.order_num===state? 
            <table style={{display : 'none'}}>
        
            <tr>
              <th>Meal</th>
              <th>Drink</th>
              <th>quantity</th>
              <th>order number</th>
              <th>customer Name</th>
              <th>Procseed</th>
        
            </tr>
        
          
             <tr>
               <td>{value.Meal}</td>
               <td>{value.drink}</td>
               <td>1</td>
               <td>{value.order_num}</td>
               <td>{value.Customer}</td>
               <td id='procssed'><td id='Delete'><DeleteIcon onClick={DeleteData}/></td><td id='check'><CheckIcon onClick={send_data}/></td></td>
        
             </tr>
            
          
            
         
        </table>:   
        <table>
        
        <tr>
          <th>Meal</th>
        {  value.drink === undefined ? <th style={{display : 'none'}}>Drink</th> : <th>Drink</th> }
          <th>quantity</th>
          <th>order number</th>
          <th>customer Name</th>
          <th>Addreass</th>
          <th>Procseed</th>
    
        </tr>
    
      
         <tr>
           <td>{value.Meal}</td>
           {  value.drink === undefined ? <td style={{display : 'none'}}>{value.drink}</td> : <td>{value.drink}</td> }
           <td>1</td>
           <td>{value.order_num}</td>
           <td>{value.Customer}</td>
           <td>{value.addreass}</td>
           <td id='procssed'><td id='Delete'><DeleteIcon onClick={DeleteData}/></td><td id='check'><CheckIcon onClick={send_data}/></td></td>
    
         </tr>
        
      
        
     
    </table>

}
        
         
              </div>      
          )
}
