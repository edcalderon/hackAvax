import { Center } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
//import { Auth } from '@saas-ui/auth'
import { BackgroundGradient } from "components/gradients/background-gradient";
import { PageTransition } from "components/motion/page-transition";
import { Section } from "components/section";
import { NextPage } from "next";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const Login: NextPage = () => {
  const { data: session } = useSession();
  console.log(session)

  useEffect(() => {
    if (session == null) return;
    console.log("session.jwt", session);
  }, [session]);

  return (
    <Section height="calc(100vh - 200px)" innerWidth="container.sm">

      <Center height="100%" pt="20">
        <PageTransition width="100%">
          <h1>{session ? "Authenticated" : "You Not Authenticated, please logIn"}</h1>
          {session && (
            <div style={{ marginBottom: 10 }}>
              <h3>Session Data id: {session.id} </h3>
              <div>Email: {session.user.email}</div>
              <div>JWT from Strapi: {session.jwt}</div>
            </div>
          )}
          {session ? (
            <button onClick={(e) => signOut()}>Sign out</button>
          ) : (
            <Link href="/login">
              <button>Sign In</button>
            </Link>
          )}
        </PageTransition>
        <PageTransition width="100%">
          <h1>{session ? "Authenticated" : "You Not Authenticated, please logIn"}</h1>
          {session && (
            <div style={{ marginBottom: 10 }}>
              <h3>Session Data id: {session.id} </h3>
              <div>Email: {session.user.email}</div>
              <div>JWT from Strapi: {session.jwt}</div>
            </div>
          )}
          {session ? (
            <button onClick={(e) => signOut()}>Sign out</button>
          ) : (
            <Link href="/login">
              <button>Sign In</button>
            </Link>
          )}
        </PageTransition>
      </Center>
    </Section>
  );
};

export default Login;

export const getStaticProps = () => {
  return {
    props: {
      header: {
        display: 'none',
      },
      footer: {
        display: 'none',
      },
      webNav:{
        display: 'none',
      }
    },
  }
}
