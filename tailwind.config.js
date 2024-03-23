/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        color1: "#32B7C5",
        color2: "#624BC3",
        color3: "#85E6C5",
        color4: "#F2F2F2",
        color5: "#85E6C5",
        color6: "#FBE09C",
        color7: "#007B88",
      },
      textColor: {
        color1: "#0EFBEB",
        color2: "#624BC3",
        color3: "#747474",
        color4: "#007DFE",
        color5: "#32B7C5",
      },
      borderColor: {
        color1: "#828282",
        color2: "#32B7C5",
      },
      placeholderColor: {
        color1: "#32B7C5",
      },
    },
  },
  plugins: [],
};
