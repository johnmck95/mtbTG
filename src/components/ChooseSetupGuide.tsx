import {Divider, Box, Text, VStack, Heading, Button, Container} from "@chakra-ui/react"


interface ChooseSetupGuideProps {
    handleBasicClick: () => void;
    isAdvancedHovered: boolean;
    handleAdvancedHover:() => void;
}

export default function ChooseSetupGuide({handleBasicClick, isAdvancedHovered, handleAdvancedHover}: ChooseSetupGuideProps) {

    return (
        <Box 
            h="100%" 
            overflow="auto" 
            display="flex" 
            alignItmes="center"
            >
        <Container  maxW="37.5rem">
            <VStack bg='brand.darkGrey' m="30px" justify="flex-start"  borderRadius="16px" h="22rem">
                <Heading as='h2' textAlign="center" fontSize="2xl" color="brand.white" maxW="80%" marginTop={["1rem", "1.5rem","2rem"]} >CHOOSE SETUP GUIDE</Heading>
                <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="80%" marginBottom="8rem"/>
                <VStack w="60%" paddingTop={["1.5rem", "2rem","2.5rem"]} spacing="2.5rem">
                    <VStack w="100%">
                        <Button 
                            color="brand.white" 
                            w="100%" 
                            fontSize="xl"
                            bg="brand.blue" 
                            onClick={handleBasicClick}
                            >
                            Basic
                        </Button>
                        <Text textAlign="center" fontSize="xs" color="lightGrey">Fastest Setup Guide</Text>
                    </VStack>
                    <VStack w="100%">
                        <Button 
                            color="brand.white" 
                            w="100%" 
                            fontSize={isAdvancedHovered? "m" : "xl"} 
                            bg="brand.blue" 
                            onMouseEnter={handleAdvancedHover} 
                            onMouseLeave={handleAdvancedHover}>
                                {isAdvancedHovered? "Coming Eventually" : "Advanced"}
                        </Button>
                        <Text textAlign="center" fontSize="xs" color="lightGrey">In-depth Setup Guide to Optimize Weight Distribution</Text>
                        </VStack>
                    </VStack>
            </VStack>
        </Container>
        </Box>
    )
}
