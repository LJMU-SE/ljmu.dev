import BaseButton from "@/components/Buttons/Base";
import Layout from "@/components/Layout/PageLayout";
import crypto from "crypto";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default function Login() {
    const [hasOTP, setHasOTP] = useState(false);
    const [secret, setSecret] = useState(null);
    const buttonRef = useRef();
    const emailRef = useRef();
    const otpRef = useRef();
    const imgRef = useRef();

    /**
     * Get an OTP for the user
     */
    async function getOTP() {
        // Disable the button to prevent spamming
        buttonRef.current.disabled = true;

        // Send a request to the API to get an OTP
        await fetch("/api/auth/otp/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailRef.current.value,
            }),
        })
            .then(async (res) => {
                // Parse the response
                const response = await res.json();

                // Check the status code
                if (res.status === 200) {
                    // Set the secret
                    setSecret(response.secret);

                    // Set the OTP state to true
                    setHasOTP(true);

                    // Set the border radius of the image to 100%
                    imgRef.current.style.borderRadius = "100%";
                } else {
                    // Display an error message
                    toast.error(response.message);
                }
            })
            .catch((err) => {
                console.error("An unexpected error occurred: ", err);
            })
            .finally(() => {
                // Enable the button again
                buttonRef.current.disabled = false;
            });
    }

    /**
     * Verify the OTP entered by the user
     */
    async function verifyOTP() {
        // Disable the button to prevent spamming
        buttonRef.current.disabled = true;

        signIn("credentials", {
            otp: otpRef.current.value,
            secret,
            redirect: false,
        })
            .then((res) => {
                // Display a success message
                console.log(res);
                if (!res.ok) {
                    return toast.error(res.error);
                } else {
                    toast.success("Login Successful");
                }
            })
            .catch((err) => {
                // Display an error message
                toast.error("An unexpected error occurred while logging in");
                console.error(err);
            })
            .finally(() => {
                // Enable the button again
                buttonRef.current.disabled = false;
            });

        // Send a request to the API to verify the OTP
        // await fetch("/api/auth/otp/verify", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         secret,
        //         otp: otpRef.current.value,
        //     }),
        // })
        //     .then(async (res) => {
        //         // Parse the response
        //         const response = await res.json();

        //         // Check the status code
        //         if (res.status === 200) {
        //             // Display a success message
        //             toast.success(response.message);
        //         } else {
        //             // Display an error message
        //             toast.error(response.message);
        //         }
        //     })
        //     .catch((err) => {
        //         console.error("An unexpected error occurred: ", err);
        //     })
        //     .finally(() => {
        //         // Enable the button again
        //         buttonRef.current.disabled = false;
        //     });
    }

    /**
     *
     * @returns {string} A hashed email address ready to be used by gravatar
     */
    function getGravatarHash() {
        const email = emailRef.current.value;

        // Trim leading and trailing whitespace
        let trimmedEmail = email.trim();

        // Force all characters to lower-case
        let lowerCaseEmail = trimmedEmail.toLowerCase();

        // Hash the final string with SHA256
        let hash = crypto.createHash("sha256");
        hash.update(lowerCaseEmail);
        let hashedEmail = hash.digest("hex");

        // Return the hashed email
        return hashedEmail;
    }

    return (
        <Layout title="Login" nav={false} footer={false}>
            <div className="w-full h-screen flex justify-center items-center bg-[url('/img/login/auth_bg.webp')] bg-cover bg-center">
                <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-10">
                    <div className="w-full max-w-md bg-white shadow-lg p-8">
                        <div className="flex justify-center items-center mb-8">
                            <img
                                src={
                                    hasOTP
                                        ? `/api/users/avatar?hash=${getGravatarHash()}`
                                        : "/img/logos/dark.webp"
                                }
                                alt="SE Logo"
                                className={"max-w-16 w-full"}
                                ref={imgRef}
                            />
                        </div>
                        <h1>Log In</h1>
                        <p className="w-full opacity-75 text-sm">
                            {hasOTP
                                ? `Enter the OTP sent to ${emailRef.current.value}`
                                : "Enter the email addressed used at an LJMU SE event"}
                        </p>
                        <div
                            className={`${
                                hasOTP ? "h-0" : "h-16"
                            } transition-all overflow-hidden flex items-center`}
                        >
                            <input
                                className="w-full border border-gray-300 p-2 my-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
                                type="email"
                                placeholder="Email"
                                ref={emailRef}
                                required
                            />
                        </div>
                        <div
                            className={`${
                                hasOTP ? "h-16" : "h-0"
                            } transition-all overflow-hidden flex items-center`}
                        >
                            <input
                                className="w-full border border-gray-300 p-2 my-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
                                type="text"
                                maxLength={6}
                                placeholder="Enter your OTP"
                                ref={otpRef}
                                required
                            />
                        </div>
                        <BaseButton
                            width={"w-full"}
                            rounded={"rounded-none"}
                            bg={"bg-black"}
                            text={"text-white"}
                            btnRef={buttonRef}
                            onClick={hasOTP ? verifyOTP : getOTP}
                        >
                            {hasOTP ? "Verify OTP" : "Log In"}
                        </BaseButton>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
