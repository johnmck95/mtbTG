import {Divider, Text, VStack, Heading, Button, Container} from "@chakra-ui/react"
import {useState} from "react"

export default function ChooseSetupGuide() {
    const [isBasicHovered, setIsBasicHovered] = useState(false)
    const [isAdvancedHovered, setIsAdvancedHovered] = useState(false)

    function basicComingSoon() {
        setIsBasicHovered(() => !isBasicHovered)
    }

    function advancedComingSoon(){
        setIsAdvancedHovered( () => !isAdvancedHovered)
    }
    
    return (
        <Container  maxW="37.5rem">
            <VStack bg='brand.darkGrey' m="30px" justify="flex-start"  borderRadius="16px" h="22rem">
                <Heading as='h2' textAlign="center" fontSize="2xl" color="brand.white" maxW="80%" marginTop={["1rem", "1.5rem","2rem"]} >CHOOSE SETUP GUIDE</Heading>
                <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="80%" marginBottom="8rem"/>
                <VStack w="60%" paddingTop={["1.5rem", "2rem","2.5rem"]} spacing="2.5rem">
                    <VStack w="100%">
                        <Button w="100%" fontSize={isBasicHovered? "m" : "xl"} bg="brand.blue" onMouseEnter={basicComingSoon} onMouseLeave={basicComingSoon}>
                            {isBasicHovered? "Coming Soon!" : "Basic"}
                        </Button>
                        <Text textAlign="center" fontSize="xs" color="lightGrey">Fastest Setup Guide</Text>
                    </VStack>
                    <VStack w="100%">
                        <Button w="100%" fontSize={isAdvancedHovered? "m" : "xl"} bg="brand.blue" onMouseEnter={advancedComingSoon} onMouseLeave={advancedComingSoon}>
                            {isAdvancedHovered? "Coming Less Soon" : "Advanced"}
                        </Button>
                        <Text textAlign="center" fontSize="xs" color="lightGrey">In-depth Setup Guide to Optimize Weight Distribution</Text>
                        </VStack>
                    </VStack>
            </VStack>
        </Container>
    )
}
