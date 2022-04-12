import { useSelector } from 'react-redux';
import {useState , useEffect} from 'react'
import './App.css';
import Login from './login/Login';
import Main from './main/Main';
import * as Realm from 'realm-web'



function App() {
const name = useSelector((state)=>state.ChangeState.name)
const state1 = useSelector((state)=>state.ChangeLogoutState.state)
const [state ,setstate] = useState('')
useEffect(() => {
  const GetData = async ()=>{

    const app = new Realm.App({ id: "triggers_realmapp-xjcdc" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const product = await user.functions.GetLoginDetails()
      setstate(product[0].username)
    } catch(err) {
      console.error("Failed to log in", err);
    }
     


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
