import {Flex, Box, Heading, ButtonGroup, Link, Text, HStack, Container} from "@chakra-ui/react"


export default function Header() {
    return(
        <Box as="header" w="100%"  position="fixed" top="0" bg="brand.black" color="brand.white" zIndex="200">
            <Container bg="black" maxW="50rem" p="0px">
                <Flex justify="space-between" alignItems="center" px="10px" h='50px'>
                    <Link href="/">
                        <Heading as='h1' fontSize={[null, 'md', 'lg', 'xl']} textDecoration="underline" m="5px">MTB TUNING GUIDE</Heading>
                    </Link>
                    <HStack fontSize='sm'  spacing={['0em','3rem', '4rem', '5rem']} alignItems="center">
                        <ButtonGroup spacing="1rem">
                            <Link href="/about">ABOUT</Link>
                            <Text> | </Text>
                            <Link href="/help">HELP</Link>              
                        </ButtonGroup>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}