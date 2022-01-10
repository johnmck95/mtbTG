import {Box, HStack, VStack} from "@chakra-ui/react"

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
    return(
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


    )
}
