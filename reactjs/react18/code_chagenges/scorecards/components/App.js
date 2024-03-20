import { useEffect, useState } from "react";
import Question from "./Question";

const EXAMPLE_QUESTIONS = [
  {
    "id": "1",
    "questionText": "This is an example yes or no question.",
    "points": 5,
    "type": "Yes/No",
  },
  {
    "id": "2",
    "questionText": "Here's another yes or no question.",
    "points": 15,
    "type": "Yes/No",
  },
  {
    "id": "3",
    "questionText": "This is an example scale question.",
    "points": 10,
    "type": "Scale",
  },
  {
    "id": "4",
    "questionText": "Here's another scale question.",
    "points": 5,
    "type": "Scale",
  },
  {
    "id": "5",
    "questionText": "This is an example open-ended question.",
    "type": "Open-Ended",
  },
];

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [passingScore, setPassingScore] = useState(0);

  useEffect(() => {
    setQuestions(EXAMPLE_QUESTIONS);
  }, [])

  useEffect(() => {
    const total = questions.reduce((sum, q) => sum += (q.points || 0), 0);
    const required = Math.floor(total/2);
    setScore(total);
    setPassingScore(required);
  }, [questions])

  const addQuestion = () => {
    setQuestions((oldQuestions) => {
      return [
        ...oldQuestions,
        {
          "id": (oldQuestions.length + 1) + "",
          "questionText": "This is an example open-ended question.",
          "type": "Open-Ended",
        },
      ]
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <h1>Scorecard</h1>
        </div>
        <div className="col-5">
          <h1>
            <span>Total Points: {score}</span>
            <span>Passing Score: {passingScore}</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          Minimum passing score: 50%
        </div>
      </div>
      <div className="row">
        <div className="container">
          {questions.map((q) => <Question key={q.id} data={q}/>)}
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button onClick={addQuestion}>
            + Add a question
          </button>
        </div>
        <div className="col-6">
          * Blank questions will not be assigned
        </div>
      </div>
    </div>
  );
}

export default App;
