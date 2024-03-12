const colors = {
  primary: {
    50: "#EBCCD0",
    100: "#E0B9BE",
    200: "#C9949B",
    300: "#B37079",
    400: "#9C4B56",
    500: "#862633",
    600: "#6B1E29",
    700: "#50171F",
    800: "#360F14",
    900: "#1B080A",
    950: "#0D0405",
  },
  gray: {
    white: "#ffffff", // Gray-01
    25: "#f2f2f2", // Gray-02
    50: "#e5e5e5", // Gray-03
    100: "#d8d8d8", // Gray-04
    200: "#cbcbcb", // Gray-05
    300: "#b2b2b2", // Gray-06
    400: "#989898", // Gray-07
    500: "#7e7e7e", // Gray-08
    600: "#656565", // Gray-09
    700: "#4c4c4c", // Gray-10
    800: "#323232", // Gray-11
    900: "#191919", // Gray-12
    950: "#0d0d0d", // Gray-13
    black: "#000000", // Gray-14
  },
  message: {
    error: "#f04438",
    success: "#12b76a",
  },
  etc: {
    transparentBlack: "#000000cc",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("./tools/plugins/tailwind")],
  safelist: [
    "after:pb-[50%]",
    "after:pb-[75%]",
    "after:pb-[100%]",
    "max-w-[none]",
    "max-h-[none]",
    "max-w-full",
    "max-h-full",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: "600px",
      md: "1024px",
      lg: "1440px",
    },
    fontFamily: {
      sans: ["Pretendard"],
    },
    fontSize: {
      "10/regular": ["10px", { fontWeight: 400, lineHeight: "130%" }],
      "13/semi-bold": ["13px", { fontWeight: 600, lineHeight: "130%" }],
      "13/regular": ["13px", { fontWeight: 400, lineHeight: "130%" }],
      "16/semi-bold": ["16px", { fontWeight: 600, lineHeight: "130%" }],
      "16/regular": ["16px", { fontWeight: 400, lineHeight: "130%" }],
      "20/semi-bold": ["20px", { fontWeight: 600, lineHeight: "130%" }],
      "20/regular": ["20px", { fontWeight: 400, lineHeight: "130%" }],
      "30/semi-bold": ["30px", { fontWeight: 600, lineHeight: "130%" }],
      "30/bold": ["30px", { fontWeight: 700, lineHeight: "130%" }],
      "60/bold": ["60px", { fontWeight: 700, lineHeight: "130%" }],
    },
    extend: {
      colors: {
        ...colors,
        theme: {
          lightGray: colors.gray[200],
          gray: colors.gray[400],
          white: colors.gray.white,
          primary: colors.primary[600],
          black: colors.gray.black,
          blackTransparent: colors.etc.transparentBlack,
          success: colors.message.success,
          error: colors.message.error,
        },
      },
    },
  },
};
