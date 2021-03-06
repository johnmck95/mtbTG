import {ChangeEvent, useState, useEffect} from "react"
import {Button, Flex, VStack, Input, Container, SimpleGrid, GridItem, FormControl, FormLabel, Heading, Divider, Box} from "@chakra-ui/react"
import CustomRadio from "../CustomRadio/CustomRadio"
import "../../styling/form.css"
import {errorCodes} from "../../data/ErrorCodes"
import ErrorAlert from "../ErrorAlert/ErrorAlert"
import SkillSlider from "../SkillSlider/SkillSlider"

interface RiderConversionProps{
    heightCMCalc: number;
    heightFootCalc: number;
    heightInchesCalc: number;
    weightLBCalc: number;
    weightKGCalc: number;
}
interface BikeConversionProps{
    reachMMCalc: number;
    reachInchCalc: number;
    stackMMCalc: number;
    stackInchCalc: number;
}
interface FormProps{
    inputs: {
        heightFeet: string,
        heightInches: string,
        heightCM: string,
        weightLB: string,
        weightKG: string,
        handling: string,
        skillLevel: string,
        reachInches: string,
        reachMM: string,
        stackInches: string,
        stackMM: string,
        bikeType: string
    };
    imperialRider: boolean,
    imperialBike: boolean,
    handleImperialRider: () => void,
    handleImperialBike: () => void,
    handleChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
    handleCustomComponent: (name: string, value: string) => void;
    handleRiderConversion: ({heightCMCalc, heightFootCalc, heightInchesCalc}: RiderConversionProps) => void;
    handleBikeConversion: ({reachMMCalc, reachInchCalc, stackMMCalc, stackInchCalc}: BikeConversionProps) => void;
    handleFormCompletion: () => void;
    handleReRender: () => void;
}

