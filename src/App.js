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
import axios from 'axios';

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
  const [image, setImage] = useState(null);

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
        // the user was successfully logged in
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
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

  const onFileChange = event => {
    setImage(event.target.files[0]);
  }

  const onFileUpload = () => {
    const reader = new FileReader();
    const PROXY_URL = "https://cors-anywhere.herokuapp.com";
    const POST_URL = "https://api.imgbb.com/1/upload?";
    let imageBase64 = "";

    reader.onload = () => {
      imageBase64 = reader.result.replace("data:", "").replace(/^.+,/, "");
      axios.post(`${PROXY_URL}/${POST_URL}key=${process.env.REACT_APP_IMGBB_APIKEY}`, {
        image: imageBase64
      })
       .then((res) => {
         console.log(res);
       })
       .catch(err => {
         console.error(err);
       });
    }
    reader.readAsDataURL(image);

    setFileToNull();
  }

  const setFileToNull = () => {
    setImage(null);
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar user={user} logoutFunc={logout} />
      <Routes>
        <Route path='/' element={<Home loginFunc={login} />} />
        <Route path='/my-uploads' element={<UserUploads onFileUpload={onFileUpload} isImageNull={image == null} onFileChange={onFileChange} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
