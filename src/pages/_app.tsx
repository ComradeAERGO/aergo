import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
