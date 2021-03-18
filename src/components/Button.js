import React from 'react'

const Button =({handleAnswer,answer,className})=>(
 <>
  <button onClick={() => handleAnswer(answer)} className={`bg-white p-4 text-purple-800 font-semibold rounded shadow ${className}`}>{answer}</button>
  </>
);

export default Button;
