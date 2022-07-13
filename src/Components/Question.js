import './Question.css';
import React from 'react';

function Question(props) {
  
  const displayOptions = props.options.map(option=>{
    return <button className="question--option"> {option}</button>
  })

  return (
    <div className="question">
      <h3 className="question--title">{props.title}</h3>
      <div className="question--options">
        {displayOptions}
      </div>
    </div>
  );
}

export default Question;
