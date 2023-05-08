import { useState, useEffect, useContext} from 'react';
import { ContextUser } from '../useUser/context';

/**
 * @description type of forms
 * 0 - null
 * 1 - Sing In
 * 2 - Sing Up
 * 3 - Hotel
 * 4 - Room
 * 5 - Booking
 */
const useForm = () => {
    const { logIn, singUp } = useContext(ContextUser);

    const [data, setData] = useState<Object>({});
    const [stateFrom, setStateForm] = useState<string>('Nuevo');
    const [type, setType] = useState<number>(0);

    const storeAction = (inputData:any) => {
        switch(type){
            case 1:
                logIn(inputData);
                break;
            case 2:
                singUp(inputData);
        }
        
        setData({});
        setType(0);
    }

    useEffect(()=> {
        if(type !== 0){
            storeAction(data);
        }
    }, [data]);
    
    return {
        data,
        setData,
        stateFrom,
        setStateForm,
        type,
        setType
    };
}

export default useForm;