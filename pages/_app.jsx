import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Toaster
                position="bottom-center"
                toastOptions={
                    {
                        // Define default options
                        // style: {
                        //     background: "#363636",
                        //     color: "#fff",
                        // },
                    }
                }
            />
            <Component {...pageProps} />
        </>
    );
}
