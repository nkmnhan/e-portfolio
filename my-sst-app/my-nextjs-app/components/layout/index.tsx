import Head from "next/head";
import Footer from "../footer";
import NavBar from "../nav-bar";
type LayoutProps = {
  children: React.ReactNode;
};
import { useRouter } from "next/router";

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  return (
    <>
      <Head>
        <title>Tony (NKMNHAN)</title>
      </Head>
      <NavBar isHomePage={isHomePage} />
      <main>
        <div className="bg-white dark:bg-black">{children}</div>
      </main>
      <Footer isHomePage={isHomePage}/>
    </>
  );
}
