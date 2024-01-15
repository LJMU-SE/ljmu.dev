import Layout from "@/components/Layout/PageLayout";
import Loader from "@/components/Spinners/Loader";
import crypto from "crypto";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function getServerSideProps(context) {
    const { email, otp, s } = context.query;
    if (!email || !otp || !s) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        };
    }

    // Trim leading and trailing whitespace
    let trimmedEmail = email.trim();

    // Force all characters to lower-case
    let lowerCaseEmail = trimmedEmail.toLowerCase();

    // Hash the final string with SHA256
    let hash = crypto.createHash("sha256");
    hash.update(lowerCaseEmail);
    let hashedEmail = hash.digest("hex");

    return { props: { hash: hashedEmail, otp, secret: s } };
}

export default function AuthFlow({ hash, otp, secret }) {
    const router = useRouter();

    useEffect(() => {
        // Send a request to the API to verify the OTP
        fetch("/api/auth/otp/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                secret,
                otp,
            }),
        })
            .then(async (res) => {
                // Parse the response
                const response = await res.json();

                // Check the status code
                if (res.status === 200) {
                    // Display a success message
                    toast.success(response.message);
                } else {
                    // Display an error message
                    console.log(response.message);
                    toast.error(response.message);
                    router.push("/auth/login");
                }
            })
            .catch((err) => {
                console.error("An unexpected error occurred: ", err);
                toast.error("An unexpected error occurred");
                router.push("/auth/login");
            });
    });

    return (
        <Layout title="Authentication Flow" nav={false} footer={false}>
            <div className="w-full h-screen flex justify-center items-center bg-[url('/img/login/auth_bg.webp')] bg-cover bg-center">
                <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-10">
                    <div className="w-full max-w-md bg-white shadow-lg p-8">
                        <div className="flex justify-center items-center mb-8">
                            <img
                                src={`/api/users/avatar?hash=${hash}`}
                                alt="User Avatar"
                                className={"max-w-16 w-full rounded-full"}
                            />
                        </div>
                        <p className="w-full opacity-75 text-sm text-center">
                            Logging you in...
                        </p>
                        <div className="w-full flex justify-center pt-10 pb-5">
                            <Loader />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
