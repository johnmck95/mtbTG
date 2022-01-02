import { Box } from "@chakra-ui/react"

interface CustomRadioProps{
    title: string;
    name: string;
    value: string;
    isChecked: boolean;
    handleCustomRadio: (name: string, value: string) => void;
}
export default function CustomRadio(props: CustomRadioProps) {
    const {title, name, value, isChecked, handleCustomRadio} = props
    // console.log(isChecked)
    return(
        // <Box as='label'>
            <Box
                onClick={() => handleCustomRadio(name, value)} 
                bg="brand.darkGrey"
                color={isChecked? "brand.white" : "brand.lightGrey"}
                cursor='pointer'
                border="1px solid #AAAAAA"
                borderColor={isChecked? "brand.white" : "brand.lightGrey"}
                borderRadius='md'
                boxShadow='md'
                textAlign="center"
                px={[3, 3]}
                py={2}
                // mb={2}
                >
                {title}
            </Box>
        // </Box>
    )
}