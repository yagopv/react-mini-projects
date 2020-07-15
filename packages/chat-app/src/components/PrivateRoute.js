import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useFirebase } from '../shared/context/firebase-context';

export function PrivateRoute({ children, ...others }) {
  const { user } = useFirebase();

  return (
    <Route {...others}>{user ? children : <Redirect to="/login" />}</Route>
  );
}
