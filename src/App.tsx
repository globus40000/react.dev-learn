import type { FC } from "react";

const MyButton: FC = () => {
  return <button type="button">I'm a button</button>;
};

const App: FC = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
};

export default App;
