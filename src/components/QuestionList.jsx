import Question from "./Question";
import { quizQuestions } from "../../seeds/questions";
import { useState } from "react";

const QuestionList = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answerIndex) => {
    setAnswers([...answers, answerIndex]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mb-4"
        >
          Previous
        </button>
      )}
      {currentQuestionIndex === quizQuestions.length - 1 && (
        <button
          onClick={() => alert("Quiz completed!")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
        >
          Finish Quiz
        </button>
      )}
    </div>
  );
};

export default QuestionList;
