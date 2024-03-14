import { useState } from "react";

const Statstics = (props) => (
  <div>
    <div>good {props.good}</div>
    <div>neutral {props.neutral}</div>
    <div>bad {props.bad}</div>
    <div>all {props.good + props.bad + props.neutral}</div>
    <div>
      average{" "}
      {(props.good * 1 + props.neutral * 0 + props.bad * -1) / props.total}
    </div>
    <div>positive {(props.good / props.total) * 100}%</div>
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [feedback, setFeedback] = useState(false);

  let total = good + neutral + bad;

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button
          onClick={() => {
            setGood(good + 1);
            setFeedback(true);
          }}
        >
          good
        </button>
        <button
          onClick={() => {
            setNeutral(neutral + 1);
            setFeedback(true);
          }}
        >
          neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);
            setFeedback(true);
          }}
        >
          bad
        </button>
      </div>
      <div>
        <h2>Statstics</h2>
        {feedback ? (
          <Statstics good={good} neutral={neutral} bad={bad} total={total} />
        ) : (
          <>No feedback given</>
        )}
      </div>
    </div>
  );
};

export default App;
