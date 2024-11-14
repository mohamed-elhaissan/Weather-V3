import { createContext, useState } from "react";



export const mouseContext = createContext()
export default function MouseProvider({children}){
    const [mouseInfo,setMouseInfo]=useState({
        x : 0,
        y : 0,
        scale : 'none',
        colors : 'none'
    })
    return (
        <mouseContext.Provider value={{mouseInfo,setMouseInfo}}>{children}</mouseContext.Provider>
    )
}