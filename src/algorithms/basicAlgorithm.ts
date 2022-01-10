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
        barWidth: "Handlebar Width",
        barRise: "Handlebar Rise",
        stemLength: "Stem Length",
        spacers: "Stem Spacers",
        frontTirePSI: "Front Tire Pressure",
        rearTirePSI: "Rear Tire Pressure",
        inserts: "Inserts"

    }
    return outputs
}

export default basicAlgorithm
