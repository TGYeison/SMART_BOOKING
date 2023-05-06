import { useState, useEffect} from 'react';


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
    const [data, setData] = useState<Object>({});
    const [stateFrom, setStateForm] = useState<string>('Nuevo');
    const [type, setType] = useState<number>(0);
    
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