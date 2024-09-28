import React, { useState } from "react";
import "./index.css";
import QuestionList from "./components/QuestionList.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [showResults, setShowResults] = useState(false);

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
        <QuestionList onComplete={handleQuizComplete} />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
}

export default App;
