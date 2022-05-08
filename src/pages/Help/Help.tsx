import { Container, Heading, Input, Text, VStack, HStack, InputGroup, InputRightElement, Icon, Divider } from "@chakra-ui/react"
import { useState } from "react";
import {FaSearch, FaHandsHelping, FaTools, FaBicycle, FaRegWindowClose, FaBars} from "react-icons/fa"

export default function Help() {
    const [showPanel, setShowPanel] = useState(true);

    const hipsterIpsum = "I'm baby messenger bag raw denim taxidermy copper mug 90's man braid hashtag ramps. XOXO hoodie art party, microdosing pok pok blog aesthetic. Affogato iceland adaptogen meditation tacos. Four loko irony microdosing tilde blog enamel pin forage you probably haven't heard of them sriracha pork belly selfies organic pitchfork celiac. Selvage chambray tilde swag. Vape cray wolf keytar stumptown neutra. Everyday carry you probably haven't heard of them narwhal fixie."
    
    return(
        <Container w='100%' maxW='64rem' my="2rem">
            <HStack 
                // position='fixed'
                // position='absolute'
                // overflowX="hidden"
                // overflowY='scroll'
                // bg='red' 
                // w='100%' 
                h='calc(100vh - 50px)' 
                spacing='0px'
                align='start'
                mx='2rem'
                >
                {showPanel && 
                    <VStack 
                        // bg='blue' 
                        position='sticky'
                        top="0px"
                        w='100%'
                        maxW='315px'
                        alignItems='flex-start'
                        >
                        <HStack justifyContent={"space-between"}>
                            <InputGroup maxW='70%'>
                                <Input
                                    placeholder='Search'
                                    _placeholder={{ opacity: 1, color: 'brand.white' }}
                                    borderColor='brand.white'
                                />
                                <InputRightElement>
                                    <Icon as={FaSearch}  w={5} h={5} />
                                </InputRightElement>
                            </InputGroup>
                            <Icon 
                                onClick={() => setShowPanel((prevShowPanel) => !prevShowPanel )}
                                as={FaRegWindowClose} 
                                w={5} h={5} 
                            />
                        </HStack>

                        <Heading as='h3' fontSize={"md"}>
                            <Icon as={FaHandsHelping} w={4} h={4} mr="0.75rem"/>
                            Using The Tuning Guide
                        </Heading>

                        <Heading as='h3' fontSize={"md"}>
                            <Icon as={FaTools} w={4} h={4} mr="0.75rem"/>
                            Understanding Inputs
                        </Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Rider Size</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Handling</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Skill Level</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Reach</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Stack</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Bike Type</Heading>

                        <Heading as='h3' fontSize={"md"}>
                            <Icon as={FaBicycle} w={4} h={4} mr="0.75rem"/>
                            Your Setting
                        </Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Handlebar Width</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Handlebar Rise</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Stem Length</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Stem Spacers</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Tire Pressures</Heading>
                        <Heading as='h4' fontSize={"sm"} pl='2rem'>Tire Inserts</Heading>

                    </VStack>
                }
                {!showPanel && 
                    <Icon 
                        onClick={() => setShowPanel((prevShowPanel) => !prevShowPanel )}
                        as={FaBars} 
                        w={5} h={5} mr='2rem'
                    />
                }
                <VStack 
                    //  bg='green'
                    alignItems={"flex-start"}
                    height='100%'
                    w='100%'
                    >
                        <Heading as='h1' fontSize={"4xl"} >Using The Tuning Guide</Heading>
                        <Divider />
                        <Text>{hipsterIpsum}</Text>

                        <Heading as='h1' fontSize={"4xl"} >Understanding Inputs</Heading>
                        <Divider />
                        <Heading as='h2' fontSize={"2xl"} >Rider Size</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Handling</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Skill Level</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Reach</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Stack</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Bike Type</Heading>
                        <Text>{hipsterIpsum}</Text>

                        <Heading as='h1' fontSize={"4xl"} >Your Settings</Heading>
                        <Divider />
                        <Heading as='h2' fontSize={"2xl"} >HandleBar Width</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Handlebar Rise</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Stem Length</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Stem Spacers</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Tire Pressures</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} >Tire Inserts</Heading>
                        <Text>{hipsterIpsum}</Text>
                </VStack>
            </HStack>
        </Container>

    )
}

/*
       <Container maxW="37.5rem">
            <Box bg="brand.darkGrey" borderRadius="16px" pb={4} my={10} h="calc(100vh - 160px)" w="100%">
                <Heading as="h2" m={4} py={4}> Help Page coming soon</Heading>
                <Text as="p" mx={4}> This page will contain detailed intructions on how to use the tuning guide.</Text>
            </Box>
        </Container>
        */