import {Divider, Image, Text, Stack, VStack, Heading, AspectRatio, Container, List, ListItem, ListIcon} from "@chakra-ui/react"
import headshot from "../images/headshot.jpg"
import {MdOutlineDirectionsBike} from "react-icons/md";
import {FaLaptopCode} from "react-icons/fa"

export default function About() {
    return(
        <>
            <Container maxW="50rem">
                <Stack direction={['column', 'row']} spacing="2rem" alignItems="flex-start" my="3rem">
                    <Image src={headshot} w={["20rem", "14rem"]} maxW={["80%","50%"]} borderRadius="6px" m="10px" alignSelf="center"/>
                    <VStack alignItems="flex-start"  m="10px">
                        <Heading as="h2" size="2xl" alignSelf="center" textAlign="center"> John McKinnon</Heading>
                        <Divider borderColor="brand.white"/>
                        <Heading as="h4" size="l" textAlign="center" >
                            3<sup>rd</sup> year Software Engineering Student at the University of Victoria
                        </Heading>
                        <Text py="1rem" alignSelf="center" textAlign="center" textDecoration="underline">
                            The Tuning Guide was built for two reasons.
                        </Text>
                        <List>
                            <ListItem mb="5px">
                                <ListIcon as={MdOutlineDirectionsBike} color="brand.blue"/>
                                To help mountain bikers get the most out of their products
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaLaptopCode} color="brand.blue"/>
                                To build a portoflio to show future employers
                            </ListItem>
                        </List>
                    </VStack>
                </Stack>
                <Divider borderColor="brand.white"/>
                    <Text textAlign="justify" textJustify="inter-word" paddingTop="2rem">
                        Growing up on Vancouver Island, I have been a mountain biker for as long as I can remember.
                        I raced downhill while attending high school, then moved to Whister the day after graduation.
                        Since then, I have lived in Squamish, Vancouver, Victoria and New Zealand working in the bike insutry 
                        as a service advisor, mechanic, instructor and trail builder. In 2019, I began started racing Enduro and won 
                        the Island Cup Elite Championship, and the Hornby Island Bike Festival. These days, I am part of the Oak Bay 
                        Bikes Racing Team, and living full time in Victoria completing my Software Engineering degree and riding one 
                        of my many bikes.
                    </Text>
                    <AspectRatio my="3rem" maxW="768px">
                        <iframe
                            title="John McKinnon || Self-Shot"
                            src="https://www.youtube.com/embed/iF4yQ3PL_tY"
                            allowFullScreen
                        />
                    </AspectRatio>
            </Container>
        </>
    )
}
