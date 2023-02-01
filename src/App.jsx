import { useContext, useEffect } from 'react';
import './App.css';
import GameOver from './components/gameover';
import Question from './components/question';
import Welcome from './components/welcome';
import { QuizContext } from './context/quiz';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" })
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
