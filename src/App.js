import { useSelector } from 'react-redux';
import './App.css';
import Login from './login/Login';
import Main from './main/Main';



function App() {
const name = useSelector((state)=>state.ChangeState.name)
console.log(name)
 
  return (
   <>
   {
    name === 'ummigamez@gmail.com'?<Main/>:
   <Login/>
   }
   </>


  );
}

export default App;
