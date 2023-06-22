

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'main': '#292561',
      'primary': '#292561',
      'red': '#f43f5e',
      'success':'#28a745', 
      'danger':'#dc3545',
      'theme':"#071936",
      'secondary':"#292561", 
      'sky': "#F4F3FB", 
      'bg': "#fcfcfc",
      'shadow': "#F3F3FF",         
    },

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    boxShadow: {
      top: '0px -4px 6px -1px rgba(0, 0, 0, 0.1)',
      bottom: '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
      gray: '0px 0px 10px 0px rgba(128, 128, 128, 0.25)',
    },
   

    extend: {
      boxShadow: ['hover', 'focus'],

      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'], 
      }, 
            fontWeight: {
              thin: 100,
              light: 300,
              normal: 400,
              medium: 500,
              semibold: 600,
              bold: 700,
              extrabold: 800,
              black: 900,
            },

            fontSize: {
              xs: '0.6rem',
              sm: '0.8rem',
              tiny: '14px',
              base: '1rem',
              xl: '1.25rem',
              '2xl': '1.563rem',
              '3xl': '1.953rem',
              '4xl': '2.441rem',
              '5xl': '3.052rem',
            },

            keyframes: {
              wiggle: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              }
            },

            animation: {
              wiggle: 'wiggle 2260ms ease-out',
            },
      
      //end of fontFamily 
      backgroundImage: {
        'login-pattern': "url('/src/assets/login-left-bg.338d556f.png')",
        'login-pattern-right': "url('/src/assets/brand-icon.png')",
      },
      borderColor: {
        'gray-300': '#CBD5E0',
      },
      textColor:{
         midas:{
          base:"var(--text-color)"
         }
      },
      backgroundColor:{
        midas:{
          bgcolor:"var(--bg-color)"
        }
      },
      
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
