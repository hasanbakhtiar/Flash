import { createContext, useState } from "react";

export const LangContext = createContext();
export const LangProvider = ({children})=>{
const [lang,setLang] = useState("EN");
    return <LangContext.Provider value={[lang,setLang]}>{children}</LangContext.Provider>
}