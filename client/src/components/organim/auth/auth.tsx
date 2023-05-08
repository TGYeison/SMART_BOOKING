import { useEffect, useContext, useState, Suspense} from "react";
import { useRouter } from "next/router";
import { ContextUser } from "@/hooks/useUser/context";

const PrivateRoute = ({ children }: {children: JSX.Element | JSX.Element[]}) => {
    const router = useRouter();
    const { verify } = useContext(ContextUser);
    const [loading, setLoading] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<boolean>(false);

    const validate = async () => {
        try {
            const auth: boolean = await verify();
            setIsValid(auth);
        } catch (error) {
            setIsValid(false);
        } finally {
            setLoading(false)
        }
    }

    useEffect( () => {
        validate();
    }, []);
  
    if(loading) return (<p>Loading...</p>);

    if(!isValid){
        router.push('/auth');
        return<></>;
    }

    return <>{children}</>;
};

export default PrivateRoute;