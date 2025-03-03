import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { WelcomePage } from './pages/Welcome-page';
import { GqlPage } from './pages/Gql-page';
import { SignInPage } from './pages/Sign-in-page';
import { NotFoundPage } from './pages/Not-found-page';
import { SignUpPage } from './pages/Sign-up-page';
import { Layout } from './components/Layout';
import { AnonymousOnlyPageWrapper } from './components/AnonymousOnlyPageWrapper';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from './components/ErrorComponent';
import { AboutPage } from './pages/About-page';

export enum RouterPage {
  WELCOME = '/',
  GQL = '/gql',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  About = '/about',
}
const ErrorBoundaryLayout = () => (
  <ErrorBoundary FallbackComponent={ErrorComponent}>
    <Layout />
  </ErrorBoundary>
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: RouterPage.WELCOME,
        element: <WelcomePage />,
      },
      {
        path: RouterPage.GQL,
        element: <GqlPage />,
      },
      {
        path: RouterPage.SIGN_IN,
        element: (
          <AnonymousOnlyPageWrapper>
            <SignInPage />
          </AnonymousOnlyPageWrapper>
        ),
      },
      {
        path: RouterPage.SIGN_UP,
        element: (
          <AnonymousOnlyPageWrapper>
            <SignUpPage />
          </AnonymousOnlyPageWrapper>
        ),
      },
      {
        path: RouterPage.About,
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
