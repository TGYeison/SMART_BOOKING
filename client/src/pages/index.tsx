import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import LytDefault from '@/components/layout/default/default'
import { CntMainStatic } from '@/components/atomic/container/container'
import Button from '@/components/atomic/button/button'
import Banner from '@/components/organim/banner/banner'

export default function Home() {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generate hotel reservations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LytDefault>
        <Fragment />
        <CntMainStatic>
          <Banner 
            title="Descubre tu hotel ideal"
            description="ingresa a nuestro buscador para encontrar el hoter ideal para ti"
          >
            <Button 
              text='Sing In' 
              theme='dark' 
              callback={()=> router.push('/auth')}
            />
            <Button 
              text='Sing Up' 
              theme='light'
              callback={()=> router.push('/auth/singUp')}
            />
          </Banner>
        </CntMainStatic>
      </LytDefault>
    </Fragment>
  )
}
