import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/themes';
import { GlobalStyle } from './themes/GlobalStyle';
import { Provider } from 'react-redux';
import store from './redux/store';
import ThemeButton from './component/ThemeButton';
import Home from './page/user/Home';
import Login from './page/user/Login';
import Navbar from './component/Navbar';
import PayrollDetails from './page/user/PayrollDetails';
import CorrectionRequestRecords from './page/user/CorrectionRequestRecords';
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <ThemeButton onClick={toggleTheme} />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payroll-details" element={<PayrollDetails />} />
            <Route path="/correction-request-records" element={<CorrectionRequestRecords />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
