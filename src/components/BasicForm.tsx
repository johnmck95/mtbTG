import {useState} from "react"
import {Button, Flex, VStack, Input, Container, SimpleGrid, GridItem, FormControl, FormLabel, Select, Heading, Divider, Box, HStack } from "@chakra-ui/react"

export default function BasicForm() {
    const [inputs, setInputs] = useState({
        height: "",
        bikeType: "",
        weightBias: "",
        reach: "",
        stack: ""
    })

    const [imperialRider, setImperialRider] = useState(true)

    return(
        <Container  maxW="37.5rem">
            <VStack bg="brand.darkGrey" borderRadius="16px" pb="20px">

                <Flex position="relative" justifyContent={["space-around", "center"]} w="100%">
                    <Heading as='h2' textAlign="center" fontSize={["xl", "2xl"]} color="brand.white" maxW="80%" ml={[-4, 0]} marginTop={["1rem", "1.5rem","2rem"]} > RIDER METRICS </Heading>
                    <Box >
                        <Button 
                            position="absolute" 
                            right="65px" 
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
                                    <FormLabel fontSize={["xs", "sm", "md"]}>Height (feet)</FormLabel>
                                    <Input placeholder="6" maxWidth={24}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]}>Height (inches)</FormLabel>
                                    <Input placeholder="2" maxWidth={24}/>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    }{!imperialRider &&
                        <SimpleGrid columns={2} columnGap={2}>
                            <GridItem colSpan={1} pb={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]}>Height (cm)</FormLabel>
                                    <Input placeholder="187" maxWidth={24}/>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    }
                    <SimpleGrid columns={1}> 
                        <GridItem colSpan={1} pb={1}>
                            <FormControl>
                                <FormLabel fontSize={["xs", "sm", "md"]}>Bike Type</FormLabel>
                                <Select> 
                                    <option value="end"> Enduro </option>
                                    <option value="tr"> Trail </option>
                                    <option value="xc"> Cross Country</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel fontSize={["xs", "sm", "md"]}>Weight Bias</FormLabel>
                                <Select> 
                                    <option value="neutral">Neutral </option>
                                    <option value="rearward"> Rearward </option>
                                    <option value="forward"> Forward</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>
                    </Container>

                    <Heading as='h2' textAlign="center" fontSize="2xl" color="brand.white" maxW="80%" marginTop={["1rem", "1.5rem","2rem"]} > BIKE METRICS </Heading>
                    <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" marginBottom="8rem"/>
                    <Container maxW={["85%", "75%"]}>
                        <SimpleGrid columns={2} columnGap={4} pb={3}>
                            <GridItem colSpan={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]}>Reach (mm)</FormLabel>
                                    <Input placeholder="510" maxWidth={24}/>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <FormControl>
                                    <FormLabel fontSize={["xs", "sm", "md"]}>Stack (mm)</FormLabel>
                                    <Input placeholder="640" maxWidth={24}/>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    </Container>

                    <Button w={36} bg="brand.blue" borderRadius='50px'> Next </Button>
            </VStack>
        </Container> 
    )
}