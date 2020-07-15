import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  FirebaseProvider,
  useFirebase
} from './shared/context/firebase-context';
import { Login } from './components/Login';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Dashboard } from './components/Dashboard';
import { CssBaseline } from '@material-ui/core';
import { theme } from './shared/theme';

import './index.css';

function App() {
  const { isLoading } = useFirebase();

  if (isLoading) {
    return <p>Firebase is Loading...</p>;
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/d" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/d">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <p>Not found</p>
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  rootElement
);
