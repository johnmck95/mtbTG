import {Flex, Box, Heading, ButtonGroup, Link, Text, Stack, Container} from "@chakra-ui/react"
import React from "react"

/* Breakpoints:
        480px
        768px
        992px
        1280px
        1536px
*/
interface HeaderProps {
    pageNumber: number;
}

export default function Header({pageNumber}: HeaderProps) {
    return(
        <Box bg="black" color="white">
            <Container bg="black" maxW={['56.25rem']} p="0px">
                <Flex justify="space-between" alignItems="center" px="10px" h='50px'>
                        <Link href="/">
                            <Heading as='h1' fontSize={[null, 'md', 'lg', 'xl']} textDecoration="underline" m="5px">MTB TUNING GUIDE</Heading>
                        </Link>
                        <Stack direction={['column', 'row']} fontSize='sm'  spacing={['0em','3rem', '4rem', '5rem']} alignItems="center">
                            <ButtonGroup spacing="1rem">
                                <Link href="/about">ABOUT</Link>
                                <Text> | </Text>
                                <Link href="/help">HELP</Link>              
                            </ButtonGroup>
                            {pageNumber > 0 &&
                                <Text fontSize="xs">Page {pageNumber} of 3</Text>
                            }
                        </Stack>

                </Flex>
            </Container>
        </Box>
    )
}