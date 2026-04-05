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
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
