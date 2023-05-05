import { Fragment } from 'react'
import Head from 'next/head'

import LytAuth from '@/components/layout/auth'
import { CntMainStatic } from '@/components/atomic/container/container'

export default function Auth() {
  return (
    <Fragment>
      <Head>
        <title>Auth</title>
        <meta name="description" content="User management and login" />
      </Head>
      <LytAuth title="Sin Up">
        <CntMainStatic>
          <h5>Como esta</h5>
        </CntMainStatic>
      </LytAuth>
    </Fragment>
  )
}
