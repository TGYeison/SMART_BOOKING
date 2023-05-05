import { Fragment } from 'react'
import Head from 'next/head'

import LytDefault from '@/components/layout/default'
import LytPanel from '@/components/layout/panel';
import { CntMainScroll } from '@/components/atomic/container/container'

export default function Admin() {
    return (
        <Fragment>
            <Head>
                <title>Administrator</title>
                <meta name="description" content="Administration panel" />
            </Head>
            <LytDefault>
                <label>User</label>
                <LytPanel>
                    <h2>Sidebar</h2>
                    <h2>Content</h2>
                </LytPanel>
            </LytDefault>
        </Fragment>
    )
}