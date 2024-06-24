/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/public/bannerBg.jpg')",
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
