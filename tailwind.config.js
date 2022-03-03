module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rojito: "#ff141e",
        rojitoSubidito: "#C40D15",
        azulito: "#002360",
        grisesito: "#F6F6F6",
        grisesitoFuertito: "#E5E7EB",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      width: {
        card1: "35%",
      },
    },
  },
  plugins: [],
};
