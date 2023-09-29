import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
        },
        'spin-f-moon': {
          '0%': { transform: 'rotate(30deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(30deg)' },
        },
      },
      animation: {
        typing: 'typing 4s steps(33), blink 1s infinite step-end alternate',
        'spin-sun': 'spin 20s linear infinite',
        'spin-moon': 'spin-f-moon 6s linear infinite',
      },
      colors: {
        'color-text': '#FEFAE0',
        'color-bg-dark': '#283618',
        'color-one': '#BC6C25',
        'color-two': '#DDA15E',
        'color-three': '#606C38',
        'color-bg-light': '#8CB369',
        'color-one-light': '#F4E285',
        'color-two-light': '#F4A259',
        'color-three-light': '#5B8E7D',
        'color-four-light': '#BC4B51',
      },
    },
  },
  plugins: [],
};

export default config;
