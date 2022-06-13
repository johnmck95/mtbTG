import { Container, Heading, Input, Text, VStack, HStack, InputGroup, InputRightElement, Icon, Divider } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import {FaSearch, FaHandsHelping, FaTools, FaBicycle, FaRegWindowClose, FaBars} from "react-icons/fa"

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
        <Container w='100%' maxW='64rem' my='1rem'>
            <HStack 
                // bg='red' 
                h='calc(100vh - 50px)' 
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
                        top="2rem"
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

                        <a href="#usingTheTuningGuide">
                            <Heading as='h3' fontSize={"md"}>
                                <Icon as={FaHandsHelping} w={4} h={4} mr="0.75rem"/>
                                Using The Tuning Guide
                            </Heading>
                        </a>
                        <a href='#understandingInputs'>
                            <Heading as='h3' fontSize={"md"}>
                                <Icon as={FaTools} w={4} h={4} mr="0.75rem"/>
                                Understanding Inputs
                            </Heading>
                        </a>
                        <a href="#riderSize">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Rider Size</Heading>
                        </a>
                        <a href="#handling">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Handling</Heading>
                        </a>
                        <a href="#skillLevel">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Skill Level</Heading>
                        </a>
                        <a href="#reach">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Reach</Heading>
                        </a>
                        <a href="#stack">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Stack</Heading>
                        </a>
                        <a href="#bikeType">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Bike Type</Heading>
                        </a>
                        <a href="#yourSettings">
                            <Heading as='h3' fontSize={"md"}>
                                <Icon as={FaBicycle} w={4} h={4} mr="0.75rem"/>
                                Your Setting
                            </Heading>
                        </a>
                        <a href="#handlebarWidth">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Handlebar Width</Heading>
                        </a>
                        <a href="#handlebarRise">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Handlebar Rise</Heading>
                        </a>
                        <a href="#stemLength">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Stem Length</Heading>
                        </a>
                        <a href="#stemSpacers">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Stem Spacers</Heading>
                        </a>
                        <a href="#tirePressures">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Tire Pressures</Heading>
                        </a>
                        <a href="#tireInserts">
                            <Heading as='h4' fontSize={"sm"} pl='2rem'>Tire Inserts</Heading>
                        </a>
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
                        <a id="usingTheTuningGuide">
                            <Heading as='h1' fontSize={"4xl"} >Using The Tuning Guide</Heading>
                        </a>
                        <Divider />
                        <Text>{hipsterIpsum}</Text>
                        <a id="understandingInputs">
                            <Heading as='h1' fontSize={"4xl"} >Understanding Inputs</Heading>
                        </a>
                        <Divider />
                        <a id="riderSize">
                            <Heading as='h2' fontSize={"2xl"} >Rider Size</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="handling">
                            <Heading as='h2' fontSize={"2xl"} >Handling</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="skillLevel">
                            <Heading as='h2' fontSize={"2xl"} >Skill Level</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="reach">
                            <Heading as='h2' fontSize={"2xl"} >Reach</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="stack">
                            <Heading as='h2' fontSize={"2xl"} >Stack</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="bikeType">
                            <Heading as='h2' fontSize={"2xl"} >Bike Type</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="yourSettings">
                            <Heading as='h1' fontSize={"4xl"} >Your Settings</Heading>
                        </a>
                        <Divider />
                        <a id="handlebarWidth">
                            <Heading as='h2' fontSize={"2xl"} >HandleBar Width</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="handlebarRise">
                            <Heading as='h2' fontSize={"2xl"} >Handlebar Rise</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="stemLength">
                            <Heading as='h2' fontSize={"2xl"} >Stem Length</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="stemSpacers">
                            <Heading as='h2' fontSize={"2xl"} >Stem Spacers</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="tirePressures">
                            <Heading as='h2' fontSize={"2xl"} >Tire Pressures</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                        <a id="tireInserts">
                            <Heading as='h2' fontSize={"2xl"} >Tire Inserts</Heading>
                        </a>
                        <Text>{hipsterIpsum}</Text>
                </VStack>
            </HStack>
        </Container>

    )
}
