import './Game.css';
import React from 'react';
import Question from './Question';

function Game() {
  
  return (
    <section className="game">
      <div className="question-list">
        <Question title="How would one say goodbye in Spanish?" options={["Adios", "Hola", "Au Revoir", "Salir"]}/>
        <Question title="How would one say goodbye in Spanish?" options={["Adios", "Hola", "Au Revoir", "Salir"]}/>
        <Question title="How would one say goodbye in Spanish?" options={["Adios", "Hola", "Au Revoir", "Salir"]}/>
        <Question title="How would one say goodbye in Spanish?" options={["Adios", "Hola", "Au Revoir", "Salir"]}/>
        <Question title="How would one say goodbye in Spanish?" options={["Adios", "Hola", "Au Revoir", "Salir"]}/>
      </div>
      <div className="results">
        <button className="button-primary"> Check Answers</button>
      </div>
      

    </section>
  );
}

export default Game;
