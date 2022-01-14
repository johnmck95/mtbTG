import {Text, Divider, Button, GridItem, Heading, HStack, SimpleGrid, VStack, Container, Icon, Box} from "@chakra-ui/react"
import {useState} from "react"
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"

interface BasicOutputProps{
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
    outputs: {
        barWidth: string,
        barRise: string,
        stemLength: string,
        spacers: string,
        frontTirePSI: string,
        rearTirePSI: string,
        inserts: string,
    }
}

export default function BasicOutput({inputs, outputs}: BasicOutputProps) {
    const [showSidePanel, setShowSidePanel] = useState(true)
    const [metricOutput, setMetricOutput] = useState(true)

    return(
        <Container maxW="75rem" h="calc(100vh - 50px)">
            <HStack justify="center" alignItems={"flex-start"} py={10} >
                {showSidePanel &&
                <VStack w="30%" bg="#414A4C" pr={0} borderRadius="md" >
                    <Heading fontSize="xl">
                        RIDER INFORMATION
                    </Heading>
                    <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" mb="8rem"/>
                    <SimpleGrid columns={2} columnGap={2} w="75%">

                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text>Height</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{inputs.heightCM}cm</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text>Weight</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{inputs.weightKG}kg</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text>Handling</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{inputs.handling}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text>Skill Level</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{inputs.skillLevel}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text>Reach</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{inputs.reachMM}mm</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text>Stack</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{inputs.stackMM}mm</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text>Bike Type</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{inputs.bikeType}</Text>
                        </GridItem>
                    </SimpleGrid>
                </VStack>
                }





                <VStack w={['100%', '80%']} bg="brand.darkGrey"borderRadius="md">
                    <HStack w="100%" justify='space-between'>
                        <HStack w={['60%', '80%']} justify='center' position='relative'>
                            <Icon 
                                as={showSidePanel? FaArrowRight : FaArrowLeft} 
                                position='absolute'
                                left='7%'
                                top='75%'
                                transform={'translate(-50%, -50%)'}
                                color="brand.white" 
                                w={5} h={5} 
                                alignSelf={"flex-start"}
                                onClick={() => setShowSidePanel(prevShowSidePanel => !prevShowSidePanel)}
                                />
                            <Heading fontSize={['lg', "xl"]} ml='auto' pt={4}>YOUR SETTINGS</Heading>
                        </HStack>
                        <Box bg='red' position='relative' top="20px">
                                <Button 
                                    position="absolute" 
                                    right="65px"
                                    bottom="2px"
                                    size={'xs'} 
                                    marginTop={["1rem", "1.5rem","2rem"]}
                                    zIndex={metricOutput? 0 : 1}
                                    color={metricOutput? "brand.black": "brand.white"}
                                    bg={metricOutput? "brand.lightGrey" : "brand.blue"} 
                                    onClick={() => setMetricOutput(prevMetricOutput => !prevMetricOutput)}
                                    _hover={metricOutput? { bg: "brand.lightGrey", filter: "brightness(110%)"}
                                                        : {bg: "brand.blue", filter: "brightness(90%)"} }
                                    >
                                        Metric
                                </Button>
                                <Button 
                                    position="absolute" 
                                    right="10px" 
                                    bottom="2px"
                                    size="xs" 
                                    variant="ghost" 
                                    marginTop={["1rem", "1.5rem","2rem"]}
                                    zIndex={metricOutput? 1 : 0}
                                    bg={metricOutput? "brand.blue": "brand.lightGrey"} 
                                    color={metricOutput? "brand.white": "brand.black"}
                                    onClick={() => setMetricOutput(prevMetricOutput => !prevMetricOutput)}
                                    _hover={metricOutput? {bg: "brand.blue", filter: "brightness(90%)"}
                                                        : { bg: "brand.lightGrey", filter: "brightness(110%)"} }
                                    >
                                        Imperial
                                </Button>
                            </Box>
                    </HStack>
                    <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" mb="8rem"/>
                    <SimpleGrid columns={3} columnGap={2} w={['85%', '80%', '75%']}>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text textDecoration={"underline"}>Handlebar Width</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{outputs.barWidth}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Button size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text textDecoration={"underline"}>Handlebar Rise</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{outputs.barRise}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Button size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text textDecoration={"underline"}>Stem Length</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{outputs.stemLength}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Button size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text textDecoration={"underline"}>Stem Spacers</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{outputs.spacers}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right" mb={8}>
                            <Button size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text textDecoration={"underline"}>Front Tire</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{outputs.frontTirePSI}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Button size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text textDecoration={"underline"}>Rear Tire</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{outputs.rearTirePSI}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Button size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="left">
                            <Text textDecoration={"underline"}>Inserts</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Text>{outputs.inserts}</Text>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" textAlign="right">
                            <Button size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
                        </GridItem>
                    </SimpleGrid>
                </VStack>
            </HStack>
        </Container>
    )
}
