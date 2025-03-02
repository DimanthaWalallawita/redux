import React, { useState } from 'react'
import ClassContextComponent from './ClassContextComponent';
import FunctionalContextComponet from './FunctionalContextComponet';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(){
    setDarkTheme(prevDark => !prevDark)
  }

  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent/>
        <FunctionalContextComponet/>
      </ThemeContext.Provider>
    </div>
  )
}