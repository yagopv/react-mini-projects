import React, { useContext, useState, useEffect, useMemo } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

app.initializeApp(config);

const FirebaseContext = React.createContext(null);

export function FirebaseProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = useMemo(() => app.auth(), [app.auth().currentUser]);
  const db = useMemo(() => app.firestore(), []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function(user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <FirebaseContext.Provider
      value={{
        auth,
        db,
        user,
        isLoading,
        GithubAuthProvider: app.auth.GithubAuthProvider
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  return context;
}
