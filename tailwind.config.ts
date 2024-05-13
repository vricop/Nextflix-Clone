import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        netflix: '#e50914',
        'netflix-alt-dark': '#b9090b',
        'netflix-alt-light': '#f40612',
      },
      backgroundImage: {
        'login-overlay':
          'linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/ES-en-20220226-popsignuptwoweeks-perspective_alpha_website_small.jpg)',
      },
      fontFamily: {
        sans: 'var(--font-netflix-sans)',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}

export default config
