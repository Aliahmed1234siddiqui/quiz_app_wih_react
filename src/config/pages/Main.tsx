import React, { useEffect, useState } from 'react';
import { fbGet } from '../Router/firebaseMethod';
import { Quiz } from '@mui/icons-material';
import '../../App.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function Main() {
  const [key, setKey] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {}, []);

  let getData = () => {
    setKey(true);
    fbGet('quiz')
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });

  };

  let next = (selectedAnswer: any) => {
    changeQ();
    if (selectedAnswer === data.allQuestion[currentQ].correctQues) {
      setScore(score + 1);
    }
  };

  let changeQ = () => {
    if (currentQ === data.allQuestion.length - 1) {
      alert('Your score is ' + score);
      setKey(false);
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  return key ? (
    <>
      <div className="app">
        <div className="main1 p-5">
          <h1 className='bg-black text-white py-2 text-center'>{data.quizName} QUIZ</h1>
          <h1>
            Q {currentQ + 1} / {data.allQuestion.length}
          </h1>
          <p>{data.allQuestion[currentQ].question}</p>
          <div className="row d-flex justify-content-center">
            <div
              onClick={() => {
                next(data.allQuestion[currentQ].option);
              }}
              className="btn btn-primary col-md-5 col-sm-12 m-2"
            >
              {data.allQuestion[currentQ].option}
            </div>
            <div
              onClick={() => {
                next(data.allQuestion[currentQ].option2);
              }}
              className="btn btn-primary col-md-5 col-sm-12 m-2"
            >
              {data.allQuestion[currentQ].option2}
            </div>
            <div
              onClick={() => {
                next(data.allQuestion[currentQ].option3);
              }}
              className="btn btn-primary col-md-5 col-sm-12 m-2"
            >
              {data.allQuestion[currentQ].option3}
            </div>
            <div
              onClick={() => {
                next(data.allQuestion[currentQ].option4);
              }}
              className="btn btn-primary col-md-5 col-sm-12 m-2"
            >
              {data.allQuestion[currentQ].option4}
            </div>
          </div> 
        </div>
      </div> 
    </>
  ) : (
    <>
      <div className="screen row w-100">
        <div className="col-md-3 bg-dark  p-5">
          <button className="btn btn-danger" onClick={getData}>
            Computer Quiz
          </button>
        </div>
        <div className="end col-md-9 p-5">
          <div className="div">
            <h1 className="fw-bold text-center">
              WELCOME TO QUIZ ! <br />{' '}
              <span className="fs-5 fw-bold">
                Choose your subject and start the quiz
              </span>
            </h1>
            <ArrowCircleLeftIcon className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
}
