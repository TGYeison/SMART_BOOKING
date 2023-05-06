import { useNum } from "@/utils/useIsNum";


const Form = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const handelSubmit = (event: any) => {
        event.preventDefault();
        const keys = Object.keys(event.currentTarget.elements);
        const objectData: { [key: string]: number | string | boolean } = {};

        keys.forEach((key: string, index: number) => {
            if (useNum(key)) {
                objectData[key] = event.currentTarget.elements[key].value;
            }
        });

        console.log(objectData);
    }

    return (
        <form className="form__cntrl" onSubmit={handelSubmit}>
            {children}
        </form>
    );

}


export default Form;