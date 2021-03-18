import React from 'react'
import Button from './Button'
function QuestionList({data:{question,correct_answer,answers},handleAnswer,setCorrect,nextQuestion}) {

 const _add= 'bg-white p-4  font-semibold rounded shadow';
 return (
  
  <div className='flex flex-col'>
    <div className={`${_add} text-3xl m-auto p-8,4 mb-10 text-blue-800`}>Quiz-Start</div>
   <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md font-bold ">
        <h2 className="text-2xl" dangerouslySetInnerHTML={{__html:question}} />
        
      </div>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {answers.map( answer => (
          <button onClick={() => handleAnswer(answer)} className={!setCorrect ? ` ${_add}`:(answer===correct_answer)? `text-green-800 ${_add}`:`text-red-800 ${_add}`}>{answer}</button>
        ))}
      </div>
      {setCorrect && <button onClick={nextQuestion}className={`${_add} ml-auto mt-4  bg-purple-900`}>Next</button>}
  </div>
 )
}

export default QuestionList;