export default function Form({inputs, imperialRider, imperialBike, handleImperialRider, handleImperialBike, handleChange, handleCustomComponent, handleRiderConversion, handleBikeConversion, handleFormCompletion, handleReRender}: FormProps) {
    const [showErrors, setShowErrors] = useState(false)

    // TODO: Fix the "missing dependencies: 'handleErrors' and 'showErrors' " warning. This is a dangerous useEffect. (Currently disabled warning)
    useEffect(() => {
        if(showErrors)
            handleErrors()
            // eslint-disable-next-line
    }, [imperialRider, imperialBike, inputs])

    function toggleRiderUnit() {
        handleImperialRider()
        riderStateConversion()
    }

    function toggleBikeUnit(){
        handleImperialBike()
        bikeStateConversion()
    }

    function riderStateConversion() {
        let heightCMCalc = -1;
        let heightFootCalc = -1;
        let heightInchesCalc = -1;
        let weightKGCalc = -1;
        let weightLBCalc = -1;

        if (imperialRider && inputs.heightFeet !== "" && inputs.heightInches !== ""){
             heightCMCalc = parseInt(inputs.heightFeet) * 30.48 + parseFloat(inputs.heightInches) * 2.54;
        }if (!imperialRider && inputs.heightCM !== ""){
            const totalInches = parseFloat(inputs.heightCM) / 2.54;
            heightFootCalc = Math.floor(totalInches / 12);
            heightInchesCalc = totalInches % 12;
        }if (imperialRider && inputs.weightLB !== ""){
            weightKGCalc = parseFloat(inputs.weightLB) * 0.45359237
        }if (!imperialRider && inputs.weightKG !== "")
            weightLBCalc = parseFloat(inputs.weightKG) * 2.2046226218
        
        handleRiderConversion({heightCMCalc, heightFootCalc, heightInchesCalc, weightLBCalc, weightKGCalc})
    }

    function bikeStateConversion() {
        let reachMMCalc = -1;
        let reachInchCalc = -1;
        let stackMMCalc = -1;
        let stackInchCalc = -1;
        
        if (!imperialBike && inputs.reachMM !== "")
            reachInchCalc = parseFloat(inputs.reachMM)/25.4
        if (!imperialBike && inputs.stackMM !== "")
            stackInchCalc = parseFloat(inputs.stackMM)/25.4
        if (imperialBike && inputs.reachInches !== "")
            reachMMCalc = parseFloat(inputs.reachInches)*25.4
        if (imperialBike && inputs.stackInches !== "")
            stackMMCalc = parseFloat(inputs.stackInches)*25.4

        handleBikeConversion({reachMMCalc, reachInchCalc, stackMMCalc, stackInchCalc})
    }

    let formHasErrors = true
    function handleErrors() {
        const {heightFeet, heightInches, weightKG, weightLB, heightCM, handling, reachInches, reachMM, stackInches, stackMM, bikeType} = inputs
        let criteria = 0;
        let requirements;

        if (imperialRider) requirements = 9
        else if (!imperialRider) requirements = 7

        if (imperialRider && Number.isInteger(parseFloat(heightFeet)) && parseFloat(heightFeet) >= 0) {
            criteria++
            errorCodes[0].showError = false
        } else if (imperialRider){
            errorCodes[0].showError = true
        }
        if ( imperialRider && parseFloat(heightInches) >= 0 && parseFloat(heightInches) < 12){
            criteria++
            errorCodes[1].showError = false
        } else if (imperialRider) {
            errorCodes[1].showError = true
        }
        const totalInches = parseInt(heightFeet) * 12 + parseFloat(heightInches)
        if ( imperialRider && totalInches >= 60 && totalInches <= 78){
                criteria++
                errorCodes[2].showError = false
        } else if (imperialRider){
            errorCodes[2].showError = true
        }
        if (!imperialRider && (parseFloat(heightCM) >= 152.4 && parseFloat(heightCM) <= 198)){
            criteria++
            errorCodes[3].showError = false
        } else if (!imperialRider){
            errorCodes[3].showError = true
        }
        if (handling !== ""){
            criteria++
            errorCodes[4].showError = false
        } else {
            errorCodes[4].showError = true
        }
        if ( !imperialBike && ((parseFloat(reachMM) >= 400 && parseFloat(reachMM) <= 550))){
            criteria++
            errorCodes[5].showError = false
        } else if (!imperialBike){
            errorCodes[5].showError = true
        }
        if (imperialBike && (parseFloat(reachInches) >= 15.75 && parseFloat(reachInches) <= 21.65)){
            criteria++
            errorCodes[6].showError = false
        } else if (imperialBike){
            errorCodes[6].showError = true
        }
        if ( !imperialBike && (parseFloat(stackMM) >= 550 && parseFloat(stackMM) <= 680)){
                criteria++
                errorCodes[7].showError = false
        } else if (!imperialBike){
            errorCodes[7].showError = true
        }
        if ( imperialBike && (parseFloat(stackInches) >= 21.65 && parseFloat(stackInches) <= 26.77)){
            criteria++
            errorCodes[8].showError = false
        } else if ( imperialBike ){
            errorCodes[8].showError = true
        }
        if ( bikeType !== ""){
            criteria++
            errorCodes[9].showError = false
        } else {
            errorCodes[9].showError = true
        } if ( imperialRider && parseFloat(weightLB) >= 80 && parseFloat(weightLB) <= 240){
            criteria++
            errorCodes[10].showError = false
        } else if (imperialRider){
            errorCodes[10].showError = true
        } if ( !imperialRider && parseFloat(weightKG) >= 36 && parseFloat(weightKG) <= 109){
            criteria++
            errorCodes[11].showError = false
        } else if (!imperialRider){
            errorCodes[11].showError = true
        } if ( inputs.skillLevel !== "") {
            criteria++
            errorCodes[12].showError = false
        } else {
            errorCodes[12].showError = true
        }

        if(criteria === requirements)
            formHasErrors = false

        handleReRender()
    }

    function handleSubmit() {
        setShowErrors(() => true)
        handleErrors()
        if(!formHasErrors){
            riderStateConversion()
            bikeStateConversion()
            handleFormCompletion()
        }
    }

    const heightErrorAlerts = errorCodes.map(error => {
        if (imperialRider && error.showError && error.errorNumber < 3){
            return <ErrorAlert key={error.errorNumber} errorMessage={error.errorMessage}/>
        } else if (!imperialRider && error.showError && error.errorNumber === 3){
            return <ErrorAlert key={error.errorNumber} errorMessage={error.errorMessage}/>
        } else return null
    })
    const weightErrorAlerts = errorCodes.map(error => {
        if (imperialRider && error.showError && error.errorNumber === 10){
            return <ErrorAlert key={error.errorNumber} errorMessage={error.errorMessage}/>
        } else if(!imperialRider && error.showError && error.errorNumber === 11){
            return <ErrorAlert key={error.errorNumber} errorMessage={error.errorMessage}/>
        } else return null
    })
    const handlingErrorAlerts = errorCodes.map(error => {
        if (error.showError && error.errorNumber === 4)
            return <ErrorAlert key={error.errorNumber} errorMessage={error.errorMessage}/>
        else return null
    })
    const skillLevelErrorAlerts = errorCodes.map(error => {
        if (error.showError && error.errorNumber === 12)
            return <ErrorAlert key={error.errorNumber} errorMessage={error.errorMessage} />
        else return null
    })
    const reachStackErrorAlerts = errorCodes.map(error => {
        if (!imperialBike && error.showError && (error.errorNumber === 5 || error.errorNumber === 7)){
            return <ErrorAlert  key={error.errorNumber} errorMessage={error.errorMessage} />
        } else if (imperialBike && error.showError && (error.errorNumber === 6 || error.errorNumber === 8)){
            return <ErrorAlert key={error.errorNumber} errorMessage={error.errorMessage} />
        } else return null
    })
    const bikeTypeErrorAlerts = errorCodes.map(error => {
        if (error.showError && error.errorNumber === 9){
            return <ErrorAlert key={error.errorNumber} errorMessage={error.errorMessage} />
        } else return null       
    })

    return(
        <div className="formBox">
            <Container maxW="37.5rem" py={4}>
                <VStack bg="brand.darkGrey" borderRadius="16px" pb={4} my={10} boxShadow='2xl'>
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
                                tabIndex={-1}
                                position="absolute" 
                                right="65px"
                                bottom="2px"
                                size="xs" 
                                marginTop={["1rem", "1.5rem","2rem"]}
                                zIndex={imperialRider? 0 : 1}
                                color={imperialRider? "brand.black": "brand.white"}
                                bg={imperialRider? "brand.lightGrey" : "brand.blue"} 
                                onClick={toggleRiderUnit}
                                _hover={ imperialRider? { bg: "brand.lightGrey", filter: "brightness(110%)"}
                                                      : {bg: "brand.blue", filter: "brightness(90%)"} }
                                >
                                    Metric
                            </Button>
                            <Button 
                                tabIndex={-1}
                                position="absolute" 
                                right="10px" 
                                bottom="2px"
                                size="xs" 
                                variant="ghost" 
                                marginTop={["1rem", "1.5rem","2rem"]}
                                zIndex={imperialRider? 1 : 0}
                                bg={imperialRider? "brand.blue": "brand.lightGrey"} 
                                color={imperialRider? "brand.white": "brand.black"}
                                onClick={toggleRiderUnit}
                                _hover={ imperialRider? {bg: "brand.blue", filter: "brightness(90%)"}
                                                     : { bg: "brand.lightGrey", filter: "brightness(110%)"} }
                                data-testid="imperialRiderButton"
                                >
                                    Imperial
                            </Button>
                        </Box>
                    </Flex>
                    <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" mb="8rem"/>
                    <Container maxW={["85%", "75%"]}>
                        <SimpleGrid columns={2} columnGap={2}>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl autoComplete="none">
                                    <FormLabel 
                                        fontSize={["sm", "md"]} 
                                        mx={0} mb="2px"
                                        >Height {imperialRider? "(feet)" : "(cm)"}
                                    </FormLabel>
                                    <Input 
                                        placeholder={imperialRider? "5" : "178"}
                                        maxWidth={24} 
                                        focusBorderColor='brand.blue'
                                        type="number"
                                        boxShadow='md'  
                                        borderColor={
                                            imperialRider? ((errorCodes[0].showError || errorCodes[2].showError)? "brand.error" : "brand.lightGrey")
                                                : (errorCodes[3].showError? "brand.error" : "brand.lightGrey") 
                                        }
                                        autoComplete="off"
                                        onChange={handleChange}
                                        value={imperialRider? inputs.heightFeet : inputs.heightCM}
                                        name={imperialRider? "heightFeet" : "heightCM"}
                                        _placeholder={{ color: 'brand.placeholder' }}
                                        />
                                </FormControl>
                            </GridItem>
                            {imperialRider &&
                                <GridItem colSpan={1} pb={1}>
                                    <FormControl>
                                        <FormLabel 
                                            fontSize={["sm", "md"]} 
                                            mx={0} 
                                            mb="2px"
                                            >Height (inches)
                                        </FormLabel>
                                        <Input 
                                            placeholder="10" 
                                            maxWidth={24} 
                                            focusBorderColor='brand.blue'
                                            type="number"
                                            boxShadow='md'
                                            borderColor={(errorCodes[1].showError || errorCodes[2].showError)? "brand.error" : "brand.lightGrey"}
                                            autoComplete="off"
                                            value={inputs.heightInches}
                                            name={"heightInches"}
                                            onChange={handleChange}
                                            _placeholder={{ color: 'brand.placeholder' }}
                                            />
                                    </FormControl>
                                </GridItem>
                            }
                            {heightErrorAlerts}
                           
                            <GridItem colSpan={1} pb={1}>
                                <FormControl autoComplete="none">
                                    <FormLabel 
                                        fontSize={["sm", "md"]} 
                                        mx={0} mb="2px"
                                        >Weight {imperialRider? "(lb)" : "(kg)"}
                                    </FormLabel>
                                    <Input 
                                        placeholder={imperialRider? "170" : "77"}
                                        maxWidth={24} 
                                        focusBorderColor='brand.blue'
                                        type="number"
                                        boxShadow='md'  
                                        borderColor={
                                            imperialRider? (errorCodes[10].showError? "brand.error" : "brand.lightGrey")
                                                : (errorCodes[11].showError? "brand.error" : "brand.lightGrey") 
                                        }
                                        autoComplete="off"
                                        onChange={handleChange}
                                        value={imperialRider? inputs.weightLB : inputs.weightKG}
                                        name={imperialRider? "weightLB" : "weightKG"}
                                        _placeholder={{ color: 'brand.placeholder' }}
                                        />
                                </FormControl>
                            </GridItem>
                            {weightErrorAlerts}
                        </SimpleGrid>
                        <SimpleGrid columns={1}> 
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <FormLabel fontSize={["sm", "md"]} mx={0} mb="2px">Handling</FormLabel>
                                    <Flex justify="space-between" spacing={[2, 4, 6]} mb={2}>
                                        <Box mr={[2, 6]} w="100%" >
                                            <CustomRadio 
                                                title="Stable" 
                                                name="handling" 
                                                value="stable" 
                                                isChecked={inputs.handling === "stable" ? true : false} 
                                                isError={errorCodes[4].showError}
                                                handleCustomRadio={handleCustomComponent}
                                                />
                                        </Box>
                                        <Box w="100%">
                                            <CustomRadio 
                                                title="Neutral" 
                                                name="handling" 
                                                value="neutral" 
                                                isChecked={inputs.handling === "neutral" ? true : false} 
                                                isError={errorCodes[4].showError}
                                                handleCustomRadio={handleCustomComponent}
                                                />
                                        </Box>
                                        <Box w="100%" ml={[2, 6]}>
                                            <CustomRadio 
                                                title="Agile" 
                                                name="handling" 
                                                value="agile" 
                                                isChecked={inputs.handling === "agile" ? true : false}
                                                isError={errorCodes[4].showError}
                                                handleCustomRadio={handleCustomComponent}
                                                />
                                        </Box>
                                    </Flex>
                                </FormControl>
                            </GridItem>
                            {handlingErrorAlerts}
                            <GridItem colSpan={3}>
                                <FormLabel 
                                    fontSize={["sm", "md"]} 
                                    mx={0} 
                                    mb="2px"
                                    >Skill Level
                                </FormLabel>
                                <SkillSlider skillLevel={inputs.skillLevel} handleChange={handleCustomComponent}/>
                            </GridItem>
                            {skillLevelErrorAlerts}
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
                                    tabIndex={-1}
                                    position="absolute" 
                                    right="65px" 
                                    bottom="2px"
                                    size="xs" 
                                    marginTop={["1rem", "1.5rem","2rem"]}
                                    zIndex={imperialBike? 0 : 1}
                                    color={imperialBike? "brand.black" : "brand.white"}
                                    bg={imperialBike? "brand.lightGrey" : "brand.blue"} 
                                    onClick={toggleBikeUnit}
                                    _hover={ imperialBike? { bg: "brand.lightGrey", filter: "brightness(110%)" }
                                    : {bg: "brand.blue", filter: "brightness(90%)"} }
                                    >
                                        Metric
                                </Button>
                                <Button 
                                    tabIndex={-1}
                                    position="absolute" 
                                    right="10px" 
                                    bottom="2px"    
                                    size="xs" 
                                    variant="ghost" 
                                    marginTop={["1rem", "1.5rem","2rem"]}
                                    zIndex={imperialBike? 1 : 0}
                                    color={imperialBike? "brand.white": "brand.black"}
                                    bg={imperialBike? "brand.blue": "brand.lightGrey"} 
                                    onClick={toggleBikeUnit}
                                    _hover={ imperialBike? {bg: "brand.blue", filter: "brightness(90%)"}
                                                          : { bg: "brand.lightGrey", filter: "brightness(110%)"} }
                                    data-testid="imperialBikeButton"
                                    >
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
                                            fontSize={["sm", "md"]} 
                                            mx={0} 
                                            mb="2px">
                                                Reach {imperialBike? "(inches)" : "(mm)"}
                                        </FormLabel>
                                        <Input 
                                            placeholder={imperialBike? "18.70" : "475"} 
                                            maxWidth={24} 
                                            focusBorderColor='brand.blue'
                                            boxShadow='md'
                                            borderColor={imperialBike? (errorCodes[6].showError? "brand.error" : "brand.lightGrey") 
                                                                     : (errorCodes[5].showError? "brand.error" : "brand.lightGrey")}
                                            autoComplete="off"
                                            type="number"
                                            value={imperialBike? inputs.reachInches : inputs.reachMM}
                                            name={imperialBike? "reachInches" : "reachMM"}
                                            onChange={handleChange}
                                            _placeholder={{ color: 'brand.placeholder' }}
                                            />
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <FormControl>
                                        <FormLabel 
                                            fontSize={["sm", "md"]} 
                                            mx={0} 
                                            mb="2px">
                                                Stack {imperialBike? "(inches)" : "(mm)"}
                                        </FormLabel>
                                        <Input 
                                            placeholder={imperialBike? "24.41" : "620"} 
                                            maxWidth={24} 
                                            focusBorderColor='brand.blue'
                                            type="number"
                                            boxShadow='md'
                                            borderColor={imperialBike? (errorCodes[8].showError? "brand.error" : "brand.lightGrey") 
                                                                     : (errorCodes[7].showError? "brand.error" : "brand.lightGrey")}
                                            autoComplete="off"
                                            value={imperialBike? inputs.stackInches : inputs.stackMM}
                                            name={imperialBike? "stackInches" : "stackMM"}
                                            onChange={handleChange}
                                            _placeholder={{ color: 'brand.placeholder' }}
                                            />
                                    </FormControl>
                                </GridItem>
                                {reachStackErrorAlerts}
                            </SimpleGrid>
                                <FormLabel 
                                    fontSize={["sm", "md"]} 
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
                                            isError={errorCodes[9].showError}
                                            handleCustomRadio={handleCustomComponent}
                                            />
                                    </GridItem>
                                    <GridItem colSpan={1} >
                                        <CustomRadio 
                                            title="Trail" 
                                            name="bikeType" 
                                            value="trail" 
                                            isChecked={inputs.bikeType === "trail" ? true : false} 
                                            isError={errorCodes[9].showError}
                                            handleCustomRadio={handleCustomComponent}
                                            />
                                    </GridItem>
                                </SimpleGrid>
                                {bikeTypeErrorAlerts}
                        </Container>
                        <Button 
                            w={36} 
                            bg="brand.blue" 
                            borderRadius='50px'
                            onClick={handleSubmit}
                            _hover={{bg: "brand.blue", filter: "brightness(90%)"}}
                            > 
                                Calculate 
                        </Button>
                </VStack>
            </Container> 
        </div>
    )
}
