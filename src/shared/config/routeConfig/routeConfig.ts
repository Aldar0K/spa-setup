import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath[AppRoutes.MAIN], Component: MainPage },
  [AppRoutes.ABOUT]: { path: RoutePath[AppRoutes.ABOUT], Component: AboutPage },
  [AppRoutes.NOT_FOUND]: { path: RoutePath[AppRoutes.NOT_FOUND], Component: NotFoundPage },
};
