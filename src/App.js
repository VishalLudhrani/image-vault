// modules imports
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import Navbar from './components/Navbar';

// components imports
import Home from './components/Home';
import theme from './theme/theme';
import UserUploads from './components/UserUploads';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if(u) {
        console.log("User is logged in.");
        setUser(u);
      } else {
        console.log("Visitor isn't logged in.");
      }
    })
  }, []);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Oops, we encountered an error while signing you up!\n${errorCode}: ${errorMessage}`);
      });
  }

  const logout = () => {
    signOut(auth).then(() => {
      console.log("Signed out.");
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar user={user} logoutFunc={logout} />
      <Routes>
        <Route path='/' element={<Home loginFunc={login} />} />
        <Route path='/my-uploads' element={<UserUploads user={user} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
