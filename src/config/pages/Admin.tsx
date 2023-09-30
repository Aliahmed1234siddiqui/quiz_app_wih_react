import React from 'react'
import {useState} from 'react'
import '../../App.css'
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fbAdd, fbAdd2, fbGet } from '../Router/firebaseMethod';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { Co2Sharp } from '@mui/icons-material';

export default function Admin() {

let [question , setQuestion] = useState<any>({});
let [Quiz , SetQuiz] = useState<any>({


});
const [Lock , SetLock] = useState<boolean>(false);
let addQ = ()=>{

  fbAdd(question).then((res)=>{
    console.log("data sent successfully ");
  }).catch(err=>{
    console.log(err)
  })


}
let save= ()=>{
  fbAdd2(Quiz).then(res=>{
    console.log("data sent successfully");
  }).catch(err=>{
console.log(err);
  })
  console.log({...question});
console.log(Quiz);

}
  let navigate = useNavigate()
  return (
    <>
    <div className="main">
        <div className="row">
        <div className="left col-md-2 bg-dark">
            <div className="cricle">

            </div>
            <button className='btn btn-danger m-3 w-50 '> HTML</button>
            <button className='btn btn-danger m-3 w-50'> CSS</button>
            <button className='btn btn-danger m-3 w-50'> JS</button>
            <button className='btn btn-danger m-3 mb-5 w-50'> REACT JS</button>

            <div className="logout mt-5">
            <button onClick={()=>{
navigate('../login')
            }} className='btn btn-danger  w-100'> LOGOUT</button>
</div>

        </div>
        <div className="right col-md-10 bg-light">
            <div className="work1">
            <div className='text-danger fs-1 fw-bold'>QUIZ APP ADMIN</div>
            <div onClick={save} className='btn btn-danger h-100 '>SAVE</div>
            
            
            </div>
            <div className="row hello">
            <TextField disabled={Lock}  variant='standard' onChange={(e)=>{
            
SetQuiz({...Quiz , quizName:e.target.value})
            }} className='col-md-3  px-3 m-3' label="QUIZ NAME"/>
            <TextField disabled={Lock} onChange={(e)=>{
SetQuiz({...Quiz , quizDuration:e.target.value})
            }} variant='standard' className='col-md-3  px-3 m-3' label="QUIZ DURATION"/>
            <TextField disabled={Lock} onChange={(e)=>{
SetQuiz({...Quiz , sKey:e.target.value})
            }}  variant='standard' className='col-md-3  px-3 m-3' label="SECRET KEY"/>
            <TextField disabled={Lock} onChange={(e)=>{
SetQuiz({...Quiz , description:e.target.value})
            }} variant='standard' className='col-md-7  px-3 m-3' label="DESCRIPION"/>
            <button onClick={()=>{SetLock(true)}} className='btn btn-danger h-100 col-md-3 col-sm-3 m-5'>{Lock?"UNLOCK":"LOCK"}</button>

            </div>

<div className="row hello m-3">
     
    <TextField disabled={!Lock} onChange={(e)=>{
      {setQuestion({...question ,question:e.target.value})}
    }} variant='standard' className="col-md-12 m-4" label="QUESTION"/>
    <TextField disabled={!Lock} onChange={(e)=>{
      {setQuestion({...question ,option:e.target.value})}
    }} variant='standard' className="col-md-5 col-sm-12 m-3" label="OPTION1"/>
    <TextField disabled={!Lock} onChange={(e)=>{
      {setQuestion({...question ,option2:e.target.value})}
    }} variant='standard' className="col-md-5 col-sm-12 m-3" label="OPTION2"/>
    <TextField disabled={!Lock} onChange={(e)=>{
      {setQuestion({...question ,option3:e.target.value})}
    }} variant='standard' className="col-md-5 col-sm-12 m-3" label="OPTION3"/>
    <TextField disabled={!Lock} onChange={(e)=>{
      {setQuestion({...question ,option4:e.target.value})}
    }} variant='standard' className="col-md-5 col-sm-12 m-3" label="OPTION4"/>
    <TextField disabled={!Lock} onChange={(e)=>{
      {setQuestion({...question ,correctQues:e.target.value})}
    }} variant='standard' className="col-md-5 col-sm-12 m-3" label="CURRECTQUESTION"/>

   <button onClick={addQ} className='btn btn-danger'>ADD QUESTION</button>


    
</div>

        </div>
        </div>
    </div>
    </>
  )
}