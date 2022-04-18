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
   const [imageName ,setimageName] = useState('')
   const [stop ,setstop] = useState('')
   
   const GetAndCheckFile = async (e)=>{
    setImage(e.target.files[0])
    setimageName(e.target.files[0].name)
    const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const product = await user.functions.GetMenu()
      product.map(value =>{
        if(value.imageName ===  e.target.files[0].name ){
          setstop('stop')
          alert("please change your filename")
       
        }
      })
    } catch(err) {
      console.error("Failed to log in", err);
    }
   } 


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
            if(stop  === 'stop'){
              alert('your request is not sended please change your filename')
              console.log(image)
              window.location.reload();
            }else{
              try {
                const user = await app.logIn(credentials);
                const product = await user.functions.SendMenu(product_name, price , description ,product_id ,url , imageName  )
                console.log(product)
                window.location.reload();
                
             
              } catch(err) {
                console.error("Failed to log in", err);

              }
            }
            
            
          });
          
      }
    );

 
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

    <input  type='file' id='file'accept="image/*"  onChange={ GetAndCheckFile }/>

    <input 
     value={description}
     onChange={(e)=>setdescription( e.target.value )}
    className='description'placeholder="Enter the brief description"/>

    <span onClick={sendData}>Add product</span>

      </div>
      </>  
  )
}
