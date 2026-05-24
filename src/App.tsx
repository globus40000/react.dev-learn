import { useState, type FC } from "react";

interface MyButtonProps {
  count: number;
  onClick: () => void;
}

const MyButton: FC<MyButtonProps> = ({ count, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Clicked {count} times
    </button>
  );
};

const App: FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
};

export default App;
