/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",
  './app/**/*.{html,js,jsx}',
  './components/**/*.{html,js,jsx}',
  './sections/**/*.{html,js,jsx}',
  './styles/**/*.{js,jsx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1d254d",
        // primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        'secondary-background' : '#7b7b7b29',
        'tertiary-background' : '#7b7b7b50',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};

