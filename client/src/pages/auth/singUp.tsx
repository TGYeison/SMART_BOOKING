import { Fragment, useContext } from 'react'
import Head from 'next/head'
//Context
import { ContextForm } from '@/hooks/useForm/context'
//Components
import LytAuth from '@/components/layout/auth/auth'
import Button from '@/components/atomic/button/button'
import Form from '@/components/organim/form/form'
import { InputField, Select, Label, CntrlForm, CntrlFormMiddle } from '@/components/atomic/inputField/inputField'

const Gender = [
    { value: '0', label: 'Masculino' },
    { value: '1', label: 'Femenino' }
]

const Role = [
    { value: '0', label: 'Usuario' },
    { value: '1', label: 'Administrador' }
]

const Doc = [
    { value: '0', label: 'CC' },
    { value: '1', label: 'Documento de extranjeria' }
]

export default function Auth() {

    const { setType } = useContext(ContextForm);

    return (
        <Fragment>
            <Head>
                <title>Auth</title>
                <meta name="description" content="User management and login" />
            </Head>
            <LytAuth title="Sin Up">
                <Form>
                    <CntrlFormMiddle>
                        <Label>Name</Label>
                        <InputField
                            type="text"
                            name="name"
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>Last Name</Label>
                        <InputField
                            type="text"
                            name="last_name"
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>E - mail</Label>
                        <InputField
                            type="text"
                            name="e_mail"
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>Phone</Label>
                        <InputField
                            type="phone"
                            name="phone"
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>Gender</Label>
                        <Select
                            name="gender"
                            items={Gender}
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>Role</Label>
                        <Select
                            name="role"
                            items={Role}
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>Fecha de nacimiento</Label>
                        <InputField
                            type="date"
                            name="birth_date"
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>Tipo de documento</Label>
                        <Select
                            name="type_document"
                            items={Doc}
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>Documento</Label>
                        <InputField
                            type="text"
                            name="document"
                        />
                    </CntrlFormMiddle>
                    <CntrlFormMiddle>
                        <Label>Contraseña</Label>
                        <InputField
                            type="password"
                            name="password"
                        />
                    </CntrlFormMiddle>
                    <CntrlForm>
                        <CntrlFormMiddle>
                            <Button
                                text='Atras'
                                theme='dark'
                            />
                        </CntrlFormMiddle>
                        <CntrlFormMiddle>
                            <Button
                                type='submit'
                                text='Sing Up'
                                theme='dark'
                                callback={() => setType(2)}
                            />
                        </CntrlFormMiddle>
                    </CntrlForm>
                </Form>
            </LytAuth>
        </Fragment>
    )
}
