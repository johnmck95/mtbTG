import { extendTheme } from "@chakra-ui/react";
import {InputStyles as Input} from './components/inputStyles'

export const theme = extendTheme({
    colors: {
        brand: {
            // lightGrey: "#AAAAAA", // The original lightGrey
            // darkGrey: "#414A4C", //The original darkGrey
            lightGrey: "#BDBDBD",
            darkGrey: "#303638",
            blue: "#5B7BC0",
            white: "#FFFDFA",
            black: "black",
            lightBlack: "#222222",
            flatBlack: "#262626",
            error: "#d5798a"
        }
    },
    components: {
        Input: {
            variants: {
                'with-shadow': {
                    bg: 'red.400',
                    boxShadow: '0 0 2px 2px #efdfde',
                  },
                  // 4. We can override existing variants
                  outline: () => ({
                    bg:'red.500',
                  }),
            }
        }
    }

})
