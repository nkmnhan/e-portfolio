import Head from "next/head";
import HamburgerBtn from "../hamburgur";
import NavBar from "../nav-bar";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Tony (NKMNHAN)</title>
      </Head>
      <NavBar/>
      <main>
        <div className="bg-white dark:bg-black">{children}</div>
      </main>
    </>
  );
}
