import {Flex, Box, Heading, ButtonGroup, Link, Text, Stack, Container} from "@chakra-ui/react"

/* Breakpoints:
        480px
        768px
        992px
        1280px
        1536px
*/

export default function Header() {
    return(
        <Box bg="black" color="white">
            <Container bg="black" maxW={['56.25rem']} p="0px">
                <Flex justify="space-between" alignItems="center" px="10px" h='50px'>
                        <Heading as='h1' fontSize={[null, 'md', 'lg', 'xl']} textDecoration="underline" m="5px">MTB TUNING GUIDE</Heading>
                        <Stack direction={['column', 'row']} fontSize='sm'  spacing={['0em','3rem', '4rem', '5rem']} alignItems="center">
                            <ButtonGroup spacing="1rem">
                                <Link>ABOUT</Link>
                                <Text> | </Text>
                                <Link>HELP</Link>              
                            </ButtonGroup>
                            <Text fontSize="xs">Page 1 of 3</Text>
                        </Stack>

                </Flex>
            </Container>
        </Box>
    )
}