import React, { useEffect, useState } from 'react'
import { fbGet } from '../Router/firebaseMethod';
import { Quiz } from '@mui/icons-material';

export default function Main() {
    const [ques , SetQues] = useState<any>([]);
    const [quiz , SetQuiz] = useState<any>([]);
    
    const [currentQ , SetCurrentQ] = useState<number>(0) 
    const [score , SetScore] = useState<any>(0) 

    let getQues = ()=>{
        fbGet("quiz").then(res=>{
SetQuiz(res)
        }).catch(err=>{
            console.log(err);
        })
    fbGet("question").then((res)=>{
        SetQues(res);
    }).catch(err=>{
        console.log(err);
    })
    }
    let next= (selected:any)=>{
questionChange();
if(selected === ques[currentQ].correctQues){
    SetScore(score + 1)
    console.log(score)
}
    }
    let questionChange = ()=>{
if(currentQ < ques.length-1){
SetCurrentQ(currentQ+1)
}else{
    alert("your score is" + score)
}
    }

    useEffect(()=>{getQues()} , [])
return  (
<>
 <div className="app">
    <div className="main1 text-center p-5">
        <h1 className='bg-dark text-white text-center py-2'>{quiz.quizName} QUIZ</h1>
<h2>Q {currentQ+1}/{ques.length}</h2>
<p>{ques[currentQ].question}</p>
<div className="row d-flex justify-content-center m-3 ">
    <div onClick={()=>{next(ques[currentQ].option)}} className="btn btn-primary col-md-5 col-sm-10 m-2 ">{ques[currentQ].option}</div>
    <div onClick={()=>{next(ques[currentQ].option2)}}  className="btn btn-primary col-md-5 col-sm-10 m-2">{ques[currentQ].option2}</div>
    <div onClick={()=>{next(ques[currentQ].option3)}}  className="btn btn-primary col-md-5 col-sm-10 m-2">{ques[currentQ].option3}</div>
    <div onClick={()=>{next(ques[currentQ].option4)}}  className=" btn btn-primary col-md-5 col-sm-10 m-2">{ques[currentQ].option4}</div>

</div> 
    </div>

</div>

</>



    );
}



