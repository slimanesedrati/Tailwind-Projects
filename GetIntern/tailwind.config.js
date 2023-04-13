/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        darkGray:'hsl(210, 4%, 20%)',
        mediumGray:'hsl(210, 2%, 53%)',
        lightGray:'hsl(210, 4%, 80%)',
        accentBlue:'hsl(196, 100%, 43%)',
        red: 'hsl(0, 87%, 67%)',
        blue: 'hsl(200, 100%, 29%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
        lightbg:'hsl(45, 14%, 95%)',
        green:'hsl(152, 92%, 24%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}