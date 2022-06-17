module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 13s linear infinite",
        marquee2: "marquee 13s linear infinite",
      },
      keyframes: {
        marquee: {
          "100%": { transform: "translate(-100%,0)" },
        },
        marquee2: {
          "0": { transform: "translate(-10%,0)" },
        },
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        h: "4vw",
        p: "2vw",
      },
      fontFamily: {
        paci: "Pacifico",
        josef: "Josefin Sans",
      },
      backgroundImage: {
        bgs: "url('C:Trash/Code/ReactJs/sadam/src/Images/img1.jpg')",
      },
    },
  },
  plugins: [],
};
