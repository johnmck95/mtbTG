interface AlgorithmProps{
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
}

function Algorithm({heightFeet, heightInches, heightCM, weightLB, weightKG, handling, skillLevel, reachInches, reachMM, stackInches, stackMM, bikeType}: AlgorithmProps) {
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
        inserts: ""

    }
    function barWidthCalc(){
        const riderHeight = parseInt(heightCM)
        outputs.barWidthMM = (riderHeight * 0.7692 + 625.38).toFixed(0)
        outputs.barWidthInch = ((riderHeight * 0.7692 + 625.38) / 25.4).toFixed(1)
    }
    
    /* You will likely want to consider bike type in the future */
    function tireInsertCalc(){
        if(skillLevel === 'beginner'){
            outputs.inserts = 'No'
        }
        else if (skillLevel === 'novice'){
            outputs.inserts = 'No'
        }
        else if (skillLevel === 'intermediate'){
            if (parseInt(weightLB) >= 200)
                outputs.inserts = 'Yes'
            else
                outputs.inserts = 'No'
        }
        else if (skillLevel === 'advanced'){
            if (parseInt(weightLB) >= 155)
                outputs.inserts = 'Yes'
            else
                outputs.inserts = 'No'
        }
        else if (skillLevel === 'expert'){
            if (parseInt(weightLB) >= 140)
                outputs.inserts = 'Yes'
            else
                outputs.inserts = 'No'
        }
        else if (skillLevel === 'professional'){
            if (parseInt(weightLB) >= 140)
                outputs.inserts = 'Yes'
            else
                outputs.inserts = 'No'
        }
    }

    tireInsertCalc()
    barWidthCalc()
    
    return outputs
}

export default Algorithm
