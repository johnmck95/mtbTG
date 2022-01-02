import { useRadio, Box } from "@chakra-ui/react"

export default function RadioBox(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return(
      <Box as='label' size="sm">
            <input {...input} />
        <Box
          {...checkbox}
          onClick={() =>props.handleState(prevInputs => ({...prevInputs, weightBias: props.children}))}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          color="brand.lightGrey"
          _checked={{
            // bg: 'brand.lightGrey',
            color: 'white',
            // borderWidth: '2px',
            borderColor: 'brand.white',
          }}
          _focus={{
            // boxShadow: 'outline',
            borderColor: "brand.blue"
          }}
          // focusBorderColor='brand.blue' 
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )

}