import { Fragment } from 'react'
import Head from 'next/head'

import LytAuth from '@/components/layout/auth'
import Button from '@/components/atomic/button/button'
import { CntrlForm, CntrlFormMiddle, InputField, Label } from '@/components/atomic/inputField/inputField'

export default function Auth() {
  return (
    <Fragment>
      <Head>
        <title>Auth</title>
        <meta name="description" content="User management and login" />
      </Head>
      <LytAuth title="Sin In">
        <CntrlForm>
          <Label>Name</Label>
          <InputField
            type="text"
            name="name"
          />
        </CntrlForm>
        <CntrlForm>
          <Label>Password</Label>
          <InputField
            type="password"
            name="password"
          />
        </CntrlForm>
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
