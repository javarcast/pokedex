module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          300: '#333',
        },
        poison: '#A040A0',
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        normal: '#A8A878',
        bug: '#A8B820',
        electric: '#F8D030',
        ground: '#E0C068',
        fairy: '#EE99AC',
        fighting: '#C03028',
        psychic: '#F85888',
        rock: '#B8A038',
        ghost: '#705898',
        ice: '#98D8D8',
        dragon: '#7038F8',
        flying: '#A98FF3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
