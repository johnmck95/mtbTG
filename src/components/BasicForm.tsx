import {useState} from "react"
import {Button, Flex, VStack, Input, Container, SimpleGrid, GridItem, FormControl, FormLabel, Select, Heading, Divider, Box, HStack } from "@chakra-ui/react"

export default function BasicForm() {
    const [imperialRider, setImperialRider] = useState(true)
    const [imperialBike, setImperialBike] = useState(false)

    const [inputs, setInputs] = useState({
        height: "",
        bikeType: "",
        weightBias: "",
        reach: "",
        stack: ""
    })

    return(
        <Container  maxW="37.5rem">
            <VStack bg="brand.darkGrey" borderRadius="16px" pb={4}>
                <Flex position="relative" justifyContent={["space-around", "center"]} w="100%">
                    <Heading as='h2' textAlign="center" fontSize={["xl", "2xl"]} color="brand.white" maxW="80%" ml={[-4, 0]} marginTop={["1rem", "1.25rem"]} > RIDER METRICS </Heading>
                    <Box >
                        <Button 
                            position="absolute" 
                            right="65px"
                            bottom="2px"
                            size="xs" 
                            marginTop={["1rem", "1.5rem","2rem"]}
                            zIndex={imperialRider? 0 : 1}
                            bg={imperialRider? "brand.lightGrey" : "brand.blue"} 
                            onClick={() => setImperialRider(prevImperialRider => !prevImperialRider)}>
                                Metric
                        </Button>
                        <Button 
                            position="absolute" 
                            right="10px" 
                            bottom="2px"
                            size="xs" 
                            variant="ghost" 
                            marginTop={["1rem", "1.5rem","2rem"]}
                            zIndex={imperialRider? 1 : 0}
                            bg={imperialRider? "brand.blue": "brand.lightGrey"} 
                            onClick={() => setImperialRider(prevImperialRider => !prevImperialRider)}>
                                Imperial
                        </Button>
                    </Box>
                </Flex>
                <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" marginBottom="8rem"/>
                <Container maxW={["85%", "75%"]}>
                    {imperialRider &&
                        <SimpleGrid columns={2} columnGap={2}>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Height (feet)</FormLabel>
                                    <Input placeholder="6" maxWidth={24} focusBorderColor='brand.blue'/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Height (inches)</FormLabel>
                                    <Input placeholder="2" maxWidth={24} focusBorderColor='brand.blue'/>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    }{!imperialRider &&
                        <SimpleGrid columns={2} columnGap={2}>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Height (cm)</FormLabel>
                                    <Input placeholder="187" maxWidth={24} focusBorderColor='brand.blue'/>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    }
                    <SimpleGrid columns={1}> 
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Weight Bias</FormLabel>
                                <Select> 
                                    <option value="neutral">Neutral </option>
                                    <option value="rearward"> Rearward </option>
                                    <option value="forward"> Forward</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>
                    </Container>

                     <Flex position="relative" justifyContent={["space-around", "center"]} w="100%">
                        <Heading as='h2' textAlign="center" fontSize={["xl", "2xl"]} color="brand.white" maxW="80%" ml={[-4, 0]} marginTop={["1rem", "1.25rem"]} > BIKE METRICS </Heading>
                        <Box >
                            <Button 
                                position="absolute" 
                                right="65px" 
                                bottom="2px"
                                size="xs" 
                                marginTop={["1rem", "1.5rem","2rem"]}
                                zIndex={imperialBike? 0 : 1}
                                bg={imperialBike? "brand.lightGrey" : "brand.blue"} 
                                onClick={() => setImperialBike(prevImperialBike => !prevImperialBike)}>
                                    Metric
                            </Button>
                            <Button 
                                position="absolute" 
                                right="10px" 
                                bottom="2px"    
                                size="xs" 
                                variant="ghost" 
                                marginTop={["1rem", "1.5rem","2rem"]}
                                zIndex={imperialBike? 1 : 0}
                                bg={imperialBike? "brand.blue": "brand.lightGrey"} 
                                onClick={() => setImperialBike(prevImperialBike => !prevImperialBike)}>
                                    Imperial
                            </Button>
                        </Box>
                    </Flex>

                    <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" marginBottom="8rem"/>
                    <Container maxW={["85%", "75%"]}>
                        <SimpleGrid columns={2} columnGap={4} pb={3}>
                            <GridItem colSpan={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Reach {imperialBike? "(inches)" : "(mm)"}</FormLabel>
                                    <Input placeholder={imperialBike? "20.1" : "510"} maxWidth={24} focusBorderColor='brand.blue'/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Stack {imperialBike? "(inches)" : "(mm)"}</FormLabel>
                                    <Input placeholder={imperialBike? "25.2" : "640"} maxWidth={24} focusBorderColor='brand.blue'/>
                                </FormControl>
                            </GridItem>

                            <GridItem colSpan={2} pb={1}>
                            <FormControl>
                                <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Bike Type</FormLabel>
                                <Select focusBorderColor='brand.blue'> 
                                    <option value="end"> Enduro </option>
                                    <option value="tr"> Trail </option>
                                    <option value="xc"> Cross Country</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                        </SimpleGrid>
                    </Container>
                    <Button w={36} bg="brand.blue" borderRadius='50px'> Next </Button>
            </VStack>
        </Container> 
    )
}