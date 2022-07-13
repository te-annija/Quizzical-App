import './Question.css';
import React from 'react';
import { decode } from 'html-entities';

function Question(props) {
  
  const displayOptions = props.options.map(option=>{
    return <button className="question--option" key={option.id}> {decode(option.option)}</button>
  })

  return (
    <div className="question">
      <h3 className="question--title">{decode(props.title)}</h3>
      <div className="question--options">
        {displayOptions}
      </div>
    </div>
  );
}

export default Question;
