import { Inter } from "next/font/google";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, fixedNav = false, name }) {
    return (
        <div className={`${inter.className}`}>
            <Head>
                <title>
                    {name
                        ? `${name} | LJMU Software Engineering Team`
                        : "LJMU Software Engineering Team"}
                </title>
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/icons/light.png"
                    media="(prefers-color-scheme: light)"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/icons/dark.png"
                    media="(prefers-color-scheme: dark)"
                />
            </Head>
            <NavBar fixed={fixedNav} />
            <main className={`main ${fixedNav ? "mt-14 md:mt-24" : ""}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
