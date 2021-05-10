import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  theme: {
    extend: {
      flex: {
        '1/2': '1 1 50%',
        'base-full': '100%',
      },
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/scroll-snap'),
  ],
})