import { Fragment, useState } from 'react'
import Head from 'next/head'

import LytDefault from '@/components/layout/default/default'
import { SidebarNav } from '@/components/organim/sidebar/sidebar'
import { LytPanel, LytHeadPanel, LytPanelAdmin } from '@/components/layout/panel/panel'
import Profile from '@/components/organim/profile/profile'
import List from '@/components/organim/list/list'
import { Modal } from '@/components/organim/modal/modal'

const nav = [
    {label: 'Index', href: '/admin'}
];

const items = [
    {name:'hotwl1 ',  location: 'Bogota'},
    {name:'hotwl3 ',  location: 'Bogota'},
    {name:'hotwl2 ',  location: 'Santa Marta'},
    {name:'hotwl5 ',  location: 'Cucuta'},
    {name:'hotwl2 ',  location: 'Santa Marta'},
    {name:'hotwl5 ',  location: 'Cucuta'},
    {name:'hotwl4 ',  location: 'Bogota'}
]


export default function Admin() {
    const [modal, setModal] = useState<boolean>(false);
    const [titleModal, setTitleModal] = useState<string>('Nuevo');

    return (
        <Fragment>
            <Head>
                <title>Administrator</title>
                <meta name="description" content="Administration panel" />
            </Head>
            <LytDefault>
                <LytHeadPanel>
                    <Fragment/>
                    <Profile/>
                </LytHeadPanel>
                <LytPanel>
                    <SidebarNav
                        items={nav}
                    />
                    <LytPanelAdmin>
                        <h1>head</h1>
                        <List 
                            items={items} 
                            type={0} 
                            title='Hoteles' 
                            labelBtn='Nuevo'
                            callback={()=>setModal(true)}
                        ></List>
                        <List 
                            items={items} 
                            type={0} 
                            title='Habitaciones' 
                            labelBtn='Nuevo'
                            callback={()=>setModal(true)}
                        ></List>
                    </LytPanelAdmin>
                </LytPanel>
            </LytDefault>
            {modal
                ? <Modal close={setModal} title={titleModal}>

                </Modal>
                : ''
            }
        </Fragment>
    )
}