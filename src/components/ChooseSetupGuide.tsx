import {Text, VStack, Heading, Button, Container, ButtonGroup} from "@chakra-ui/react"

export default function ChooseSetupGuide() {
    return (
        <Container w={['95vw', '85vw', '75vw', '65vw']} maxW={"37.5rem"}>
            <VStack bg='brand.darkGrey' m="30px" justify="center" border="2px solid black" borderRadius="6px" h="70vh">
                <Heading as='h2' textDecoration='underline'>CHOOSE SETUP GUIDE</Heading>
                <VStack w="60%">
                        <Button w="100%" fontSize="xl" bg="brand.blue">
                            Basic
                        </Button>
                        <Text textAlign="center" fontSize="xs">Fastest Setup Guide</Text>
                        <Button w="100%" fontSize="xl" bg="brand.blue">
                            Advanced
                        </Button>
                        <Text textAlign="center" fontSize="xs">In-depth Setup Guide to Optimize Weight Distribution</Text>
                    </VStack>
            </VStack>
        </Container>
    )
}