const Result = ({ score }) => {
  const percentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
      <h2 className="text-xl font-bold mb-4">Quiz Results</h2>
      <p className="mb-4">Your final score: {percentage}%</p>
      <div className="flex justify-between items-center border-t pt-4">
        <span className="text-blue-500">
          {score} out of {quizQuestions.length}
        </span>
        <span className="text-green-500">{percentage}%</span>
      </div>
    </div>
  );
};

export default Result;
