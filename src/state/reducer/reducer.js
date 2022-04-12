
const InitValues = {
    name : undefined,
    passward : undefined,
    local_name : 'hi',
    local_pass : 'pass',
 
}
export const ChangeState =   (state=InitValues,action )=>{


  if(action.type === "Login"){

  
     
        return { name : state.name =  action.username  }
       
 
    
  }else{
      return{

          name : state.name,
          passward : state.passward ,
          local_name : state.local_name ,
          local_pass : state.local_pass,
      }
  }
    

} 



export const ChangeLogoutState =   (state=InitValues,action )=>{


    if(action.type === "logout"){
  
    
       
          return { state : state.name =  action.state }
         
   
      
    }else{
        return{
  
            state : state.name,
        
        }
    }
      
  
  }  











 