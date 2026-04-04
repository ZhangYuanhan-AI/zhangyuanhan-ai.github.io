/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        morandi: {
          // Light mode surfaces
          cream:    '#F3EFEA',
          paper:    '#EBE6DF',
          sand:     '#DDD6CC',
          // Dark mode surfaces
          charcoal: '#1C1B19',
          ash:      '#242320',
          stone:    '#2E2C28',
          // Text
          ink:      '#3D3835',
          dusk:     '#6B6460',
          mist:     '#9B948E',
          cloud:    '#C4BCB4',
          // Accents
          sage:     '#8BA89A',
          sage2:    '#A3BDAE',
          slate:    '#8DA0B2',
          mauve:    '#B3A0B8',
          rose:     '#C4A6A0',
          clay:     '#C2A67E',
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'glitch-1': 'glitch-1 4s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 3s infinite linear alternate-reverse',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'glitch-1': {
          '0%': { 'clip-path': 'inset(40% 0 61% 0)' },
          '20%': { 'clip-path': 'inset(92% 0 1% 0)' },
          '40%': { 'clip-path': 'inset(43% 0 1% 0)' },
          '60%': { 'clip-path': 'inset(25% 0 58% 0)' },
          '80%': { 'clip-path': 'inset(54% 0 7% 0)' },
          '100%': { 'clip-path': 'inset(58% 0 43% 0)' },
        },
        'glitch-2': {
          '0%': { 'clip-path': 'inset(65% 0 13% 0)' },
          '20%': { 'clip-path': 'inset(79% 0 14% 0)' },
          '40%': { 'clip-path': 'inset(20% 0 52% 0)' },
          '60%': { 'clip-path': 'inset(48% 0 29% 0)' },
          '80%': { 'clip-path': 'inset(70% 0 8% 0)' },
          '100%': { 'clip-path': 'inset(10% 0 63% 0)' },
        },
      },
    },
  },
  plugins: [],
};
