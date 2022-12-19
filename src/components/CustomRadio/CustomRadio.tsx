import { Box } from "@chakra-ui/react";
import { KeyboardEvent } from "react";
import { CustomRadioProps } from "../../types/interfaces";

export default function CustomRadio(props: CustomRadioProps): JSX.Element {
    const {title, name, value, isChecked, isError, handleCustomRadio} = props;

    let borderColor = "brand.placeholder";
    if(isChecked)
        borderColor = "brand.white";
    if(isError)
        borderColor = "brand.error";
        
    function handleKeyPress(event: KeyboardEvent<HTMLImageElement>): void {
        if (event.key === 'Enter')
            handleCustomRadio(name, value);
    };

    return(
        <Box as='label' title={title}>
            <Box
                tabIndex={0}
                onClick={() => handleCustomRadio(name, value)} 
                onKeyPress={handleKeyPress}
                _hover={{borderColor: "brand.hoverGrey"}}
                _focus={{borderColor: "brand.blue"}}
                bg="brand.darkGrey"
                color={isChecked? "brand.white" : "brand.lightGrey"}
                cursor='pointer'
                border="1px solid transparent"
                borderColor={borderColor}
                boxShadow='md'
                textAlign="center"
                px={[3, 3]}
                py={2}
                >
                    {title}
            </Box>
        </Box>
    );
};
