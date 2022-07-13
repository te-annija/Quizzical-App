import './Game.css';
import React from 'react';
import Question from './Question';
import { nanoid } from 'nanoid';

function Game(props) {
  const [allQuestions, setAllQuestions] = React.useState([]);
  const [canShowAnswers, setCanShowAnswers] = React.useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = React.useState(0); 
  const [isAllAnswered, setIsAllAnswered] = React.useState(false);

  React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(response => response.json())
        .then(data => setAllQuestions(data.results.map(question => { 
            return {...question, id: nanoid(), isQSelected: false, options: [...question.incorrect_answers.map(answ => ({id: nanoid(), option: answ, isSelected:false})), {id:nanoid(), option:question.correct_answer, isSelected:false}]}
            })
          ))
  },[]); 

  function selectAnsw(event, optId, qId){ 
    if(!canShowAnswers){
      setAllQuestions(prevQuestions => { 
        return prevQuestions.map( prevQuestion=> { 
          return prevQuestion.id === qId ? {...prevQuestion, isQSelected: true, options: prevQuestion.options.map( option => {
            return option.id === optId? {...option, isSelected: option.isSelected===false ? !option.isSelected : option.isSelected} : {...option, isSelected: false} 
            }) 
          }
          : prevQuestion
        })
      })
    }  
  }

  React.useEffect(()=>{
    setIsAllAnswered( allQuestions.every(question => question.isQSelected === true) )
    var count = 0; 
    allQuestions.forEach(question => {
      question.options.forEach(option => {
        if(option.isSelected && (question.correct_answer === option.option)){
          count += 1; 
        } 
      });
    });
    setCorrectAnswersCount(count)

  }, 
  [allQuestions])

  const displayQuestions = allQuestions.map(question => { 
    return <Question 
      title={question.question} 
      options={question.options} 
      key={question.id} 
      id={question.id}
      selectAnsw={selectAnsw}
      canShowAnswer = {canShowAnswers}
      correct_answer = {question.correct_answer}
      />
  })
  
  function showAnswers(){ 
    if(isAllAnswered)
    { 
      setCanShowAnswers(true); 
    }
    
  }
  function startNewGame(){ 
    setCanShowAnswers(false);
    setCorrectAnswersCount(0);
    setIsAllAnswered(false);
    props.handleGameStart(); 
  }

  return (
    <section className="game">
      <div className="question-list">
        {displayQuestions}
      </div>
      <div className="results">
        {canShowAnswers === false?
        <button className="button-primary" onClick={showAnswers} disabled={!isAllAnswered}> Check Answers</button>
        : 
        <><h3 className="results--title">You scored {correctAnswersCount}/5 correct answers</h3>
        <button className="button-primary" onClick={startNewGame} > Play Again</button>
        </>
        }
        
      </div>
      

    </section>
  );
}

export default Game;
