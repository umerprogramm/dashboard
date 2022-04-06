import React,{useState} from 'react'
import  Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './products.css'
import { storage } from "../firebase/Firebase";


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
          .then(url => {
            const Data = {
              url,
              product_name,
              price,
              description
            
            }
             fetch('http://localhost:5000/add_products', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(Data)
            });
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
