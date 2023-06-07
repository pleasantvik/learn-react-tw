/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
// const { palette } = require("./src/customPalette");

const PRIMARY = {
  primary: "#0F2657",
  secondary: "#53B6ED",
  tietary: "#9FDFF6",
};

const NEUTRAL = {
  black: "#191D24",
  white: "#FFFFFF",
  border: "#C9CFD9",
  bg: "#F1F4F6",
  bodyText: "#64728C",
  sideBar: "#0F2657",
  greyText: "#8D99AE",
};

const ERROR = {
  150: "#910D2C",
  critical: "#DA1414",
  100: "#EF476F",
  50: "#FBD0DA",
};

const WARNING = {
  150: "#996B00",
  100: "#FFD166",
  50: "#FFF0CC",
};

const TINT = {
  250: "#82CAF2",
  200: "#B1DEF7",
  150: "#DFF1FC",
  100: "#E8F5FD",
  50: "#F1F9FE",
};

const SUCCESS = {
  150: "#065031",
  100: "#0EAD69",
  50: "#D5FCEB",
};
const SHADE = {
  250: "#06293C",
  200: "#0B486A",
  150: "#106898",
  100: "#1587C6",
  50: "#26A3E8",
};

const BORDER = {
  primary: "#CDCED9",
  secondary: "#CDCED9",
};
const TEXT = {
  main: "#393A4A",
};

const palette = {
  brand: {
    ...PRIMARY,
  },
  success: {
    ...SUCCESS,
  },
  text: {
    ...TEXT,
  },
  shade: {
    ...SHADE,
  },
  tint: {
    ...TINT,
  },
  warning: {
    ...WARNING,
  },
  error: {
    ...ERROR,
  },
  neutral: {
    ...NEUTRAL,
  },
  border: {
    ...BORDER,
  },
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        gelion: ["Gelion", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      ...palette,
    },
  },
  plugins: [],
};
