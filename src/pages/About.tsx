import Header from "../components/Header"
import {Divider, Image, Text, HStack, VStack, Heading, AspectRatio, Container, List, ListItem, ListIcon} from "@chakra-ui/react"
import headshot from "../images/headshot.jpg"
import { MdOutlineDirectionsBike } from "react-icons/md";

export default function About() {
    return(
        <>
            <Header pageNumber={0}/>
            <Container maxW={"50rem"} >
                <HStack spacing="2rem" alignItems="flex-start" marginTop="50px">
                    <Image src={headshot} w="14rem" maxW="50%" borderRadius="6px" m="10px"/>
                    <VStack alignItems="flex-start"  m="10px">
                        <Heading as="h2" size="2xl" alignSelf={"center"} textAlign={"center"}> John McKinnon</Heading>
                        <Divider borderColor="brand.white"/>
                        <Heading as="h4" size="l" textAlign={"center"} >
                            3<sup>rd</sup> year Software Engineering Student at the University of Victoria
                        </Heading>
                        <Text paddingTop="1.5rem" alignSelf={"center"} textDecoration={"underline"}>
                            The Tuning Guide was built for two reasons.
                        </Text>
                        <List>
                            <ListItem>
                                <ListIcon as={MdOutlineDirectionsBike} color="brand.blue"/>
                                To help mountain bikers get the most out of their products
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdOutlineDirectionsBike} color="brand.blue"/>
                                To build a portoflio to show future employers.
                            </ListItem>
                        </List>
                    </VStack>
                </HStack>
                    <Text  textAlign="justify" textJustify="inter-word" paddingTop={"2rem"}>
                        Growing up on Vancouver Island, I have been a mountain biker for as long as I can remember.
                        I raced downhill while attending high school, then moved to Whister the day after graduation.
                        Since then, I have lived in Squamish, Vancouver, Victoria and New Zealand working in the bike insutry 
                        as a service advisor, mechanic, instructor and trail builder. In 2019, I began started racing Enduro and won 
                        the Island Cup Elite Championship, and the Hornby Island Bike Festival. These days, I am part of the Oak Bay 
                        Bikes Racing Team, and living full time in Victoria completing my Software Engineering degree and riding one 
                        of my many bikes.
                    </Text>
                    <AspectRatio marginTop="3rem" maxW="768px">
                        <iframe
                            title='John McKinnon || Self-Shot'
                            src="https://www.youtube.com/embed/iF4yQ3PL_tY"
                            allowFullScreen
                        />
                    </AspectRatio>
            </Container>
        </>
    )
}
