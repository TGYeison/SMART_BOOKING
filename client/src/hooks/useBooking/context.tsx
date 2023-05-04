import { createContext, Provider } from "react";
// Methos
import useBooking from '.';
// Types 
import { TypesBookings } from "./types";
import { Childrens } from "@/models/childre";

// Context 
export const ContextBooking = createContext<TypesBookings>({});

// Provider
export const ProviderBooking = ({children}: Childrens) => {

    const value = useBooking();

    return(
        <ContextBooking.Provider value={value}>
            {children}
        </ContextBooking.Provider>
    );
}