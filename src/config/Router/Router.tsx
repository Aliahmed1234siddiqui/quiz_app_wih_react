import React, { useState } from 'react'
import { BrowserRouter as Routers , Routes ,Route } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Protected from '../pages/Protected'
import Admin from '../pages/Admin'
import Main from '../pages/Main'
import { useScrollTrigger } from '@mui/material'
export default function Router() {
  
  const [user , SetUser] = useState<{email:string , uid :string}>({email:"" , uid:""});
  
  return (



    <div>
      <Routers>
        <Routes>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Login/>}></Route>
            <Route path='/' element={<Protected setUser={SetUser} Screen={user.email == "ali@gmail.com"? Admin: Main }/>}></Route>
            <Route path='admin' element={<Admin/>}></Route>


        </Routes>
      </Routers>


    </div>
  )
}