import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./main.scss";

import { AboutPage, MainPage } from "./pages";

const App: FC = () => {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/about" Component={AboutPage} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
