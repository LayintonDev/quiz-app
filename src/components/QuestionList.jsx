import Question from "./Question";
import { quizQuestions } from "../../seeds/questions";
import { useState } from "react";

const QuestionList = ({ handleQuizComplete, answers, setAnswers }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex === quizQuestions.length - 1) {
      handleQuizComplete();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="mb-8">
        <Question question={currentQuestion} onAnswer={handleAnswer} />
      </div>
      {currentQuestionIndex > 0 && (
        <button
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mb-4 mr-2"
        >
          Previous
        </button>
      )}
      {currentQuestionIndex < quizQuestions.length - 1 && (
        <button
          onClick={() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mb-4"
        >
          Next
        </button>
      )}
      {currentQuestionIndex === quizQuestions.length - 1 && (
        <button
          onClick={handleQuizComplete}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
        >
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default QuestionList;
