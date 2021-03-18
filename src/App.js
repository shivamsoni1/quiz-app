import React,{useState,useEffect} from 'react';
import { QuestionList } from './components';

const API_URL ='https://opentdb.com/api.php?amount=10&category=21';
function App() {
  const [questions,setQuestions]= useState([]);
  const [currentIndex,setCurrentIndex]= useState(0);
  const [correct,setCorrect] = useState(false);
  const [marks,setMarks]=useState(0);
  
  useEffect(() => {
    fetch(API_URL).
    then(res => res.json()).
    then((data) => 
    {
      
      const question = data.results.map(question=>({
        ...question,
        answers:[question.correct_answer, ...question.incorrect_answers].sort(()=>Math.random())
      }))
      setQuestions(question);
    });
    
  },[]);
  const nextQuestion = ()=>{
    setCorrect(false);
    
    setCurrentIndex(currentIndex +1);
  }
  const handleAnswer = (answer)=>{
    //var newIndex=currentIndex +1;
    //setCurrentIndex(newIndex);
    // check for correct answer
    if(!correct){
    if(answer===questions[currentIndex].correct_answer){
      setMarks(marks+1);
    }
  }
    setCorrect(true);
    // show next question
    
    //change score if correct
  };
  return questions.length>0 ? (
    currentIndex >= questions.length ? (
    <h1 className='bg-white text-3xl p-4 rounded-lg shadow-md'> Your score is {marks} </h1>
    ) :
    <div className="container">
      <QuestionList data={questions[currentIndex]} handleAnswer = {handleAnswer} setCorrect = {correct} nextQuestion= {nextQuestion}/> 
    </div>
  ) : (<h2>loading...</h2>);
}

export default App;
