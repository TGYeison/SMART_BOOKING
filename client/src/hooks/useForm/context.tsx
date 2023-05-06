import { createContext } from "react";
// Methos
import useForm from '.';
// Types 
import { TypesForm } from "./types";
import { Childrens } from "@/models/childre";

// Context 
export const ContextForm = createContext<TypesForm>({} as TypesForm);

// Provider
export const ProviderForm = ({children}:Childrens) => {

    const value = useForm();

    return(
        <ContextForm.Provider value={value}>
            {children}
        </ContextForm.Provider>
    );
}