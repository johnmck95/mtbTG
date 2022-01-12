import {Text, Divider, Button, GridItem, Heading, HStack, SimpleGrid, VStack} from "@chakra-ui/react"
import {useState} from "react"

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
    const [showSidePanel, setShopwSidePanel] = useState(true)
    return(
        <HStack justify="center" alignItems={"flex-start"} py={10}>
            {showSidePanel &&
            <VStack w="30%" bg="#414A4C" pr={0} borderRadius="md">
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





            <VStack w="60%" bg="brand.darkGrey" pl={0} borderRadius="md">
                <Heading fontSize="xl">
                    YOUR SETTINGS
                </Heading>
                <Divider orientation='horizontal' borderColor="brand.white" size="xl" maxW="95%" mb="8rem"/>
                <SimpleGrid columns={3} columnGap={2} w="75%">

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
    )
}


/*
        <HStack w="80%" justifyContent={"center"}>
            <VStack bg="brand.darkGrey" w="50%" maxW= "768px" borderRadius="20px">
                <Box> Height(feet) : {inputs.heightFeet} </Box>
                <Box> Height(Inches) : {inputs.heightInches} </Box>
                <Box> Height(CM) : {inputs.heightCM} </Box>
                <Box> Weight(LB) : {inputs.weightLB}</Box>
                <Box> Weight(KG) : {inputs.weightKG}</Box>
                <Box> Handling : {inputs.handling} </Box>
                <Box> Skill Level: {inputs.skillLevel} </Box>
                <Box> Reach(Inches) : {inputs.reachInches} </Box>
                <Box> Reach(MM) : {inputs.reachMM} </Box>
                <Box> Stack(MM) : {inputs.stackMM} </Box>
                <Box> Stack(Inches) : {inputs.stackInches} </Box>
                <Box> Bike Type: {inputs.bikeType} </Box>
            </VStack>
            <VStack bg="brand.darkGrey" w="50%" maxW= "768px" borderRadius="20px">
                <Box>{outputs.barWidth} </Box>
                <Box>{outputs.barRise} </Box>
                <Box>{outputs.stemLength} </Box>
                <Box>{outputs.spacers} </Box>
                <Box>{outputs.frontTirePSI} </Box>
                <Box>{outputs.rearTirePSI} </Box>
                <Box>{outputs.inserts} </Box>
            </VStack>
        </HStack>
*/