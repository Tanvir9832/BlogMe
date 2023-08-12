export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "lightGreen" : "#b9e7e7",
      "teal" : "#008080",
      "white" : "#fff",
      "gray" : "#ccc",
      "red" : "#ff0000",
      "black" : "#000000",
      "text" : "#333"
    },
    extend: {
      screens: {
        'xm' : '375px',
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}