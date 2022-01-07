const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            ...defaultTheme.colors,
            orange: colors.orange,
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                md: "2rem",
                lg: "3rem",
                xl: "6rem",
            },
        },

        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
                title: ["Roboto Slab"],
            },
        },
    },
    variants: {
        extend: {
            opacity: ["responsive", "hover", "focus", "disabled"],
        },
    },

    plugins: [require("@tailwindcss/forms")],
}
