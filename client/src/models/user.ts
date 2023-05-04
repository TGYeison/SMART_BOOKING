/**
 * @interface User 
 * @description Structure of data necessary for the creation, capture and edition of users
 */
export interface DataUser {
    name: string;
    last_name: string;
    e_mail: string;
    phone: number;
    gender: number;
    role: string;
    birth_date: Date;
    document: string;
    type_document: string;
}

/**
 * @interface Logup  
 * @description Structure of data necessary for the creation of users
 */
export interface Logup extends DataUser {
    password: string;
}

/**
 * @interface Signin 
 * @description Structure of data necessary for logging in
 */
export interface Signin {
    e_mail: string;
    role: string;
    password: string;
}

/**
 * @interface Login  
 * @description Server response on login
 */
export interface Login {
    id: string;
    token: string;
    refrech_token: string;
}

/**
 * @interface User 
 * @description User data brought by the server
 */
export interface User extends DataUser{
    bookings: string[] | null;
}

/**
 * @interface Administrator 
 * @description User data brought by the server
 */
export interface Administrator extends DataUser{
    hotels:  string[] | null;
}

