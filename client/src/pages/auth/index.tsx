import { Fragment, useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
//Context
import { ContextForm } from '@/hooks/useForm/context'
//Component
import Form from '@/components/organim/form/form'
import LytAuth from '@/components/layout/auth/auth'
import Button from '@/components/atomic/button/button'
import { CntrlForm, CntrlFormMiddle, InputField, Label } from '@/components/atomic/inputField/inputField'

export default function Auth() {
  const router = useRouter();

  const { setType } = useContext(ContextForm);
  
  return (
    <Fragment>
      <Head>
        <title>Auth</title>
        <meta name="description" content="User management and login" />
      </Head>
      <LytAuth title="Sin In">
        <Form>
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
                callback={()=> router.push('/')}
              />
            </CntrlFormMiddle>
            <CntrlFormMiddle>
              <Button
                type='submit'
                text='Log In'
                theme='dark'
                callback={()=>setType(1)}
              />
            </CntrlFormMiddle>
          </CntrlForm>
        </Form>
      </LytAuth>
    </Fragment>
  )
}
