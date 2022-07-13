import './Game.css';
import React from 'react';
import Question from './Question';
import { nanoid } from 'nanoid';

function Game() {
  const [allQuestions, setAllQuestions] = React.useState([]);
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(response => response.json())
        .then(data => setAllQuestions(data.results.map(question => { 
            return {...question, id: nanoid(), options: [...question.incorrect_answers.map(answ => ({id: nanoid(), option: answ,})), {id:nanoid(), option:question.correct_answer}]}
            })
          ))
  },[]); 

  const displayQuestions = allQuestions.map(question => { 
    return <Question title={question.question} options={question.options} key={question.id}/>
  })

  return (
    <section className="game">
      <div className="question-list">
        {displayQuestions}
      </div>
      <div className="results">
        <button className="button-primary"> Check Answers</button>
      </div>
      

    </section>
  );
}

export default Game;
