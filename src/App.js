import React, {useState} from 'react';
import './App.css';
import Table from './components/material-table';
import ThemeContext, {themes} from './theme-context';
import NavBar from './components/navbar';

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    theme === themes.dark 
      ? setTheme(themes.light)
      : setTheme(themes.dark);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <NavBar toggleTheme={toggleTheme} isDark={theme.background} />
      <Table />
    </ThemeContext.Provider>
  );
}

export default App;