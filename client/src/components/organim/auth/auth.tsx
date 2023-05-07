import { useEffect, useContext, useState, Suspense} from "react";
import { useRouter } from "next/router";
import { ContextUser } from "@/hooks/useUser/context";

const PrivateRoute = ({ children }: {children: JSX.Element | JSX.Element[]}) => {
    const router = useRouter();
    const { verify } = useContext(ContextUser);

    const validate = async () => {
        const auth: boolean = await verify();
        debugger;
        if (auth != true) router.push('/auth'); 
    }

    useEffect( () => {
        validate();
    }, []);
  
    return <>{children}</>;
};

export default PrivateRoute;