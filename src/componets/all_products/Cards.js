import { DeleteOutline } from '@mui/icons-material'
import React,{useState} from 'react'

export default function Cards(props) {
  const [state ,setstate] = useState(null) 

  const DeleteData = async ()=>{
    setstate(props.product_id)

    const Data = {
      product_id : props.product_id
    }
     await fetch('http://localhost:5000/all_product_delete', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    });
  }
  return (
 
    <div className='Cards'>
 {
      props.product_id===state ?

      <div className='card_child' style={{display : 'none'}}>
        <img src={props.url} alt='This is an image'/>
        <h4>{props.name}</h4>
       <span> <DeleteOutline onClick={DeleteData}/> </span>
  
      </div>:
        <div className='card_child'>
        <img src={props.url}/>
        <h4>{props.name}</h4>
       <span> <DeleteOutline onClick={DeleteData}/> </span>
  
      </div>

 }
    </div>
  
  )
}
