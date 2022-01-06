import {Box, VStack} from "@chakra-ui/react"

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
}
export default function BasicOutput({inputs}: BasicOutputProps) {
    return(
        <VStack>
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
    )
}