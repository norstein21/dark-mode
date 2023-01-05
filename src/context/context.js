import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext();

//provider  - GithubContext.Provider
const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState('light')

    const btnToggle = () =>{
        if(theme === ('light')){
        setTheme('dark')
        }
        else(
        setTheme('light')
        )
    }


    useEffect(()=>{
        document.documentElement.className = theme
    },[theme])

    return (
    <ThemeContext.Provider 
    value={{theme,setTheme,btnToggle}}>{children}</ThemeContext.Provider>)
}

export {ThemeContext,ThemeProvider}