import {ChangeEvent, useState} from "react"
import {Button, HStack, Text, Icon, Flex, VStack, Input, Container, SimpleGrid, GridItem, FormControl, FormLabel, Heading, Divider, Box} from "@chakra-ui/react"
import CustomRadio from "./CustomRadio"
import "../styling/basicForm.css"
import {BsExclamationTriangle} from "react-icons/bs"

interface RiderConversionProps{
    heightCMCalc: number;
    heightFootCalc: number;
    heightInchesCalc: number;
}
interface BikeConversionProps{
    reachMMCalc: number;
    reachInchCalc: number;
    stackMMCalc: number;
    stackInchCalc: number;
}
interface BasicFormProps{
    inputs: {
        heightFeet: string,
        heightInches: string,
        heightCM: string,
        weightBias: string,
        reachInches: string,
        reachMM: string,
        stackInches: string,
        stackMM: string,
        bikeType: string
    };
    handleChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void; //all these name have 'Basic' after 'handle' when in Home.tsx
    handleCustomRadio: (name: string, value: string) => void;
    handleRiderConversion: ({heightCMCalc, heightFootCalc, heightInchesCalc}: RiderConversionProps) => void;
    handleBikeConversion: ({reachMMCalc, reachInchCalc, stackMMCalc, stackInchCalc}: BikeConversionProps) => void;
    handleFormCompletion: () => void;
}

