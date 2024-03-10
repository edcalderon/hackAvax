import type { AppProps } from "next/app";
import { SaasProvider } from "@saas-ui/react";
import { SessionProvider } from "next-auth/react";
import { Layout } from "components/layout";


import theme from "../theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { header, footer , webNav, landing} = pageProps;

  return (
    <SaasProvider theme={theme}>
      <link
        rel="icon"
        href="/static/logoUrbanik/logoApp.png"
        type="image/png"
      />
      <SessionProvider session={session}>
          <Layout headerProps={header} footerProps={footer} webNavProps={webNav} landingProps={landing}>
            <Component {...pageProps} />
          </Layout>
      </SessionProvider>
    </SaasProvider>
  );
}

export default MyApp;
