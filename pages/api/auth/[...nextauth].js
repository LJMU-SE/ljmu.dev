// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
    providers: [
        Credentials({
            credentials: {
                otp: { label: "OTP", type: "text" },
            },
            async authorize(credentials, req) {
                // Add your logic to call the API with the provided OTP
                return axios
                    .post(
                        `${req.headers["x-forwarded-proto"]}://${req.headers["x-forwarded-host"]}/api/auth/otp/verify`,
                        {
                            otp: credentials.otp,
                            secret: credentials.secret,
                        }
                    )
                    .then((response) => {
                        if (response.status !== 200) {
                            return Promise.reject(new Error("Invalid OTP"));
                        }

                        const data = response.data;
                        console.log(data);

                        return Promise.resolve({
                            name: "Test User",
                            email: "test@ljmu.dev",
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                        return Promise.reject(new Error("Invalid OTP"));
                    });
            },
        }),
    ],
});
