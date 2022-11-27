/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        lofi: {
          primary: "#808089",
          "primary-focus": "#737373",
          "primary-content": "#f2f2f3",

          secondary: "#4d4d4d",
          "secondary-focus": "#404040",
          "secondary-content": "#f2f2f3",

          accent: "#1a1a1a",
          "accent-focus": "#0d0d0d",
          "accent-content": "#f2f2f3",

          neutral: "#f2f2f3",
          "neutral-focus": "#e4e4e7",
          "neutral-content": "#4d4d4d",

          "base-100": "#ffffff",
          "base-200": "#ffffff",
          "base-300": "#ffffff",
          "base-content": "#7d7d7d",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",

          "--animation-btn": "0",
          "--animation-input": "0",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
