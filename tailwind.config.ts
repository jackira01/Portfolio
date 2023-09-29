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
      },
      animation: {
        typing: 'typing 4s steps(33), blink 1s infinite step-end alternate',
      },
      colors: {
        'color-one': '#10002B',
        'color-two': '#240046',
        'color-three': '#6b096c ',
        'color-four': '#5A189A',
        'color-five': '#69096b',
        'dark-home': '#00002e',
        'color-purple': '#340069',
      },
    },
  },
  plugins: [],
};

export default config;
