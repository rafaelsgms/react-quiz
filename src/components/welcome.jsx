import { useContext } from 'react'
import Quiz from '../assets/quiz.svg'
import { QuizContext } from '../context/quiz'
import './welcome.css'

const welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='welcome'>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={Quiz} alt="quiz imagem" />
    </div>
  )
}

export default welcome