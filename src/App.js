import { useSelector } from 'react-redux';
import {useState , useEffect} from 'react'
import './App.css';
import Login from './login/Login';
import Main from './main/Main';



function App() {
const name = useSelector((state)=>state.ChangeState.name)
const state1 = useSelector((state)=>state.ChangeLogoutState.state)
console.log(state1)
const [state ,setstate] = useState('')
useEffect(() => {
  const GetData = async ()=>{

    let response = await fetch('http://localhost:5000/hello')
     let data = await response.json()
     let username = data[0].username
     setstate(username)


}

GetData()
 
}, []);

return(

  <>
  {
    name === state ||  localStorage.getItem("username")||state1 !=='logOut' ?<Main/>:
    <Login/> 
  }
  
  </>
) 


 


}

export default App;
