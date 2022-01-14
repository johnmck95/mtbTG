interface BasicAlgorithmProps{
        heightFeet: string,
        heightInches: string,
        heightCM: string,
        handling: string,
        reachInches: string,
        reachMM: string,
        stackInches: string,
        stackMM: string,
        bikeType: string
}

function basicAlgorithm({heightFeet, heightInches, heightCM, handling, reachInches, reachMM, stackInches, stackMM, bikeType}: BasicAlgorithmProps) {
    const outputs = {
        barWidth: "780",
        barRise: "25",
        stemLength: "50",
        spacers: "10",
        frontTirePSI: "22",
        rearTirePSI: "25",
        inserts: "yes"

    }
    return outputs
}

export default basicAlgorithm
