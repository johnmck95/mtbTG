import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        brand: {
            lightGrey: "#BDBDBD",
            darkGrey: "#303638",
            blue: "#5B7BC0",
            white: "#FFFDFA",
            black: "black",
            lightBlack: "#222222",
            // flatBlack: "#262626", // Original choice
            /* Must manually update manifest.json if background colour changes */
            flatBlack: "rgba(0, 0, 0, 0.80)", // Testing this colour
            headerGradient: "linear-gradient(to top, #222222, black 15%)",
            error: "#d5798a",
            placeholder: '#7E7E7E'
        }
    },
})
