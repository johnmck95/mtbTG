import react from "react"
import {Flex, Heading, ButtonGroup, Link, Text, HStack} from "@chakra-ui/react"

export default function Header() {
    return(
        <Flex justify="space-between" bg="black" color="white" px="5px" h="10%" maxH="70px">
            <Heading as='h1' size='xL' isTruncated textDecoration="underline" m="5px">MTB TUNING GUIDE</Heading>
            <HStack spacing="3em">
                <ButtonGroup spacing="1em">
                    <Link>ABOUT</Link>
                    <Link>HELP</Link>              
                </ButtonGroup>
                <Text>Page 1 of 3</Text>
            </HStack>
        </Flex>

    )
}