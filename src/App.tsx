import type { FC } from "react";

interface IGreetingProps {
  name: string;
}

const Greeting: FC<IGreetingProps> = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

const App: FC = () => {
  return <Greeting name="world" />;
};

export default App;
