export default (req, res) => {
    // Get email from request body
    const { hash } = req.query;

    // If no email is provided, return an error
    if (!hash)
        return res.status(400).json({ message: "Hash is a required field" });

    // Redirect to the Gravatar image for the hashed email
    res.redirect(`https://www.gravatar.com/avatar/${hash}?d=retro`);
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const runtime = "edge";
