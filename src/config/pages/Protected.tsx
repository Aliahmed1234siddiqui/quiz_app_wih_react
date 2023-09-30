import React, { useEffect, useState } from 'react'
import { fbAuth } from '../Router/firebaseMethod'
import { useNavigate } from 'react-router-dom'
import Login from '../pages/Login'
import Spinner from 'react-bootstrap/Spinner';
import '../Router/Router';

export default function Protected(props:any) {
    const {Screen , setUser} = props

    const [loader ,SetLoader ] =useState<any>(true)
    let navigate = useNavigate()
    let checkAuth = ()=>{
    SetLoader(true)
fbAuth().then((res:any) =>{
  console.log(res);
    SetLoader(false)
    if(setUser){
      setUser({email: res.email , uid : res.uid })
    }
}).catch(err=>{
    SetLoader(false)
    navigate('./login')
    console.log(err)
})
}
useEffect(()=>{checkAuth()},[])
  return loader ?   (
    <div className='ma d-flex justify-content-center'>
    <Spinner className='  text-white  p-5 m-5 fw-bold' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      ALI

    </Spinner>
    </div>
  ):(
    <>
    
    <Screen />

    </>
  )
}