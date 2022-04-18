import { DeleteOutline } from '@mui/icons-material'
import React,{useState} from 'react'
import * as Realm from 'realm-web'


export default function Cards(props) {
  const [state ,setstate] = useState(null) 

  const DeleteData = async ()=>{
    setstate(props.product_id)

    const product_id  = props.product_id
    
    const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const product = await user.functions.DeleteMenu(product_id)
      console.log(product)

    } catch(err) {
      console.error("Failed to log in", err);
    }
  }
  return (
 
    <div className='Cards'>
 {
      props.product_id === state ?

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
