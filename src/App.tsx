import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./styles/main.scss";
import { useTheme } from "./theme/useTheme";

import { AboutPage, MainPage } from "./pages";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>

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
