import '@/styles/style.scss'
import type { AppProps } from 'next/app'
import { ProviderForm } from '@/hooks/useForm/context';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ProviderForm>
      <Component {...pageProps} />
    </ProviderForm>
  );
}
