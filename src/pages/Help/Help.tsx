import { Container, Heading, Input, Text, VStack, HStack, InputGroup, InputRightElement, Icon, Divider, Link } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import {FaSearch, FaHandsHelping, FaTools, FaBicycle, FaRegWindowClose, FaBars} from "react-icons/fa"

/**
 * BUGS:
 * 
 * 1. When the screen is narrow, clicking a link on the panel doesn't scroll the main page to the cporrect location
 *    - Somf of the links (like the bottom 3, and the top in the panel) seems to work. Needs to be investigated.
 * 
 */


export default function Help() {
    const [showPanel, setShowPanel] = useState(true);
    const hipsterIpsum = "I'm baby messenger bag raw denim taxidermy copper mug 90's man braid hashtag ramps. XOXO hoodie art party, microdosing pok pok blog aesthetic. Affogato iceland adaptogen meditation tacos. Four loko irony microdosing tilde blog enamel pin forage you probably haven't heard of them sriracha pork belly selfies organic pitchfork celiac. Selvage chambray tilde swag. Vape cray wolf keytar stumptown neutra. Everyday carry you probably haven't heard of them narwhal fixie."
    
    const useViewport = () => {
        const [width, setWidth] = useState(window.innerWidth);
        useEffect(() => {
          const handleWindowResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleWindowResize);
          if(width < 768)
            setShowPanel(() => false)
          else
            setShowPanel(() => true)
          return () => window.removeEventListener("resize", handleWindowResize);
        }, [width]);
        return { width };
    }
    const { width } = useViewport()

    return(
        <Container w='100%' maxW='64rem'>
            <HStack 
                // bg='red' 
                h='calc(100vh - 50px)' 
                py='1rem'
                spacing='0px'
                align='start'
                >
                {showPanel && 
                    <VStack 
                        // bg='blue'
                        alignItems='flex-start'
                        overflow='scroll'
                        position='sticky'
                        w={width < 768 ? '100vw' : '50%'}
                        h='100%'
                        // top="2rem"
                        mr="1rem"
                        css={{
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                            'overflowStyle': 'none',
                            'scrollbarWidth': 'none',
                        }}
                        >
                        <HStack justifyContent={"space-between"} position='sticky' top="0rem" overflow='clipped' bg='brand.flatBlack'>
                            <InputGroup maxW='70%'>
                                <Input
                                    placeholder='Search'
                                    _placeholder={{ opacity: 1, color: 'brand.white' }}
                                    borderColor='brand.white'
                                />
                                <InputRightElement>
                                    <Icon as={FaSearch} w={5} h={5}/>
                                </InputRightElement>
                            </InputGroup>
                            <Icon 
                                onClick={() => setShowPanel((prevShowPanel) => !prevShowPanel )}
                                as={FaRegWindowClose} 
                                w={5} h={5}
                            />
                        </HStack>

                        <Link href="#usingTheTuningGuide">
                            <Heading as='h3' fontSize={"md"}>
                                <Icon as={FaHandsHelping} w={4} h={4} mr="0.75rem"/>
                                Using The Tuning Guide
                            </Heading>
                        </Link>
                        <Link href='#understandingInputs'>
                            <Heading as='h3' fontSize={"md"}>
                                <Icon as={FaTools} w={4} h={4} mr="0.75rem"/>
                                Understanding Inputs
                            </Heading>
                        </Link>
                        <Link href="#riderSize">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Rider Size</Heading>
                        </Link>
                        <Link href="#handling">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Handling</Heading>
                        </Link>
                        <Link href="#skillLevel">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Skill Level</Heading>
                        </Link>
                        <Link href="#reach">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Reach</Heading>
                        </Link>
                        <Link href="#stack">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Stack</Heading>
                        </Link>
                        <Link href="#bikeType">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Bike Type</Heading>
                        </Link>
                        <Link href="#yourSettings">
                            <Heading as='h3' fontSize={"md"}>
                                <Icon as={FaBicycle} w={4} h={4} mr="0.75rem"/>
                                Your Setting
                            </Heading>
                        </Link>
                        <Link href="#handlebarWidth">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Handlebar Width</Heading>
                        </Link>
                        <Link href="#handlebarRise">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Handlebar Rise</Heading>
                        </Link>
                        <Link href="#stemLength">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Stem Length</Heading>
                        </Link>
                        <Link href="#stemSpacers">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Stem Spacers</Heading>
                        </Link>
                        <Link href="#tirePressures">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Tire Pressures</Heading>
                        </Link>
                        <Link href="#tireInserts">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Tire Inserts</Heading>
                        </Link>
                    </VStack>
                }
                {!showPanel && 
                    <Icon 
                        position='sticky'
                        top="0.5rem"
                        onClick={() => setShowPanel((prevShowPanel) => !prevShowPanel )}
                        as={FaBars} 
                        w={5} h={5} mr='2rem'
                    />
                }
                <VStack 
                    // bg='green'
                    alignItems={"flex-start"}
                    overflow='scroll'
                    w={width < 768 ? (showPanel? '0vw' : '100vw') : '100%'}
                    h='100%'
                    css={{
                       '&::-webkit-scrollbar': {
                           display: 'none',
                       },
                       'overfloStyle': 'none',
                       'scrollbarWidth': 'none',
                   }}
                    >
                        <Heading as='h1' fontSize={"4xl"} id="usingTheTuningGuide">Using The Tuning Guide</Heading>
                        <Divider />
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h1' fontSize={"4xl"} id="understandingInputs">Understanding Inputs</Heading>
                        <Divider />
                        <Heading as='h2' fontSize={"2xl"} id="riderSize">Rider Size</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="handling">Handling</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="skillLevel">Skill Level</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="reach">Reach</Heading>

                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="stack">Stack</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="bikeType">Bike Type</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h1' fontSize={"4xl"} id="yourSettings">Your Settings</Heading>
                        <Divider />
                        <Heading as='h2' fontSize={"2xl"} id="handlebarWidth">HandleBar Width</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="handlebarRise">Handlebar Rise</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="stemLength">Stem Length</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="stemSpacers">Stem Spacers</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="tirePressures">Tire Pressures</Heading>
                        <Text>{hipsterIpsum}</Text>
                        <Heading as='h2' fontSize={"2xl"} id="tireInserts">Tire Inserts</Heading>
                        <Text>{hipsterIpsum}</Text>
                </VStack>
            </HStack>
        </Container>

    )
}
