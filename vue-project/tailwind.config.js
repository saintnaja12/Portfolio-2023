/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              "a-yellow-ff9100": "#ff9100",
          },
          fontFamily: {
              main: ["main"],
          },
          fontSize: {
              10: '10px',
              12: '12px',
              14: '14px',
              16: '16px',
              18: '18px',
              20: '20px',
              22: '22px',
              24: '24px',
              26: '26px',
              28: '28px',
          },
          screens: {
              usm: "528px",
          },
          spacing: {
              "10px": "10px",
          },
          borderRadius: {
              5: "5px",
          },
      },
  },
  plugins: [],
};
