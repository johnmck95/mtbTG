import {ChangeEvent, useState} from "react"
import {Button, Flex, VStack, Input, Container, SimpleGrid, GridItem, FormControl, FormLabel, Select, Heading, Divider, Box, MenuButton, Menu, MenuItem, MenuList } from "@chakra-ui/react"

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

    function toggleRiderUnit() {
        setImperialRider(prevImperialRider => !prevImperialRider)
        riderStateConversion()
    }

    function toggleBikeUnit(){
        setImperialBike(prevImperialBike => !prevImperialBike)
        bikeStateConversion()
    }

    function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        const {name, value} = event.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value,
        }))     
        console.log(inputs)   
    }

     // NOTE: watch out for 'e' in the input
    function riderStateConversion() {
        let heightCMCalc = 0
        let heightFootCalc = 0
        let heightInchesCalc = 0   

        if (inputs.heightFeet !== "" && inputs.heightInches !== "")
             heightCMCalc = parseFloat(inputs.heightFeet) * 30.48 + parseFloat(inputs.heightInches) * 2.54
        if (inputs.heightCM !== ""){
            const totalInches = parseFloat(inputs.heightCM) / 2.54
            heightFootCalc = Math.floor(totalInches / 12)
            heightInchesCalc = (totalInches % 12)          
        }

        setInputs(prevInputs => ({
            ...prevInputs,
            heightCM: heightCMCalc !== 0? heightCMCalc.toFixed(0) : inputs.heightCM,
            heightFeet: heightFootCalc !== 0? heightFootCalc.toFixed(0) : inputs.heightFeet,
            heightInches: heightInchesCalc !== 0? heightInchesCalc.toFixed(0) : inputs.heightInches
        }))
    }

    // NOTE: watch out for 'e' in the input - currently unhandled
    function bikeStateConversion() {
        let reachMMCalc = 0
        let reachInchCalc = 0
        let stackMMCalc = 0
        let stackInchCalc = 0

        if (inputs.reachMM !== "")
            reachInchCalc = parseFloat(inputs.reachMM)/25.4
        if (inputs.stackMM !== "")
            stackInchCalc = parseFloat(inputs.stackMM)/25.4
        if (inputs.reachInches !== "")
            reachMMCalc = parseFloat(inputs.reachInches)*25.4
        if(inputs.stackInches !== "")
            stackMMCalc = parseFloat(inputs.stackInches)*25.4

        setInputs( prevInputs => ({
            ...prevInputs,
            reachMM: reachMMCalc !== 0? reachMMCalc.toFixed(0) : inputs.reachMM,
            reachInches: reachInchCalc !== 0? reachInchCalc.toFixed(1) : inputs.reachInches,
            stackMM: stackMMCalc !== 0? stackMMCalc.toFixed(0) : inputs.stackMM,
            stackInches: stackInchCalc !== 0? stackInchCalc.toFixed(1) : inputs.stackInches
        }))
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
                            onClick={toggleRiderUnit}>
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
                            onClick={toggleRiderUnit}>
                                Imperial
                        </Button>
                    </Box>
                </Flex>
                <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" marginBottom="8rem"/>
                <Container maxW={["85%", "75%"]}>
                    <SimpleGrid columns={2} columnGap={2}>
                        <GridItem colSpan={1} pb={1}>
                            <FormControl>
                                <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Height {imperialRider? "(feet)" : "(cm)"}</FormLabel>
                                <Input 
                                    placeholder={imperialRider? "6" : "187"}
                                    maxWidth={24} 
                                    focusBorderColor='brand.blue'
                                    type="number"
                                    onChange={handleChange}
                                    value={imperialRider? inputs.heightFeet : inputs.heightCM}
                                    name={imperialRider? "heightFeet" : "heightCM"}
                                    />
                            </FormControl>
                        </GridItem>
                        {imperialRider &&
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Height (inches)</FormLabel>
                                    <Input 
                                        placeholder="2" 
                                        maxWidth={24} 
                                        focusBorderColor='brand.blue'
                                        type="number"
                                        value={inputs.heightInches}
                                        name={"heightInches"}
                                        onChange={handleChange}
                                        />
                                </FormControl>
                            </GridItem>
                        }
                    </SimpleGrid>
                    <SimpleGrid columns={1}> 
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Weight Bias</FormLabel>
                                <Select
                                    id="weightBias"
                                    focusBorderColor='brand.blue' 
                                    name="weightBias"  
                                    onChange={e => handleChange(e)}
                                    value={inputs.weightBias}> 
                                        <option value="">-- Choose --</option>
                                        <option value="neutral"> Neutral </option>
                                        <option value="rearward"> Rearward </option>
                                        <option value="forward"> Forward </option>
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
                                onClick={toggleBikeUnit}>
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
                                onClick={toggleBikeUnit}>
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
                                        type="number"
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
                                        type="number"
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
                                    name="bikeType"
                                    value={inputs.bikeType}
                                    onChange={e => handleChange(e)}
                                    > 
                                    <option value="">-- Choose --</option>
                                    <option value="enduro"> Enduro </option>
                                    <option value="trail"> Trail </option>
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
