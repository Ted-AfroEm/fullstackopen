import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10);

  const hello = (who) => () => {
    console.log("hello", who);
  };
  return (
    <div>
      {value}
      <button onClick={hello("Teddy")}>reset to zero</button>
    </div>
  );
};

export default App;
