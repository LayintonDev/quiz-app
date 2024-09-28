import React, { useState } from "react";
import "./index.css";
import QuestionList from "./components/QuestionList.jsx";
import Result from "./components/Result.jsx";
import { quizQuestions } from "../seeds/questions";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleQuizComplete = () => {
    setShowResults(true);
  };

  const score = showResults
    ? quizQuestions.filter(
        (_, i) => answers[i] === quizQuestions[i].correctAnswer
      ).length
    : null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!showResults ? (
        <QuestionList
          answers={answers}
          setAnswers={setAnswers}
          handleQuizComplete={handleQuizComplete}
        />
      ) : (
        <Result score={score} quizQuestions={quizQuestions} />
      )}
    </div>
  );
}

export default App;
