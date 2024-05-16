/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#da1C4b',
        'pink': '#fb2056',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#404040',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        backgroundImage: {
          'image': "url('../Images/photo-haut-page5.jpg')"
        }
      }
    },
  }
