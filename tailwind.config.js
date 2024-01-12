/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
            boxShadow: {
                header: "0px -1px 0px hsla(0,0%,100%,.2);",
            },
        },
    },
    plugins: [],
};
