import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button
          onClick={() => {
            setGood(good + 1);
          }}
        >
          good
        </button>
        <button
          onClick={() => {
            setNeutral(neutral + 1);
          }}
        >
          neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);
          }}
        >
          bad
        </button>
      </div>
      <div>
        <h2>Statstics</h2>
        <div>
          <div>good {good}</div>
          <div>neutral {neutral}</div>
          <div>bad {bad}</div>
          <div>all {good + bad + neutral}</div>
          <div>average {total / 3}</div>
          <div>positive {(good / total) * 100}%</div>
        </div>
      </div>
    </div>
  );
};

export default App;
