import React from "react"
import {Button, VStack, Input, Container, SimpleGrid, GridItem, FormControl, FormLabel, Select, Heading, Divider} from "@chakra-ui/react"

export default function BasicForm() {
    return(
        <Container  maxW="37.5rem">
            <VStack bg="brand.darkGrey" borderRadius="16px" pb="20px">
                <Heading as='h2' textAlign="center" fontSize="2xl" color="brand.white" maxW="80%" marginTop={["1rem", "1.5rem","2rem"]} > RIDER METRICS </Heading>
                <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" marginBottom="8rem"/>
                
                <Container maxW={["85%", "75%"]}>
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