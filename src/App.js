import { useSelector } from 'react-redux';
import './App.css';
import Login from './login/Login';
import Main from './main/Main';



function App() {
const Username = useSelector((state)=>state.ChangeState.name)




return(

  <>

  {
    Username  === "login" ||  localStorage.getItem("username")?<Main/>:
    <Login/>
    
  }
  
  </>
) 


 


}

export default App;
