/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        form_light: "5px 11px 27px 3px #ed64a6, -12px 1px 34px 16px #edf2f7",
        form_dark: "5px 4px 13px 0px #38a169, -6px 1px 14px 0px #edf2f7",
      },
      padding: {
        '6p': '6%', 
        '8p': '8%', 
        '2p': '2%',
      },
      screens: {
        '4xl': '2400px', // Example value, adjust as needed
      },

    },
  },
  plugins: [],
};
