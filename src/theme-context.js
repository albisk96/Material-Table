import React from 'react';

export const themes = {
    dark: {
        color: 'white',
        background: 'black',
        overflow: 'hidden'
    },
    light: {
        color: 'black',
        background: 'white',
        overflow: 'hidden'
    }
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;