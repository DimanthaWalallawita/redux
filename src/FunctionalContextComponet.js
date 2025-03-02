import React, { useContext } from 'react'
import { ThemeContext } from './App'

const FunctionalContextComponet = () => {
    const darkTheme = useContext(ThemeContext);

    const ThemeStyles = {
        backgroundColor: darkTheme ? '#000' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <div style={ThemeStyles}>
            Functional Component Theme
        </div>
    )
}

export default FunctionalContextComponet