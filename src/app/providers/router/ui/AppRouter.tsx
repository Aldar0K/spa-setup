import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className="page-wrapper">
              <Component />
            </div>
            )}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