export default function BasicForm({inputs, handleChange, handleCustomRadio, handleRiderConversion, handleBikeConversion, handleFormCompletion}: BasicFormProps) {
    const [imperialRider, setImperialRider] = useState(true)
    const [imperialBike, setImperialBike] = useState(false)
    let requirements = 5 // Used for form submission. Needs to be updated when metric/imperial button state changes.

    function toggleRiderUnit() {
        setImperialRider(prevImperialRider => !prevImperialRider)
        if (imperialRider)
            requirements = 7
        else
            requirements = 5
        riderStateConversion()
    }

    function toggleBikeUnit(){
        setImperialBike(prevImperialBike => !prevImperialBike)
        bikeStateConversion()
    }

    // NOTE: watch out for 'e' in the input - currently unhandled
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
        // updates state in home.tsx
        handleRiderConversion({heightCMCalc, heightFootCalc, heightInchesCalc})
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
        // updates state in home.tsx
        handleBikeConversion({reachMMCalc, reachInchCalc, stackMMCalc, stackInchCalc})
    }

    function handleSubmit() {
        const {heightFeet, heightInches, heightCM, weightBias, reachInches, reachMM, stackInches, stackMM, bikeType} = inputs
        let criteria = 0
        if(imperialRider)
            requirements = 7; // additional checks required

        /* 1. Check heightFeet is an integer for imperialRider*/
        if(imperialRider && Number.isInteger(parseFloat(heightFeet)) && parseFloat(heightFeet) >= 0){
            criteria++
        }else if(imperialRider){
            console.log("Please enter a valid integer for Height (feet).")
            return
        }

        /* 2. Check heightInches is an integer from 0-11 for imperialRider */
        if( imperialRider && parseFloat(heightInches) >= 0 && parseFloat(heightInches) < 12){
            criteria++
        }else if(imperialRider) {
            console.log("Please enter an value between 0-11 for Height (inches).")
            return
        }

        /* 3. Check height is from 5'0 to 6'6  for imperialRider*/
        if( (imperialRider && (((parseInt(heightFeet) === 6 && parseFloat(heightInches) <= 6) 
            || parseInt(heightFeet) === 5) && parseFloat(heightInches) < 12 ))){
                criteria++
        }else if (imperialRider){
            console.log("Please enter a Height between 5'0 and 6'6.")
            return
        }

        /* 4. Check height is from 152cm to 198cm for metricRider */
        if(!imperialRider && (parseInt(heightCM) >= 152 && parseInt(heightCM) <= 198)){
            criteria++
        }else if(!imperialRider){
            console.log("Please enter a Height between 152cm and 198cm.")
            return
        }

        /* 5. Check a weight bias has been selected for all riders */
        if (weightBias !== ""){
            criteria++
        }else{
            console.log("Please select a Weight Bias.")
            return
        }

        /* 6. Check the reach is from 400mm to 550mm for a metricRider*/
        if( !imperialBike && ((parseInt(reachMM) >= 400 && parseInt(reachMM) <= 550))){
            criteria++
        }else if(!imperialBike){
            console.log("Please enter a reach value between 400mm and 550mm.")
            return
        }

        /* 7. Check the reach is from 15.75 - 21.65 inches for an imperialBike */
        if(imperialBike && (parseFloat(reachInches) >= 15.75 && parseFloat(reachInches) <= 21.65)){
            criteria++
        }else if(imperialBike){
            console.log("Please enter a reach value between 15.75 - 21.65 inches.")
        }

        /* 8. Check stack height is from 550mm to 680mm  for a metricRider*/
        if ( !imperialBike && (parseInt(stackMM) >= 550 && parseInt(stackMM) <= 680)){
                criteria++
        }else if(!imperialBike){
            console.log("Please enter a stack value between 550m and 680mm.")
            // set a stack error
        }

        /* 9. Check the stack height is from 21.65 - 26.77 inches for an imperialRider */
        if(imperialBike && (parseFloat(stackInches) >= 21.65 && parseFloat(stackInches) <= 26.77)){
            criteria++
        }else if(imperialBike){
            console.log("Please enter a stack value between 21.65 - 26.77 inches.")
        }

        /* 10. Check a bike type has been selected */
        if(bikeType !== ""){ // #5
            criteria++
        }else{
            console.log("Please select a bike type")
        }

        console.log("Criteria: " + criteria + "/" + requirements)
        if (criteria === requirements)
            handleFormCompletion()
    }

    return(
        <div className="basicFormBox">
            <Container maxW="37.5rem">
                <VStack bg="brand.darkGrey" borderRadius="16px" pb={4} my={10} >
                    <Flex position="relative" justifyContent={["space-around", "center"]} w="100%">
                        <Heading 
                            as='h2' 
                            textAlign="center" 
                            fontSize={["xl", "2xl"]} 
                            color="brand.white" 
                            maxW="80%" 
                            ml={[-4, 0]} 
                            mt={["1rem", "1.25rem"]} 
                            >
                                RIDER METRICS 
                        </Heading>
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
                                <FormControl autoComplete="none">
                                    <FormLabel 
                                        fontSize={["xs", "sm", "md"]} 
                                        mx={0} mb="2px"
                                        >Height {imperialRider? "(feet)" : "(cm)"}
                                    </FormLabel>
                                    <Input 
                                        placeholder={imperialRider? "6" : "187"}
                                        maxWidth={24} 
                                        focusBorderColor='brand.blue'
                                        type="number"
                                        boxShadow='md'  
                                        borderColor="brand.lightGrey"
                                        autoComplete="off"
                                        onChange={handleChange}
                                        value={imperialRider? inputs.heightFeet : inputs.heightCM}
                                        name={imperialRider? "heightFeet" : "heightCM"}
                                        />
                                </FormControl>
                            </GridItem>
                            {imperialRider &&
                                <GridItem colSpan={1} pb={1}>
                                    <FormControl>
                                        <FormLabel 
                                            fontSize={["xs", "sm", "md"]} 
                                            mx={0} 
                                            mb="2px"
                                            >Height (inches)
                                        </FormLabel>
                                        <Input 
                                            placeholder="2" 
                                            maxWidth={24} 
                                            focusBorderColor='brand.blue'
                                            type="number"
                                            boxShadow='md'
                                            borderColor="brand.lightGrey"
                                            autoComplete="off"
                                            value={inputs.heightInches}
                                            name={"heightInches"}
                                            onChange={handleChange}
                                            />
                                    </FormControl>
                                </GridItem>
                            }
                            <GridItem colSpan={2}>
                                <HStack>
                                    <Icon as={BsExclamationTriangle} color="#d5798a" w={5} h={5}/>
                                    <Text color="#d5798a" fontWeight={500}>Please enter a height from 5'0 to 7'0</Text>
                                </HStack>
                            </GridItem>
                        </SimpleGrid>
                        <SimpleGrid columns={1}> 
                            <GridItem colSpan={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]} mx={0} mb="2px">Weight Bias</FormLabel>
                                    <Flex flexWrap="wrap" justify={["space-evenly", "space-between"]} spacing={3}>
                                        <Box mb={["10px", 0]} w={["45%", "31%"]} mr={[2, 0]}>
                                            <CustomRadio 
                                                title="Rearward" 
                                                name="weightBias" 
                                                value="rearward" 
                                                isChecked={inputs.weightBias === "rearward" ? true : false} 
                                                handleCustomRadio={handleCustomRadio}
                                                />
                                        </Box>
                                        <Box mb={["10px", 0]} w={["45%", "31%"]} ml={[2, 0]}>
                                            <CustomRadio 
                                                title="Neutral" 
                                                name="weightBias" 
                                                value="neutral" 
                                                isChecked={inputs.weightBias === "neutral" ? true : false} 
                                                handleCustomRadio={handleCustomRadio}
                                                />
                                        </Box>
                                        <Box mb={0} w={["50%", "31%"]}>
                                            <CustomRadio 
                                                title="Forward" 
                                                name="weightBias" 
                                                value="forward" 
                                                isChecked={inputs.weightBias === "forward" ? true : false} 
                                                handleCustomRadio={handleCustomRadio}
                                                />
                                        </Box>
                                    </Flex>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                        </Container>
                        <Flex position="relative" justifyContent={["space-around", "center"]} w="100%">
                            <Heading 
                                as='h2' 
                                textAlign="center" 
                                fontSize={["xl", "2xl"]} 
                                color="brand.white" 
                                maxW="80%" ml={[-4, 0]} 
                                mt={["1rem", "1.25rem"]} 
                                > 
                                BIKE METRICS 
                            </Heading>
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
                                        <FormLabel 
                                            fontSize={["xs", "sm", "md"]} 
                                            mx={0} 
                                            mb="2px">
                                                Reach {imperialBike? "(inches)" : "(mm)"}
                                        </FormLabel>
                                        <Input 
                                            placeholder={imperialBike? "20.08" : "510"} 
                                            maxWidth={24} 
                                            focusBorderColor='brand.blue'
                                            boxShadow='md'
                                            borderColor="brand.lightGrey"
                                            autoComplete="off"
                                            type="number"
                                            value={imperialBike? inputs.reachInches : inputs.reachMM}
                                            name={imperialBike? "reachInches" : "reachMM"}
                                            onChange={handleChange}
                                            />
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <FormControl>
                                        <FormLabel 
                                            fontSize={["xs", "sm", "md"]} 
                                            mx={0} 
                                            mb="2px">
                                                Stack {imperialBike? "(inches)" : "(mm)"}
                                        </FormLabel>
                                        <Input 
                                            placeholder={imperialBike? "25.20" : "640"} 
                                            maxWidth={24} 
                                            focusBorderColor='brand.blue'
                                            type="number"
                                            boxShadow='md'
                                            borderColor="brand.lightGrey"
                                            autoComplete="off"
                                            value={imperialBike? inputs.stackInches : inputs.stackMM}
                                            name={imperialBike? "stackInches" : "stackMM"}
                                            onChange={handleChange}
                                            />
                                    </FormControl>
                                </GridItem>
                            </SimpleGrid>
                                <FormLabel 
                                    fontSize={["xs", "sm", "md"]} 
                                    mx={0} 
                                    mb="2px">
                                        Bike Type
                                </FormLabel>
                                <SimpleGrid columns={[2]} columnGap={[6, 6, 14]} mb={3}> 
                                    <GridItem colSpan={1}>
                                        <CustomRadio 
                                            title="Enduro" 
                                            name="bikeType" 
                                            value="enduro" 
                                            isChecked={inputs.bikeType === "enduro" ? true : false} 
                                            handleCustomRadio={handleCustomRadio}
                                            />
                                    </GridItem>
                                    <GridItem colSpan={1} >
                                        <CustomRadio 
                                            title="Trail" 
                                            name="bikeType" 
                                            value="trail" 
                                            isChecked={inputs.bikeType === "trail" ? true : false} 
                                            handleCustomRadio={handleCustomRadio}
                                            />
                                    </GridItem>
                                </SimpleGrid>
                        </Container>
                        <Button 
                            w={36} 
                            bg="brand.blue" 
                            borderRadius='50px'
                            onClick={handleSubmit}
                            > 
                                Calculate 
                        </Button>
                </VStack>
            </Container> 
        </div>
    )
}
