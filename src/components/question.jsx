import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Option from './option';
import './question.css';

function question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelecOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option},
    });
  };

  return (
    <div className='question'>
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div className='options-container'>
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelecOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
      )}
    </div>
  )
}

export default question