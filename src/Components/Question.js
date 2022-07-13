import './Question.css';
import React from 'react';
import { decode } from 'html-entities';

function Question(props) {

    const sortOptions = [...props.options].sort((a, b) => a.id > b.id ? -1 : 1)
    const displayOptions = sortOptions.map(option=>{
      var color; 
      if(option.isSelected){ 
        color = "#D6DBF5";
        if(props.canShowAnswer && option.option !== props.correct_answer){ 
          color = "#F8BCBC";
        }
      }
      else { 
        color = "transparent";
      }

      const styles = { 
        background: props.canShowAnswer && option.option === props.correct_answer? "#94D7A2" : color, 
        border: option.isSelected || (props.canShowAnswer&& (option.option === props.correct_answer))? "none": "1px solid #4D5B9E",
        opacity: props.canShowAnswer && !(option.option === props.correct_answer) ? "0.5" : "1",
      }
      return (<button className="question--option" key={option.id} onClick={(event)=>props.selectAnsw(event, option.id, props.id)} style={styles}>
        {decode(option.option)}
      </button>)
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
