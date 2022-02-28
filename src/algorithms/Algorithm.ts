interface AlgorithmProps{
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

function Algorithm({heightFeet, heightInches, heightCM, handling, reachInches, reachMM, stackInches, stackMM, bikeType}: AlgorithmProps) {
    const outputs = {
        barWidthMM: "",
        barWidthInch: "",
        barRiseMM: "",
        barRiseInch: "",
        stemLengthMM: "",
        stemLengthInch: "",
        spacersMM: "",
        spacersInch: "",
        frontTirePSI: "",
        rearTirePSI: "",
        inserts: "" // yes/no

    }
    function barWidthCalc(){
        const riderHeight = parseInt(heightCM)
        outputs.barWidthMM = (riderHeight * 0.7692 + 625.38).toFixed(0)
        outputs.barWidthInch = ((riderHeight * 0.7692 + 625.38) / 25.4).toFixed(1)
    }
    
    barWidthCalc()
    return outputs
}

export default Algorithm
