import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
