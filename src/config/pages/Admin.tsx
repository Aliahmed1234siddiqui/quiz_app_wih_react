import React from 'react'
import {useState} from 'react'
import '../../App.css'
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fbAdd, fbAdd2, fbGet, fbLogin, fbLogout } from '../Router/firebaseMethod';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { Co2Sharp } from '@mui/icons-material';
import { push } from 'firebase/database';

export default function Admin() {
const [allQuiz , SetAllQuiz] = useState({})
const[questions , SetQuestions] = useState<any>([]) 
let [question , setQuestion] = useState<any>();
let [Quiz , SetQuiz] = useState<any>({});
const [Lock , SetLock] = useState<boolean>(false);

let addQ = ()=>{
questions.push(question)  
}

let save= ()=>{
  console.log(Quiz)
  Quiz.allQuestion = questions
  fbAdd2(Quiz).then(res=>{
    console.log("data sent successfully");
  }).catch(err=>{
console.log(err);
  })
}
  let navigate = useNavigate()
  return (
    <>
    <div className="main">
        <div className="row">
        
        <div className="right col-sm-12 col-12 bg-light">
            <div className="work1 row">
            <div className='text-danger fs-1 fw-bold col-md-6'>QUIZ APP ADMIN</div>
            
<div  className='col-md-6 text-end col-12'>
<button  onClick={save} className='btn btn-danger h-80 m-2'>save</button>
<button onClick={()=>{
  fbLogout().then(res=>{
navigate('/login')
  }).catch(err=>{
    console.log(err)
  })
}} className='btn btn-danger h-80 m-2'>LOGOUT</button>
</div>
            
            
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
            <button onClick={()=>{SetLock(!Lock)}} className='btn btn-danger h-100 col-md-3 col-sm-3 m-5'>{Lock?"UNLOCK":"LOCK"}</button>

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