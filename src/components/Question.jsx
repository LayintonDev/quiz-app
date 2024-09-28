const Question = ({ question, onAnswer }) => (
  <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
    <h2 className="text-xl font-bold mb-4">{question.text}</h2>
    {question.options.map((option, index) => (
      <button
        key={index}
        onClick={() => onAnswer(index)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        {option}
      </button>
    ))}
  </div>
);

export default Question;
