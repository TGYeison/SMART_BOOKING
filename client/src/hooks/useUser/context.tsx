import { createContext } from "react";
// Methos
import useUser from '.';
// Types 
import { TypesUser } from "./types";
import { Childrens } from "@/models/childre";
// Context 
export const ContextUser = createContext<TypesUser>({});

// Provider
export const ProviderUser = ({children}:Childrens) => {

    const value = useUser();

    return(
        <ContextUser.Provider value={value}>
            {children}
        </ContextUser.Provider>
    );
}