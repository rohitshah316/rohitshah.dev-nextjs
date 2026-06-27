"use client"

import {createContext,useContext,useState,useEffect} from 'react'

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{

    const [theme,setTheme]=useState('dark');

    useEffect(()=>{
        const savedTheme=localStorage.getItem("theme");
        if(savedTheme){
            setTheme(savedTheme);
        }
    },[])

    useEffect(()=>{
        document.body.classList.remove("light","dark");
        document.body.classList.add(theme);
        localStorage.setItem("theme",theme)
    },[theme]);

    const toggleTheme=()=>{
        setTheme((prev)=>(prev==='light'?'dark':'light'));
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
                {children}

        </ThemeContext.Provider>
    )
}


export function useTheme(){
    return useContext(ThemeContext);
}