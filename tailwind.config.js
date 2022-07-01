const spacing = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.25: "0.563rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  3.75: "0.938rem",
  4: "1rem",
  4.5: "1.125rem",
  5: "1.25rem",
  5.5: "1.375rem",
  6: "1.5rem",
  6.5: "1.625rem",
  7: "1.75rem",
  7.5: "1.875rem",
  8: "2rem",
  8.5: "2.125rem",
  8.75: "2.188rem",
  9: "2.25rem",
  9.5: "2.375rem",
  10: "2.5rem",
  10.5: "2.625rem",
  11: "2.75rem",
  11.5: "2.875rem",
  12: "3rem",
  12.5: "3.125rem",
  13: "3.25rem",
  13.5: "3.375rem",
  13.75: "3.438rem",
  14: "3.5rem",
  14.5: "3.625rem",
  15: "3.75rem",
  15.5: "3.875rem",
  16: "4rem",
  17: "4.25rem",
  18: "4.5rem",
  19: "4.75rem",
  20: "5rem",
  22: "5.5rem",
  22.5: "5.625rem",
  24: "6rem",
  26: "6.5rem",
  28: "7rem",
  30: "7.5rem",
  32: "8rem",
  34: "8.5rem",
  35: "8.75rem",
  36: "9rem",
  38: "9.5rem",
  40: "10rem",
  42: "10.5rem",
  44: "11rem",
  46: "11.5rem",
  48: "12rem",
  50: "12.5rem",
  52: "13rem",
  54: "13.5rem",
  55: "13.75rem",
  56: "14rem",
  58: "14.5rem",
  60: "15rem",
  62: "15.5rem",
  64: "16rem",
  66: "16.5rem",
  68: "17rem",
  70: "17.5rem",
  72: "18rem",
  72.5: "18.125rem",
  74: "18.5rem",
  76: "19rem",
  78: "19.5rem",
  80: "20rem",
  82: "20.5rem",
  84: "21rem",
  86: "21.5rem",
  88: "22rem",
  90: "22.5rem",
  92: "23rem",
  94: "23.5rem",
  96: "24rem",
};

const percentages = {
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        12: "repeat(12, minmax(0, 1fr))",
      },

      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },

      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },

      // NOTE: Extended 'blur' adding a very small size.
      blur: {
        xs: "2px",
      },

      backdropBlur: {
        xs: "2px",
      },

      // NOTE: Extended 'min-h' classes with all spacing and percentage values.
      minHeight: {
        ...spacing,
        ...percentages,
      },

      // NOTE: Extended 'max-h' classes with all spacing and percentage values.
      maxHeight: {
        ...spacing,
        ...percentages,
      },

      // NOTE: Extended 'min-w' classes with all spacing and percentage values.
      minWidth: {
        ...spacing,
        ...percentages,
      },

      // NOTE: Extended 'max-w' classes with all spacing and percentage values.
      maxWidth: {
        ...spacing,
        ...percentages,
      },
    },

    colors: {
      // Base colors needed by Tailwind.
      transparent: "rgba(255, 255, 255, 0)",
      current: "currentColor",
      black: "#000",
      white: "#fff",

      // Neutral gray shades.
      blue: "#0085FF",
      deepblue: "#0066FF",
      lightblue: "#C1E0FC",
      fadeblue: "#C2E2FF",

      // State Colors.
      info: "#3DA1FD",
      success: "#008800",
      warning: "#E2B93B",
      error: "#EB5757",

      // black shades.
      black1: "#092C4C",
      black2: "#244462",
      black3: "#3D5B76",
      black4: "#033B6F",
      black5: "#1A282B",

      // Gray shades.
      gray1: "#757171",
      gray2: "#828282",
      gray3: "#BDBDBD",
      gray4: "#E0E0E0",
      gray5: "#E7ECE8",
      gray6: "#EBF1F4",
      gray7: "#F1F7FA",

      // Green Shades,
      green1: "#27AEAE",

      // teal
      teal1: "#F1F7FA",
    },

    spacing,

    borderRadius: {
      none: "0px",
      sm: "2px",
      DEFAULT: "4px",
      lg: "8px",
      xl: "16px",
      full: "50%",
    },

    fontFamily: {
      sans: [
        '"Source Sans Pro"',
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },

    fontSize: {
      "2xs": ["10px", { lineHeight: "14px" }],
      xs: ["12px", { lineHeight: "16.8px" }],
      sm: ["14px", { lineHeight: "19.6px" }],
      base: ["16px", { lineHeight: "22.4px" }],
      lg: ["18px", { lineHeight: "25.2px" }],
      xl: ["20px", { lineHeight: "28px" }],
      "2xl": ["24px", { lineHeight: "26.4px" }],
      "4xl": ["32px", { lineHeight: "19.6px" }],
    },
  },
};
