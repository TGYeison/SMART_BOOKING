import { createContext } from "react";
// Methos
import useHotel from '.';
// Types 
import { TypesHotel } from "./types";
import { Childrens } from "@/models/childre";

// Context 
export const ContextHotel = createContext<TypesHotel>({});

// Provider
export const ProviderHotel = ({children}:Childrens) => {

    const value = useHotel();

    return(
        <ContextHotel.Provider value={value}>
            {children}
        </ContextHotel.Provider>
    );
}