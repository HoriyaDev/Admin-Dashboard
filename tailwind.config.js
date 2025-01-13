const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
       custom: { 'min': '1440px', 'max': '2559px' },
      }
    },
  },
  plugins: [],
});
