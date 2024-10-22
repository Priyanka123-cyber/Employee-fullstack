import { Button,  TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const[user,Setuser]=useState({username:'',password:''})
    const navigate=useNavigate();
    let updateUser=(event)=>{
        Setuser({...user,[event.target.name]:event.target.value})
    }
    let sendData=(event)=>{
        if((user.username=="admin")&&(user.password=="1234")){
            localStorage.setItem("username","admin")
            navigate('/home')
        }
        else{
            alert("Invalid Credentials")
        }
    }   

  return (
    <div >
        
        <Typography variant='h4' >Login</Typography><br />
        <TextField id="outlined-basic" label="Username" name="username" value={user.username} variant="outlined" onChange={updateUser} /><br /><br />
        <TextField id="outlined-basic" label="Password" name="password" value={user.password} variant="outlined" onChange={updateUser} /><br /><br />
        <Button size="large" onClick={sendData} variant="contained">Login</Button>
       
       
    </div>
  )
}

export default Login