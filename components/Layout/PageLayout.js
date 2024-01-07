import { Inter } from "next/font/google";
import NavBar from "./Navbar";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/img/icons/light.jpg",
                href: "/img/icons/light.jpg",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/img/icons/dark.jpg",
                href: "/img/icons/dark.jpg",
            },
        ],
    },
};

export default function Layout({ children, fixedNav = false }) {
    return (
        <div className={`${inter.className}`}>
            <NavBar fixed={fixedNav} />
            <main className={`main ${fixedNav ? "mt-14 md:mt-24" : ""}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
