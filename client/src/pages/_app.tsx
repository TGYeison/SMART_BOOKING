import '@/styles/style.scss'
import type { AppProps } from 'next/app'
import { ProviderForm } from '@/hooks/useForm/context';
import { ProviderUser } from '@/hooks/useUser/context';
import { ApolloProvider} from '@apollo/client';
import client from '@/utils/client_apollo';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ProviderUser>
        <ProviderForm>
          <Component {...pageProps} />
        </ProviderForm>
      </ProviderUser>
    </ApolloProvider>
  );
}
