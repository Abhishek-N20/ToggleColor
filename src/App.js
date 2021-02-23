import React, {useState} from 'react';
import './App.css';


import {ThemeProvider} from 'styled-components';
import {getTheme} from "./getTheme";
import THEMES from './constants/themes'
import { Header, AppLink } from './styles';

function App() {
  const [themeName, setThemeName] = useState(THEMES.DARCULA);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <div className="App">
        <Header>
          <p>
          Welcome To ReactJS....!!!
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>

          <button style={{margin:"12px", borderRadius:"15px"}} onClick={() => setThemeName(THEMES.APPLE)}>Light Mode</button>
          <button  style={{margin:"4px", borderRadius:"15px"}} onClick={() => setThemeName(THEMES.DARCULA)}>Dark Mode</button>
        </Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
