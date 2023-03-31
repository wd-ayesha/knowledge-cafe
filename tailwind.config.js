/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#400177",
        
"secondary": "#441b87",
        
"accent": "#ce7f25",
        
"neutral": "#212A36",
        
"base-100": "#533E56",
        
"info": "#84C7F0",
        
"success": "#138B45",
        
"warning": "#F39C12",
        
"error": "#E74C40",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

