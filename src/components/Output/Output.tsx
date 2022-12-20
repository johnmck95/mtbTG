import {
    Text, 
    Divider, 
    Button, 
    GridItem, 
    Heading, 
    Stack, 
    HStack, 
    SimpleGrid, 
    VStack, 
    Container, 
    Icon, 
    Box
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegWindowClose, FaBars } from "react-icons/fa";
import '../../styling/output.css';
import LearnMoreModal from "../LearnMoreModal/LearnMoreModal";
import { OutputProps } from "../../types/interfaces";
import { SessionStorageKeys } from "../../types/enums";

export default function Output({inputs, outputs, imperialRider, imperialBike, handleShowForm}: OutputProps): JSX.Element {
    const [showSidePanel, setShowSidePanel] = useState(true);
    const [metricOutput, setMetricOutput] = useState(typeSafeUnits());

    function typeSafeUnits() {
        let metricUnits = true;
        const sessionStor = sessionStorage.getItem(SessionStorageKeys.outputUnit);
        if ( sessionStor !== null )
            metricUnits = JSON.parse(sessionStor);
        return metricUnits;
    }

    useEffect(() => {
        sessionStorage.setItem(SessionStorageKeys.outputUnit, JSON.stringify(metricOutput))
    }, [metricOutput])

    return(
        <div className='outputBox'>
            <Container maxW="75rem" h="calc(100vh - 50px)">
                <Stack direction={['column', 'column', 'row']} justify="center" alignItems={"center"} py={10} >
                    {showSidePanel &&
                    <VStack w={['100%', '80%', "30%"]} bg="brand.darkGrey" pr={0} borderRadius="md" alignSelf={['center', null, "flex-start",]}>
                        <HStack display='flex' justifyContent={'space-between'} w='100%' px={'2.5'}>
                            <Icon 
                                    as={FaRegWindowClose} 
                                    color="brand.white" 
                                    w={5} h={5} 
                                    alignSelf={"flex-end"}
                                    onClick={() => setShowSidePanel(prevShowSidePanel => !prevShowSidePanel)}
                                    />
                            <Heading 
                                fontSize="lg" 
                                pt={4} 
                                >
                                RIDER INFO
                            </Heading>
                            <Button
                               onClick={handleShowForm}
                               size={'xs'}
                               color={"brand.white"}
                               bg={"brand.blue"} 
                               _hover={{bg: "brand.blue", filter: "brightness(90%)"}}
                               _active={{bg: "brand.blue", filter: "brightness(90%)"}}
                               alignSelf={"flex-end"}
                            >
                                Edit
                            </Button>
                        </HStack>
                        <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" mb="8rem"/>
                        <SimpleGrid columns={2} columnGap={2} w="75%" pb={4}>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text>Height</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text>{imperialRider? parseInt(inputs.heightFeet) + '\'' + parseFloat(inputs.heightInches).toFixed(0) + "\"" : parseFloat(inputs.heightCM).toFixed(0) + 'cm'}</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text>Weight</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text>{imperialRider? parseFloat(inputs.weightLB).toFixed(0) + 'lb' : parseFloat(inputs.weightKG).toFixed(0) + 'kg'}</Text>
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
                                <Text>{imperialBike? parseFloat(inputs.reachInches).toFixed(2) + '"' : parseFloat(inputs.reachMM).toFixed(0) + 'mm'}</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text>Stack</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text>{imperialBike? parseFloat(inputs.stackInches).toFixed(2) + '"' : parseFloat(inputs.stackMM).toFixed(0) + 'mm'}</Text>
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
                                    as={FaBars} 
                                    position='absolute'
                                    left='11%'
                                    top='75%'
                                    transform={'translate(-50%, -50%)'}
                                    color="brand.white" 
                                    w={5} h={5} 
                                    alignSelf={"flex-start"}
                                    onClick={() => setShowSidePanel(prevShowSidePanel => !prevShowSidePanel)}
                                    />
                                <Heading fontSize={['lg', "xl"]} ml='auto' pl={4} pt={4}>YOUR SETTINGS</Heading>
                            </HStack>
                            <Box position='relative' top="20px">
                                <Button 
                                    position="absolute" 
                                    right="65px"
                                    bottom="2px"
                                    size={'xs'} 
                                    marginTop={["1rem", "1.5rem","2rem"]}
                                    zIndex={metricOutput? 1 : 0}
                                    color={metricOutput? "brand.white" : "brand.black"}
                                    bg={metricOutput? "brand.blue" : "brand.lightGrey"} 
                                    onClick={() => setMetricOutput(prevMetricOutput => !prevMetricOutput)}
                                    _hover={ metricOutput? {bg: "brand.blue", filter: "brightness(90%)"}
                                                        : { bg: "brand.lightGrey", filter: "brightness(110%)"} 
                                        }
                                    _active={{ bg: metricOutput? "brand.lightGrey" : "brand.blue",
                                        color: metricOutput? "brand.black" : "brand.white",
                                    }} 
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
                                    zIndex={metricOutput? 0 : 1}
                                    bg={metricOutput? "brand.lightGrey" : "brand.blue"} 
                                    color={metricOutput? "brand.black" : "brand.white"}
                                    onClick={() => setMetricOutput(prevMetricOutput => !prevMetricOutput)}
                                    _hover={ metricOutput? { bg: "brand.lightGrey", filter: "brightness(110%)"}
                                                        : {bg: "brand.blue", filter: "brightness(90%)"} 
                                    }
                                    _active={{ bg: metricOutput? "brand.blue" : "brand.lightGrey",
                                        color: metricOutput? "brand.white" : "brand.black",
                                    }} 
                                    >
                                        Imperial
                                </Button>
                    
                            </Box>
                        </HStack>
                        <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" mb="8rem"/>
                        <SimpleGrid columns={3} columnGap={2} w={['85%', '80%', '75%']} pb={4}>
                            <GridItem colSpan={3}>
                                <Text color='red.300' textAlign='justify'> 
                                    <b>IMPORTANT: The Tuning Guide is under active development and is NOT FUNCTIONAL at this time.</b>
                                </Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text textDecoration={"underline"}>Handlebar Width</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text>{metricOutput? outputs.barWidthMM : outputs.barWidthInch}{metricOutput? "mm" : '"'}</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <LearnMoreModal id={0}/>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text textDecoration={"underline"}>Handlebar Rise</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text>{metricOutput? outputs.barRiseMM : outputs.barRiseInch}{metricOutput? "mm" : '"'}</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <LearnMoreModal id={1}/> 
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text textDecoration={"underline"}>Stem Length</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text>{metricOutput? outputs.stemLengthMM : outputs.stemLengthInch}{metricOutput? "mm" : '"'}</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <LearnMoreModal  id={2}/> 
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text textDecoration={"underline"}>Stem Spacers</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text>{metricOutput? outputs.spacersMM : outputs.spacersInch}{metricOutput? "mm" : '"'}</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right" mb={8}>
                                <LearnMoreModal  id={3}/> 
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text textDecoration={"underline"}>Front Tire</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text data-testid='frontTireOutput'>{outputs.frontTirePSI}psi</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <LearnMoreModal id={4}/> 
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text textDecoration={"underline"}>Rear Tire</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text data-testid="rearTireOutput">{outputs.rearTirePSI}psi</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <LearnMoreModal id={5}/> 
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="left">
                                <Text textDecoration={"underline"}>Inserts</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <Text data-testid="insertsOutput">{outputs.inserts}</Text>
                            </GridItem>
                            <GridItem colSpan={1} w="100%" textAlign="right">
                                <LearnMoreModal  id={6}/> 
                            </GridItem>
                        </SimpleGrid>
                    </VStack>
                </Stack>
            </Container>
        </div>
    );
};
