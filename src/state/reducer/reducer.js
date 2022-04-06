
const InitValues = {
    name : 'hello',
    passward : 'undefined',
    local_name : 'hi',
    local_pass : 'pass'
}
let name
export const ChangeState =   (state=InitValues,action )=>{


  if(action.type === "Login"){

  
     
        return { name : state.name =  action.username }
       
 
    
  }else{
      return{

          name : state.name,
          passward : state.passward ,
          local_name : state.local_name ,
          local_pass : state.local_pass
      }
  }
    

}   











 