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

  const [formData, setFormData] = React.useState({
    category: "", 
    difficulty: "", 
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }   

  return (
    <div className="app">
      {gameStarted === false ?
        <section className="game-intro"> 
          <h1 className="game-intro--title">Quizzical</h1>
          <p className="game-intro--description">Answer the questions and test your knowledge!</p>
          <div className="game-form">
              <label htmlFor="category">Category: </label>
              <select 
                  id="category" 
                  value={formData.category}
                  onChange={handleChange}
                  name="category"
                  className="form-select"
              >
                <option value="">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option><option value="12">Entertainment: Music</option><option value="13">Entertainment: Musicals &amp; Theatres</option><option value="14">Entertainment: Television</option><option value="15">Entertainment: Video Games</option><option value="16">Entertainment: Board Games</option><option value="17">Science &amp; Nature</option><option value="18">Science: Computers</option><option value="19">Science: Mathematics</option><option value="20">Mythology</option><option value="21">Sports</option><option value="22">Geography</option><option value="23">History</option><option value="24">Politics</option><option value="25">Art</option><option value="26">Celebrities</option><option value="27">Animals</option><option value="28">Vehicles</option><option value="29">Entertainment: Comics</option><option value="30">Science: Gadgets</option><option value="31">Entertainment: Japanese Anime &amp; Manga</option><option value="32">Entertainment: Cartoon &amp; Animations</option>		
              </select>
              <label htmlFor="difficulty">Difficulty: </label>
              <select 
                  id="difficulty" 
                  value={formData.difficulty}
                  onChange={handleChange}
                  name="difficulty"
                  className="form-select"
              >
                <option value="">Any difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
          </div>

          <button className="button-primary" onClick={startGame}>Start Quiz</button>
        </section>
      :
        <Game handleGameStart={handleGameStart} choice={formData}/>
        
      }
      <img src={blobTop} alt="decoration" className="img-top"></img>
      <img src={blobBut} alt="decoration" className="img-but"></img>
    </div>
  );
}

export default App;
