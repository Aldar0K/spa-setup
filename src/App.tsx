import { FC } from "react";

import "./main.scss";

import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" />
        <Route path="/about" />
      </Routes>
    </div>
  );
};

export default App;
