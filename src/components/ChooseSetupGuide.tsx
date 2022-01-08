import {Divider, Text, VStack, Heading, Button, Container} from "@chakra-ui/react"
import "../styling/chooseSetupGuide.css"

interface ChooseSetupGuideProps {
    handleBasicClick: () => void;
    isAdvancedHovered: boolean;
    handleAdvancedHover:() => void;
}

export default function ChooseSetupGuide({handleBasicClick, isAdvancedHovered, handleAdvancedHover}: ChooseSetupGuideProps) {

    return (
        <div className="chooseSetupGuideBox">
            <Container maxW="28rem">
                <VStack 
                    my={8}
                    bg='brand.darkGrey' 
                    py={8}
                    pb={10}
                    justify="flex-start"  
                    borderRadius="16px" 
                    >
                    <Heading 
                        as='h2' 
                        textAlign="center" 
                        fontSize="2xl" 
                        color="brand.white" 
                        maxW="80%" 
                        >CHOOSE SETUP GUIDE
                    </Heading>
                    <Divider 
                        orientation='horizontal' 
                        borderColor="brand.white" 
                        size="xl" 
                        maxW="80%" 
                        marginBottom="8rem"
                        />
                    <VStack w="60%" pt="2rem" spacing="2.5rem">
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
                            <Text 
                                textAlign="center" 
                                fontSize="xs" 
                                color="lightGrey"
                                >Fastest Setup Guide
                            </Text>
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
                            <Text 
                                textAlign="center" 
                                fontSize="xs" 
                                color="lightGrey"
                                >In-depth Setup Guide to Optimize Weight Distribution
                            </Text>
                            </VStack>
                        </VStack>
                </VStack>
            </Container>
        </div>
    )
}
