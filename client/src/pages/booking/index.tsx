import { Fragment, useState } from 'react'
import Head from 'next/head'

import LytDefault from '@/components/layout/default/default'
import { LytHeadPanel, LytPanelSearch } from '@/components/layout/panel/panel';
import Button from '@/components/atomic/button/button';
import { InputField, CntrlFormMiddle, Select, CntrlForm, Label } from '@/components/atomic/inputField/inputField';
import { Modal } from '@/components/organim/modal/modal';
import { Sidebar } from '@/components/organim/sidebar/sidebar';
import Profile from '@/components/organim/profile/profile';
import List from '@/components/organim/list/list';
import Form from '@/components/organim/form/form';
import PrivateRoute from '@/components/organim/auth/auth';


const items = [
    {
        title: 'Havire wreu',
        type_room: 'premium',
        max_people: 9,
        hotel: 'risada',
        price: 20134
    }
]

const FormBooking = () => {

    return (
        <Fragment>
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
                    <Label>E-mail</Label>
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
                    <Label>Ingreso</Label>
                    <InputField
                        type="date"
                        name="emtry_date"
                    />
                </CntrlFormMiddle>
                <CntrlFormMiddle>
                    <Label>Salida</Label>
                    <InputField
                        type="date"
                        name="exit_date"
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
                            text='Enviar'
                            theme='dark'
                            type="submit"
                        />
                    </CntrlFormMiddle>
                </CntrlForm>
            </Form>
        </Fragment>
    );
}

export default function Booking() {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <PrivateRoute>
            <Fragment>
                <Head>
                    <title>Search</title>
                    <meta name="description" content="Administration panel" />
                </Head>
                <LytDefault>
                    <LytHeadPanel>
                        <InputField
                            type="text"
                            placeholder="Search..."
                        />
                        <Profile />
                    </LytHeadPanel>
                    <LytPanelSearch>
                        <Sidebar title="Filtros">
                            <CntrlForm>
                                <Label>Ingreso</Label>
                                <InputField type="date" name="entry_date">
                                </InputField>
                            </CntrlForm>
                            <CntrlForm>
                                <Label>Salida</Label>
                                <InputField type="date" name="exit_date">
                                </InputField>
                            </CntrlForm>
                            <CntrlForm>
                                <Label>Cand. de personas</Label>
                                <InputField type="number">
                                </InputField>
                            </CntrlForm>
                            <CntrlForm>
                                <Label>Ciudad</Label>
                                <InputField type="text">
                                </InputField>
                            </CntrlForm>
                            <CntrlForm>
                                <Button
                                    text='Filtrar'
                                    theme='light'
                                />
                            </CntrlForm>
                        </Sidebar>
                        <List items={items} type={1} callback={() => setModal(true)} />
                    </LytPanelSearch>
                </LytDefault>
                {modal
                    ? <Modal
                        title='Reserva'
                        close={setModal}
                    >
                        <FormBooking />
                    </Modal>
                    : ''
                }
            </Fragment>
        </PrivateRoute>
    )
}