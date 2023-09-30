import { FC } from "react";

import "./main.scss";

import Counter from "./components/Counter";

const App: FC = () => {
  return (
    <div className="app">
      <p>Some text. Rect 18</p>
      <Counter />
    </div>
  );
};

export default App;
