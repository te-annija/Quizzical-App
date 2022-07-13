import './App.css';
import React from 'react';
import blobTop from './assets/images/blob1.png';
import blobBut from './assets/images/blob2.png';
import Game from './Components/Game';

function App() {
  const [gameStarted, setGameStarted] = React.useState(false);
  function startGame(){ 
    setGameStarted(true);
  }
  function handleGameStart(){
    setGameStarted(false);
  }

  return (
    <div className="app">
      {gameStarted === false ?
        <section className="game-intro"> 
          <h1 className="game-intro--title">Quizzical</h1>
          <p className="game-intro--description">Answer the questions and test your knowledge!</p>
          <button className="button-primary" onClick={startGame}>Start Quiz</button>
        </section>
      :
        <Game handleGameStart={handleGameStart}/>
        
      }
      <img src={blobTop} alt="decoration" className="img-top"></img>
      <img src={blobBut} alt="decoration" className="img-but"></img>
    </div>
  );
}

export default App;
