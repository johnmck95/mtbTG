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

    function beginnerTirePressure(){
        let initialCalc = 0.0625 * parseInt(weightLB)                   // The linear curve based on rider weight
        const frTireConst = 10                                          // The vertical shift for front tire
        const rrTireConst = 11                                          // The vertical shift for rear tire
        const enduroConst = 1                                           // +1 psi for enduro bike rider

        if( bikeType === 'enduro') 
            initialCalc += enduroConst

        outputs.frontTirePSI = (initialCalc + frTireConst).toFixed(0);
        outputs.rearTirePSI = (initialCalc + rrTireConst).toFixed(0)
    }

    function noviceTirePressure(){}
    function intermediateTirePressure(){}
    function advancedTirePressure(){}
    function expertTirePressure(){}
    function professionalTirePressure(){}

    function tirePressureCalc() {
        if( skillLevel === "beginner") beginnerTirePressure()
        else if( skillLevel === "novice") noviceTirePressure()
        else if( skillLevel === "intermediate") intermediateTirePressure()
        else if( skillLevel === "advanced") advancedTirePressure()
        else if( skillLevel === "expert") expertTirePressure()
        else if( skillLevel === "professional") professionalTirePressure()
    }

    barWidthCalc()
    tireInsertCalc()
    tirePressureCalc() // Must call tireInsertCalc() first
    
    return outputs
}

export default Algorithm
