import speakeasy from "speakeasy";

export default (req, res) => {
    return new Promise((resolve, reject) => {
        const { secret, otp } = req.body;

        // If no secret or OTP is provided, return an error
        if (!secret || !otp) {
            res.status(400).json({
                message: "Secret and OTP are required fields",
            });
            resolve();
        } else {
            // Verify OTP against secret
            const verified = speakeasy.totp.verify({
                secret,
                encoding: "base32",
                token: otp,
                window: 10,
            });

            // If OTP is invalid, return an error
            if (!verified) {
                res.status(400).json({ message: "Invalid OTP" });
                resolve();
            } else {
                // If OTP is valid, return a success message
                res.status(200).json({ message: "OTP Verified" });
                resolve();
            }
        }
    });
};
