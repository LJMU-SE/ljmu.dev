import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
    const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

    if (environment !== "PRODUCTION") {
        return (
            <div className="w-full h-[100dvh] flex flex-col items-center justify-center bg-gray-900 text-white select-none p-10 text-center">
                <h1 className="text-white text-4xl font-bold mb-5">
                    This Page is Under Construction
                </h1>
                <p className="text-xl">Please try again later</p>
            </div>
        );
    } else {
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
}
