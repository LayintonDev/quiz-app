const Question = ({ question, onAnswer }) => (
  <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full flex flex-col">
    <h2 className="text-2xl font-bold mb-4">{question.text}</h2>
    <div className="grid grid-cols-2 gap-4">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default Question;
