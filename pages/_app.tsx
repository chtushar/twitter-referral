import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { UserProvider } from '@supabase/auth-helpers-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider supabaseClient={supabaseClient}>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
