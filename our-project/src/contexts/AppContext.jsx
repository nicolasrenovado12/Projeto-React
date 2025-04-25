import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;


    return (
        <AppContext.Provider value={{
            
        }}>
            {children}
        </AppContext.Provider>
    )
}
