import "../config"
import jwt from "jsonwebtoken"
import bcryptJS from 'bcryptjs';

import { KEY_SECRET } from "../config";

export const comparePass = async (inputPass: string, pass: string)=> {
    const res:boolean = await bcryptJS.compare(inputPass, pass);

    return res;
}

export const genToken = (userId: string | number) => (
    jwt.sign({id: userId}, KEY_SECRET as string)
);

export const tokenVerify = (token: string) => {
    try {
        const decode:any = jwt.verify(token, KEY_SECRET as string);

        if(!decode?.id) return false;

        return true;
    } catch (error) {
        return false;
    }
}