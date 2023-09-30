import React, { useState } from 'react'
import { TextField , Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { fbSignUp} from '../Router/firebaseMethod'
type useModel = {
  userName:string,
  email: string,
  password: string,
}




export default function Signup() {
    const[model , setModel] = useState<useModel>({
      userName:"",
        email:"",
        password:"",
      })
      
      
const navigate = useNavigate();      

let signup= ()=>{
        
      fbSignUp(model).then((res)=>{
navigate('../Login');
      }).catch(err=>{
        alert(err);
      })
  }
      
  return (
    <div>
      <div className="app" >
   <div className="main   mx-auto  "  >
   <h1 className='text-white bg-black py-2 text-center'>SIGN UP</h1>

   <div className="sub text-center">
   <TextField className="m-3" onChange={(e)=>{setModel({ ...model , userName:e.target.value,})}} label="USERNAME" type='text'  variant='standard' ></TextField>

<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>

      <br />  <Button variant="contained" onClick={signup}>SIGNUP</Button>

      <div>this user already used ! <button onClick={()=>{
        navigate('../Login');
      }}>login </button> </div>
        </div>

   </div>
    </div>
    </div>
  )
}
