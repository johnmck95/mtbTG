
export const InputStyles = {
    baseStyle: {
        bg: 'orange'
    },

    // sizes: {},

    variants: {
        // outline: {
        //     bg: 'red',
        //     // color: 'black',
        // },
        // unstyled: {
        //     bg: "red"
        // },
        outline: () => ({
            bg: "purple",
            color: 'yellow'
          }),
    },

    defaultProps: {
        bg: "blue"
    },
}