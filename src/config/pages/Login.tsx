import React, { useState } from 'react'
import { TextField , Button} from '@mui/material'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { fbLogin } from '../Router/firebaseMethod';

type useModel = {
  email: string,
  password: string,
  

}




export default function Login() {
    const[model , setModel] = useState<useModel>({
        email:"",
        password:"",
        
      })
      
      
 let navigate = useNavigate();  



      
    let login= ()=>{
            fbLogin(model).then((res)=>{
if(model.email == "ali@gmail.com"){
  navigate('/admin')
}else{
  navigate('/')
}
      })
     }
      
  return (
    <div>
      <div className="app" >
   
   
   <div className="main   mx-auto  "  >
   <h1 className='text-white bg-black py-2 text-center'>LOG IN</h1>
   <div className="sub text-center">
<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>

     
      <br />  <Button variant="contained" onClick={login}>LOGIN</Button>
      <div className='m-3'> this user is not found first signup ! <button onClick={()=>{
        navigate('../Signup');
      }}>Signup </button> 
      </div>
        </div>
        </div>

   </div>
    </div>
  
  )
}
