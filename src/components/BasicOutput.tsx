import {Box, HStack, VStack} from "@chakra-ui/react"

interface BasicOutputProps{
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
    outputs: {
        effectiveRAD: string,
        effectiveReach: string,
        effectiveStack: string,
        barWidth: string,
        spacers: string,
    }
}

export default function BasicOutput({inputs, outputs}: BasicOutputProps) {
    return(
        <HStack w="80%" justifyContent={"center"}>

            <VStack bg="brand.darkGrey" w="50%" maxW= "768px" borderRadius="20px">
                <Box> Height(feet) : {inputs.heightFeet} </Box>
                <Box> Height(Inches) : {inputs.heightInches} </Box>
                <Box> Height(CM) : {inputs.heightCM} </Box>
                <Box> Weight Bias : {inputs.weightBias} </Box>
                <Box> Reach(Inches) : {inputs.reachInches} </Box>
                <Box> Reach(MM) : {inputs.reachMM} </Box>
                <Box> Stack(MM) : {inputs.stackMM} </Box>
                <Box> Stack(Inches) : {inputs.stackInches} </Box>
                <Box> Bike Type: {inputs.bikeType} </Box>
            </VStack>

            <VStack bg="brand.darkGrey" w="50%" maxW= "768px" borderRadius="20px">
                <Box>{outputs.effectiveReach} </Box>
                <Box>{outputs.effectiveStack} </Box>
                <Box>{outputs.effectiveRAD} </Box>
                <Box>{outputs.barWidth} </Box>
                <Box>{outputs.spacers} </Box>
            </VStack>
        </HStack>


    )
}
