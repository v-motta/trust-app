/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'trust-dark-blue': '#0D152E',
        'trust-red': '#AE2233',
      },
      fontFamily: {
        'mont-regular': 'Montserrat_400Regular',
        'mont-medium': 'Montserrat_500Medium',
        'mont-semiBold': 'Montserrat_600SemiBold',
        'mont-bold': 'Montserrat_700Bold',
        'mont-extraBold': 'Montserrat_800ExtraBold',
      },
    },
  },
  plugins: [],
}
