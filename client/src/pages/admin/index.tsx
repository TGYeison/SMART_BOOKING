import { Fragment, useState, Suspense } from 'react'
import Head from 'next/head'

import LytDefault from '@/components/layout/default/default'
import { SidebarNav } from '@/components/organim/sidebar/sidebar'
import { LytPanel, LytHeadPanel, LytPanelAdmin } from '@/components/layout/panel/panel'
import Profile from '@/components/organim/profile/profile'
import List from '@/components/organim/list/list'
import { Modal } from '@/components/organim/modal/modal'
import PrivateRoute from '@/components/organim/auth/auth'
import Form from '@/components/organim/form/form'
import Button from '@/components/atomic/button/button'
import { CntrlForm, CntrlFormMiddle, InputField, Checkbox, Label } from '@/components/atomic/inputField/inputField'

const nav = [
    { label: 'Index', href: '/admin' }
];

const items = [
    { name: 'hotwl1 ', location: 'Bogota' },
    { name: 'hotwl3 ', location: 'Bogota' },
    { name: 'hotwl2 ', location: 'Santa Marta' },
    { name: 'hotwl5 ', location: 'Cucuta' },
    { name: 'hotwl2 ', location: 'Santa Marta' },
    { name: 'hotwl5 ', location: 'Cucuta' },
    { name: 'hotwl4 ', location: 'Bogota' }
]

const FormHotel = () => (
    <Form>
        <CntrlFormMiddle>
            <Label>Nombre</Label>
            <InputField
                type="text"
                name="name"
            />
        </CntrlFormMiddle>
        <CntrlFormMiddle>
            <Label>Ciudad</Label>
            <InputField
                type="text"
                name="location"
            />
        </CntrlFormMiddle>
        <CntrlFormMiddle>
            <Label>Direccion</Label>
            <InputField
                type="text"
                name="address"
            />
        </CntrlFormMiddle>
        <CntrlFormMiddle>
            <Label>Calificacion</Label>
            <InputField
                type="number"
                name="qualify"
            />
        </CntrlFormMiddle>
        <CntrlFormMiddle>
            <Label>Estado</Label>
            <Checkbox
                name="state"
            />
        </CntrlFormMiddle>
        <CntrlForm>
            <CntrlFormMiddle>
                <Button
                    type='submit'
                    text='Sing Up'
                    theme='dark'
                />
            </CntrlFormMiddle>
        </CntrlForm>
    </Form>
);


export default function Admin() {
    const [modal, setModal] = useState<boolean>(false);
    const [titleModal, setTitleModal] = useState<string>('Nuevo');

    return (
        <Suspense fallback={<p>loading...</p>}>
            <PrivateRoute>
                <Fragment>
                    <Head>
                        <title>Administrator</title>
                        <meta name="description" content="Administration panel" />
                    </Head>
                    <LytDefault>
                        <LytHeadPanel>
                            <Fragment />
                            <Profile />
                        </LytHeadPanel>
                        <LytPanel>
                            <SidebarNav
                                items={nav}
                            />
                            <LytPanelAdmin>
                                <></>
                                <List
                                    items={items}
                                    type={0}
                                    title='Hoteles'
                                    labelBtn='Nuevo'
                                    callback={() => setModal(true)}
                                ></List>
                                <List
                                    items={items}
                                    type={0}
                                    title='Habitaciones'
                                    labelBtn='Nuevo'
                                    callback={() => setModal(true)}
                                ></List>
                            </LytPanelAdmin>
                        </LytPanel>
                    </LytDefault>
                    {modal
                        ? <Modal close={setModal} title={titleModal}>
                            <FormHotel/>
                        </Modal>
                        : ''
                    }
                </Fragment>
            </PrivateRoute>
        </Suspense>
    )
}