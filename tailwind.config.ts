import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          "main": "rgba(210, 193, 175, 1)",
          "bgblack":"rgba(11, 12, 12, 1)",
        },
      },
    },
    fontFamily: {
      saira: ["Saira Condensed"],
      inter: ["Inter"],
      sansita: ["Sansita"],
      prata: ["Prata"],
      popin: ["Poppins"],
    },
  },
  plugins: [],
};
export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/*/.{js,ts,jsx,tsx,mdx}",
//     "./components/*/.{js,ts,jsx,tsx,mdx}",
//     "./app/*/.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         custom: {
//           main: "rgba(210, 193, 175, 1)",
//           bgblack: "rgba(11, 12, 12, 1)",
//         },
//       },
//     },
//     fontFamily: {
//       saira: ["Saira Condensed"],
//       inter: ["Inter"],
//       sansita: ["Sansita"],
//       prata: ["Prata"],
//       popin: ["Poppins"],
//       santeheap: ["Koh Santepheap"],
//       vibes: ["Playwrite GB S"],
//     },
//   },
//   plugins: [],
// };
// export default config;
