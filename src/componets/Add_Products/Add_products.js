import React,{useState, useEffect} from 'react'
import  Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './products.css'
import { storage } from "../firebase/Firebase";
import * as Realm from 'realm-web'


export default function Add_products() {

  
   const [image ,setImage] = useState('')
   const [product_name , setproduct_name] = useState('') 
   const [price , setprice] = useState(0) 
   const [description , setdescription] = useState('') 


  const sendData = async ()=>{
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(async (url) => {
          
            const product_id = Math.floor(Math.random() * 10000)
            const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
            const credentials = Realm.Credentials.anonymous();
            try {
              const user = await app.logIn(credentials);
              const product = await user.functions.SendOrder(product_name, price , description ,product_id ,url )
              console.log(product)
            } catch(err) {
              console.error("Failed to log in", err);
            }
            
          });
          
      }
    );
    setproduct_name('')
    setprice(0)
    setdescription('')
    setImage('')
 
  }
  return (
<>
    <Header/>    
      <Sidebar/>
    
      <div className='Products'>
      <input 
      value={product_name}

      onChange={(e)=>setproduct_name(e.target.value)}

      placeholder='Enter your Products Name'/>

    <input type='number' 
      value={price}
      onChange={(e)=>setprice(e.target.value)}

    placeholder='Enter the product Price £'/>

    <input  type='file' id='file'accept="image/*"  onChange={(e)=> setImage(e.target.files[0])}/>

    <input 
     value={description}
     onChange={(e)=>setdescription( e.target.value )}
    className='description'placeholder="Enter the brief description"/>

    <span onClick={sendData}>Add product</span>

      </div>
      </>  
  )
}
