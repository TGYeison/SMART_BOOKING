import { createContext } from "react";
// Methos
import useUser from './index';
// Types 
import { TypesUser } from "./types";
import { Childrens } from "@/models/childre";
// Context 
export const ContextUser = createContext<TypesUser>({} as TypesUser);

// Provider
export const ProviderUser = ({children}:Childrens) => {

    const value: any = useUser();

    return(
        <ContextUser.Provider value={value}>
            {children}
        </ContextUser.Provider>
    );
}