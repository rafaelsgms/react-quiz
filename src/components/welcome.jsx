import Quiz from '../assets/quiz.svg'
import './welcome.css'

const welcome = () => {
  return (
    <div className='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="quiz imagem" />
    </div>
  )
}

export default welcome