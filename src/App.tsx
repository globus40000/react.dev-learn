import { useState, type FC } from "react";

const MyButton: FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button type="button" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
};

const App: FC = () => {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
};

export default App;
