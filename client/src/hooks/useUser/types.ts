import { Dispatch, SetStateAction } from "react";
import { Login } from "@/models/user";

interface contextUser {
    user: string;
    setUser: Dispatch<SetStateAction<string>>;
    session: Login;
    setSession: Dispatch<SetStateAction<Login | null>>;
    logIn: (data: any) => void;
    singUp: (data: any) => void;
    verify: () => boolean;
}

export type TypesUser = contextUser;