import { createContext, useState } from "react";



export const  darkModeContext = createContext()

export default function DarkModeProivder({children}){
    const [isDarkMode,setIsDarkMode]  = useState(false)
    return (
        <darkModeContext.Provider value={{isDarkMode,setIsDarkMode}}>

        {children}

        </darkModeContext.Provider>
    )
}