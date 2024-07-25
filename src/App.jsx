import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/themes';
import { GlobalStyle } from './themes/GlobalStyle';

import ThemeButton from './component/ThemeButton';
import Home from './page/user/Home';
import Login from './page/user/Login';
import Navbar from './component/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme} />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
