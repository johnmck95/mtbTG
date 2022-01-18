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
        barWidthMM: "780",
        barWidthInch: "30.7",
        barRiseMM: "25",
        barRiseInch: "1.0",
        stemLengthMM: "50",
        stemLengthInch: "2.0",
        spacersMM: "10",
        spacersInch: "0.4",
        frontTirePSI: "22",
        rearTirePSI: "25",
        inserts: "yes"

    }
    return outputs
}

export default basicAlgorithm
