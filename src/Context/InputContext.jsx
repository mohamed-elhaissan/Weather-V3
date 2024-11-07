import { createContext, useState } from "react";




export const Input = createContext()

export default function InputProvider({children}){
    const [inputValue,setInputValue] = useState('')
    return <Input.Provider value={{inputValue,setInputValue}}>{children}</Input.Provider>
}