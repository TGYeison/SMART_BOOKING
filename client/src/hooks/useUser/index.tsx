import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//graphql
import { gql } from '@apollo/client';
import client from '@/utils/client_apollo';
//models
import { Login } from '@/models/user';

const SING_UP_MUTATION: any = gql(`
    mutation  createUser(
        $name: String!,
        $last_name: String!,
        $e_mail: String!,
        $phone: String!,
        $gender: String!,
        $role: String!,
        $birth_date: String!,
        $document: String!,
        $password: String!,
        $type_document: String!
    ) {
        createUser(
            name: $name,
            last_name: $last_name,
            e_mail: $e_mail,
            phone: $phone,
            gender: $gender,
            role: $role,
            birth_date: $birth_date,
            document: $document,
            password: $password,
            type_document: $type_document
        ){
            id,
            name,
            token_access
        }
    }
`);


const SING_IN_MUTATION: any = gql(`
    mutation  logIn(
        $name: String!,
        $password: String!,
    ) {
        logIn(
            name: $name,
            password: $password,
        ){
            id,
            name,
            token_access
        }
    }
`);

const VERIFY: any = gql(`
    query  verify{
        verify
    }
`);



const useUser = () => {
    const router = useRouter();

    const [user, setUser] = useState<string>('');
    const [session, setSession] = useState<Login | null>(null);

    const logIn = async (data: any) => {
        const singInRes = await client.mutate({
            variables: {...data},
            mutation: SING_IN_MUTATION
        }).then(result => (
            result.data.logIn
        )).catch(error => { 
            alert('Usuario o contraseña incorrecta');
        });

        setSession(singInRes)
        router.push('/booking');
    }

    const singUp = async (dataUser: any) => {
        const singUpRes = await client.mutate({
            variables: {...dataUser},
            mutation: SING_UP_MUTATION
        }).then(result => (
            result.data.createUser
        )).catch(error => { 
            alert(error.message);
        });

        setSession(singUpRes);
        router.push('/booking');
    }

    const verify = async() => {
        if(!session?.token_access) return false;

        const verifyRes = await client.query({
            query: VERIFY,
            context: {
                headers: {
                    "Authorization": session.token_access
                } 
            }
        }).then(result => (
            result.data.verify
        )).catch(error => { 
            return false;
        });

        return verifyRes;
    }  

    return {
        user,
        setUser,
        session,
        setSession,
        logIn,
        singUp,
        verify
    };
}

export default useUser;