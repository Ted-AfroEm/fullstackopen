import { useState } from "react";

const StatisticLine = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);
const Statstics = (props) => (
  <div>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={props.good + props.bad + props.neutral} />
    <StatisticLine
      text="average"
      value={
        (props.good * 1 + props.neutral * 0 + props.bad * -1) / props.total
      }
    />
    <StatisticLine
      text="positive"
      value={(props.good / props.total) * 100 + "%"}
    />
  </div>
);

const Button = (props) => (
  <button
    onClick={() => {
      props.setFeedback(props.feedback + 1);
      props.setShowFeedback(true);
    }}
  >
    {props.text}
  </button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [showFeedback, setShowFeedback] = useState(false);

  let total = good + neutral + bad;

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>

        <Button
          text="good"
          feedback={good}
          setFeedback={setGood}
          setShowFeedback={setShowFeedback}
        />
        <Button
          text="neutral"
          feedback={neutral}
          setFeedback={setNeutral}
          setShowFeedback={setShowFeedback}
        />
        <Button
          text="bad"
          feedback={bad}
          setFeedback={setBad}
          setShowFeedback={setShowFeedback}
        />
      </div>
      <div>
        <h2>Statstics</h2>
        {showFeedback ? (
          <Statstics good={good} neutral={neutral} bad={bad} total={total} />
        ) : (
          <>No feedback given</>
        )}
      </div>
    </div>
  );
};

export default App;
