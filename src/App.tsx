import './App.css'
import Header from './Header';
import Feed from './Feed';
import Post from './Post';
import { BrowserRouter, Route, Routes } from 'react-router';
import ThemeContext from './ThemeContext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <div className="container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/post/:id' element={<Post />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <button onClick={toggleTheme} className={`themeBtn ${theme}`}>
                {theme === 'light' ? 'dark' : 'light'}
      </button>
    </ThemeContext.Provider>
  );
}

export default App
