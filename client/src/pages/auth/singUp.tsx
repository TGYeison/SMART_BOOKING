import { Fragment } from 'react'
import Head from 'next/head'

import LytAuth from '@/components/layout/auth/auth'
import Button from '@/components/atomic/button/button'
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
    return (
        <Fragment>
            <Head>
                <title>Auth</title>
                <meta name="description" content="User management and login" />
            </Head>
            <LytAuth title="Sin Up">
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
                        items={Gender}
                    />
                </CntrlFormMiddle>
                <CntrlFormMiddle>
                    <Label>Role</Label>
                    <Select
                        items={Role}
                    />
                </CntrlFormMiddle>
                <CntrlFormMiddle>
                    <Label>Role</Label>
                    <InputField
                        type="date"
                        name="birth_date"
                    />
                </CntrlFormMiddle>
                <CntrlFormMiddle>
                    <Label>Role</Label>
                    <Select
                        name="type_document"
                        items={Doc}
                    />
                </CntrlFormMiddle>
                <CntrlFormMiddle>
                    <Label>Role</Label>
                    <InputField
                        type="date"
                        name="birth_date"
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
                            text='Log In'
                            theme='dark'
                        />
                    </CntrlFormMiddle>
                </CntrlForm>
            </LytAuth>
        </Fragment>
    )
}
