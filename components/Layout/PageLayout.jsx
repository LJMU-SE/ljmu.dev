import { Inter } from "next/font/google";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = (context) => ({
    props: { host: context.req.headers.host || null },
});

export default function Layout({
    children,
    host,
    fixedNav = false,
    name,
    description,
    image,
}) {
    const title = name
        ? `${name} | LJMU Software Engineering Team`
        : "LJMU Software Engineering Team";

    const metaDescription = description || "No Description Provided";
    const metaImage = image || "https://www.ljmu.dev/img/metadata/og-large.png";

    const router = useRouter();
    const url = `https://${host || "ljmu.dev"}${router.asPath}`;

    return (
        <div className={`${inter.className}`}>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemProp="name" content={title} />
                <meta itemProp="description" content={metaDescription} />
                <meta itemProp="image" content={metaImage} />
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaImage} />
                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaImage} />
                <link
                    rel="icon"
                    type="image/webp"
                    href="/img/icons/light.webp"
                    media="(prefers-color-scheme: light)"
                />
                <link
                    rel="icon"
                    type="image/webp"
                    href="/img/icons/dark.webp"
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
