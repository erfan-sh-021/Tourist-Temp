import React,{createContext,useState,useContext,useEffect} from "react";

const DarkModeContext = createContext();

export const useDarkMode = () =>{
    return useContext(DarkModeContext)
}
export const DarkModeProvider = ({children}) =>{
    const [darkMode,setDarkMode] = useState(()=>{
        return localStorage.getItem('darkMode') === 'true';
    });
    
    useEffect(()=>{
        document.body.classList.toggle('dark-mode',darkMode);
        localStorage.setItem('darkMode',darkMode);
    },[darkMode]);
    
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };
    return(
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
};