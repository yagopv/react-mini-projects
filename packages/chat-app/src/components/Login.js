import React, { useEffect } from 'react';
import { useFirebase } from '../shared/context/firebase-context';
import { useHistory } from 'react-router-dom';
import { Lottie } from './Lottie';
import { Grid, Typography, Box } from '@material-ui/core';

export function Login() {
  const { auth, GithubAuthProvider } = useFirebase();
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function(user) {
      if (user) {
        history.push('/d');
      }
    });

    return () => unsubscribe();
  });

  const login = () => {
    auth.signInWithPopup(new GithubAuthProvider()).then(function(result) {
      // Perhaps I want to check if is a new user
      // and store in some table with additional data
      // --------------------------------------------
      // if (result.additionalUserInfo.isNewUser) {
      //   db.collection('users').add({
      //     uid: result.uid,
      //     displayName: result.displayName,
      //     photoURL: result.photoURL,
      //     email: result.email,
      //     providerInfo: result.providerData
      //   });
      // }
    });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      onClick={login}
    >
      <Typography variant="h3">Please Login</Typography>
      <Box cursor="pointer">
        <Lottie
          path="https://assets2.lottiefiles.com/packages/lf20_S6vWEd.json"
          width={250}
          height={250}
        />
      </Box>
    </Box>
  );
}
