import { Container, Box, Heading, Text } from "@chakra-ui/react"

export default function Help() {
    return(
        <Container maxW="37.5rem">
            <Box bg="brand.darkGrey" borderRadius="16px" pb={4} my={10} h="calc(100vh - 160px)" w="100%">
                <Heading as="h2" m={4} py={4}> Help Page coming soon</Heading>
                <Text as="p" mx={4}> This page will contain detailed intructions on how to use the tuning guide.</Text>
            </Box>
        </Container>
    )
}
