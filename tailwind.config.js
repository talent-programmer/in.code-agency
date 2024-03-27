/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'syne': ['Syne', 'Inter'],
        'Grotesk': ['SharpGroteskBook25-Regular', 'SharpGroteskMedium25-Regular'],
        'Jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'Petit' : ['Petit Formal Script', 'sans-serif']
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        xxxl:"1920px"
      },
    },
  },
  plugins: [],
};
