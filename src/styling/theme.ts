import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      lightGrey: '#BDBDBD',
      darkGrey: '#303638',
      blue: '#5B7BC0',
      white: '#FFFDFA',
      black: 'black',
      lightBlack: '#222222',
      flatBlack: '#262626',
      headerGradient: 'linear-gradient(to top, #222222, black 15%)',
      error: '#d5798a',
      placeholder: '#7E7E7E',
    },
  },
});
