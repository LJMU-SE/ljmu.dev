import speakeasy from "speakeasy";
import nodemailer from "nodemailer";
import { renderToString } from "react-dom/server";
import OTPTemplate from "@/templates/OTP";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export default (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Verify transporter configuration
            await transporter.verify();
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Error sending OTP",
                error: "An unexpected server error has occurred. If you are a developer, please check the console for more details.",
            });
            reject("Unable to verify mail transport connection");
        }

        // Get email from request body
        const userEmail = req.body.email;

        // Check if email is provided
        if (!userEmail) {
            res.status(400).json({ message: "Email is a required field" });
            reject("Email not provided");
        }

        // TODO - Check if email is valid against the database, returning an appropriate error if not (404)

        // Generate secret and OTP
        const secret = speakeasy.generateSecret();
        const otp = speakeasy.totp({
            secret: secret.base32,
            encoding: "base32",
            window: 10,
        });

        // Log OTP generation
        const mailOptions = {
            from: "LJMU SE Team<updates@ljmu.dev>",
            to: userEmail,
            subject: `Your One-Time Password is ${otp}`,
            html: renderToString(
                <OTPTemplate
                    otp={otp}
                    secret={secret.base32}
                    email={userEmail}
                />
            ),
        };

        // Send email to user
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                // Log error
                console.log(err);

                // Return error to client
                res.status(500).json({
                    message: "Error sending OTP",
                    error: "There was an error sending the OTP to your email address. Please try again later.",
                });
                reject(`There was an error sending the OTP to ${userEmail}`);
            } else {
                // Return secret to client
                res.status(200).json({
                    message: "OTP Generated and sent to entered email address",
                    secret: secret.base32,
                });
                resolve();
            }
        });
    });
};
