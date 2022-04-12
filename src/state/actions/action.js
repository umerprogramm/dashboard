
export const LogIn = (info)=>{
 

   return{
    type : "Login",
    username : info.username,
    Password : info.Password

}

}

export const LogOut = (state)=>{
 

    return{
     type : "logout",
     state : state
 }
 
 }
 
 
 



