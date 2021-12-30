import {SyntheticEvent, useState} from "react"
import {Button, Flex, VStack, Input, Container, SimpleGrid, GridItem, FormControl, FormLabel, Select, Heading, Divider, Box, HStack } from "@chakra-ui/react"

export default function BasicForm() {
    const [imperialRider, setImperialRider] = useState(true)
    const [imperialBike, setImperialBike] = useState(false)

    const [inputs, setInputs] = useState({
        heightFeet: "",
        heightInches: "",
        heightCM: "",
        weightBias: "",
        reachInches: "",
        reachMM: "",
        stackInches: "",
        stackMM: "",
        bikeType: ""
    })

    function handleChange(event: SyntheticEvent) {
        event.preventDefault();
        console.log(inputs)
    }

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
                    {imperialRider && //Rather than 2 conditional renders this can be broken down into the additional box being conditionally rendered and changing display values
                        <SimpleGrid columns={2} columnGap={2}>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Height (feet)</FormLabel>
                                    <Input 
                                        placeholder="6" 
                                        maxWidth={24} 
                                        focusBorderColor='brand.blue'
                                        value={inputs.heightFeet}
                                        name={"heightFeet"}
                                        onChange={handleChange}
                                        />
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Height (inches)</FormLabel>
                                    <Input 
                                        placeholder="2" 
                                        maxWidth={24} 
                                        focusBorderColor='brand.blue'
                                        value={inputs.heightInches}
                                        name={"heightInches"}
                                        onChange={handleChange}
                                        />
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    }{!imperialRider &&
                        <SimpleGrid columns={2} columnGap={2}>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Height (cm)</FormLabel>
                                    <Input 
                                    placeholder="187" 
                                    maxWidth={24} 
                                    focusBorderColor='brand.blue'
                                    value={inputs.heightCM}
                                    name={"heightCM"}
                                    onChange={handleChange}
                                    />
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    }
                    <SimpleGrid columns={1}> 
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Weight Bias</FormLabel>
                                <Select 
                                    focusBorderColor='brand.blue' 
                                    name="weightBias"  
                                    onChange={handleChange}
                                    > 
                                    <option value={inputs.weightBias}> Neutral </option>
                                    <option value={inputs.weightBias}> Rearward </option>
                                    <option value={inputs.weightBias}> Forward </option>
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
                                    <Input 
                                        placeholder={imperialBike? "20.1" : "510"} 
                                        maxWidth={24} 
                                        focusBorderColor='brand.blue'
                                        value={imperialBike? inputs.reachInches : inputs.reachMM}
                                        name={imperialBike? "reachInches" : "reachMM"}
                                        onChange={handleChange}
                                        />
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Stack {imperialBike? "(inches)" : "(mm)"}</FormLabel>
                                    <Input 
                                        placeholder={imperialBike? "25.2" : "640"} 
                                        maxWidth={24} 
                                        focusBorderColor='brand.blue'
                                        value={imperialBike? inputs.stackInches : inputs.stackMM}
                                        name={imperialBike? "stackInches" : "stackMM"}
                                        onChange={handleChange}
                                        />
                                </FormControl>
                            </GridItem>

                            <GridItem colSpan={2} pb={1}>
                            <FormControl>
                                <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Bike Type</FormLabel>
                                <Select 
                                    focusBorderColor='brand.blue' 
                                    name="inputs.bikeType"
                                    onChange={handleChange}
                                    > 
                                    <option value={inputs.bikeType}> Enduro </option>
                                    <option value={inputs.bikeType}> Trail </option>
                                    <option value={inputs.bikeType}> Cross Country</option>
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