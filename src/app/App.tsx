import { FC, Suspense, useEffect } from 'react';

import './styles/main.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error('Some error');
    }
  }, []);

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Header />
        <div className="app__content">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
