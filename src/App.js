// modules
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// components
import Home from './components/Home';
import theme from './theme/theme';
import UserUploads from './components/UserUploads';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/my-uploads' element={<UserUploads />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
