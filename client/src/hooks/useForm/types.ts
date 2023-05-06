import { Dispatch, SetStateAction } from "react";

interface contextForm {
    data: Object;
    setData: Dispatch<SetStateAction<Object>>;
    stateFrom: string;
    setStateForm: Dispatch<SetStateAction<string>>;
    type: number;
    setType: Dispatch<SetStateAction<number>>;
}

export type TypesForm = contextForm;