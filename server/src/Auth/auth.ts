import { keySecret } from "../config"
import jwt from "jsonwebtoken"
import bcryptJS from 'bcryptjs';

export const comparePass = async (inputPass: string, pass: string)=> {
    const res:boolean = await bcryptJS.compare(inputPass, pass);

    return res;
}

export const genToken = (userId: string | number) => (
    jwt.sign({id: userId}, keySecret as string)
);

export const tokenVerify = (token: string) => {
    try {
        const decode:any = jwt.verify(token, keySecret as string);

        if(!decode?.id) return false;

        return true;
    } catch (error) {
        return false;
    }
}