interface BasicAlgorithmProps{
        heightFeet: string,
        heightInches: string,
        heightCM: string,
        weightBias: string,
        reachInches: string,
        reachMM: string,
        stackInches: string,
        stackMM: string,
        bikeType: string
}

function basicAlgorithm({heightFeet, heightInches, heightCM, weightBias, reachInches, reachMM, stackInches, stackMM, bikeType}: BasicAlgorithmProps) {
    const outputs = {
        effectiveRAD: "Effective Rad",
        effectiveReach: "Effective Reach",
        effectiveStack: "Effective Stack",
        barWidth: "Handlear Width",
        stemLength: "Stem Length",
        spacers: "Stem Spacers",
    }
    return outputs
}

export default basicAlgorithm
