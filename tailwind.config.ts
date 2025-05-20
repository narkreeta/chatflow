const tailwindConfig = {
    contentPaths: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    themeSettings: {
        extendSettings: {
            backgroundImageOptions: {
                gradientRadial: "radial-gradient(var(--tw-gradient-stops))",
                gradientConic: "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colorPalette: {
                cfPrimary: "#1a222b",
                cfSecondary: "#57A6A1"
            }
        },
    },
    pluginList: [],
};
export default tailwindConfig;