import { useContext } from "react";

import { isNum } from "@/utils/useIsNum";
import { ContextForm } from "@/hooks/useForm/context";


const Form = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const { setData } = useContext(ContextForm);

    const handelSubmit = (event: any) => {
        event.preventDefault();
        const keys = Object.keys(event.currentTarget.elements);
        const objectData: { [key: string]: number | string | boolean } = {};

        keys.forEach((key: string, index: number) => {
            if (!isNum(key)) {
                objectData[key] = event.currentTarget.elements[key].value;
            }
        });

        setData(objectData);
    }

    return (
        <form className="form__cntrl" onSubmit={handelSubmit}>
            {children}
        </form>
    );

}


export default Form;