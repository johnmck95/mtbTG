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
        let calc = 0.0625 * parseInt(weightLB)
        const frTireConst = 10
        const rrTireConst = 11
        const enduroConst = 1
        if( bikeType === 'enduro') 
            calc += enduroConst
        outputs.frontTirePSI = (calc + frTireConst).toFixed(0)
        outputs.rearTirePSI = (calc + rrTireConst).toFixed(0)
    }

    function noviceTirePressure(){
        let calc = 0.075 * parseInt(weightLB)
        const frTireConst = 9
        const rrTireConst = 10
        const enduroConst = 1    
        if (bikeType === 'enduro')
            calc += enduroConst 
        outputs.frontTirePSI = (calc + frTireConst).toFixed(0)
        outputs.rearTirePSI = (calc + rrTireConst).toFixed(0)
    }

    function intermediateTirePressure(){
        const enduroConst = 2
        if ( parseInt(weightLB) >= 200 ){  // Running Inserts
            let calc = 0.05 * parseInt(weightLB)
            const frTireConst = 12
            const rrTireConst = 14
            if (bikeType === 'enduro')
                calc += enduroConst
            outputs.frontTirePSI = (calc + frTireConst).toFixed(0)
            outputs.rearTirePSI = (calc + rrTireConst).toFixed(0)
        } else {  // No Inserts
            let frontCalc = 0.0833 * parseInt(weightLB) + 9.3328
            let rearCalc = 0.0917 * parseInt(weightLB) + 9.6661
            if (bikeType === 'enduro'){
                frontCalc += enduroConst
                rearCalc += enduroConst
            }
            outputs.frontTirePSI = frontCalc.toFixed(0)
            outputs.rearTirePSI = rearCalc.toFixed(0)
        }
    }

    function advancedTirePressure(){
        const enduroConst = 1
        if ( parseInt(weightLB) >= 155 ){  // Running Inserts
            let calc = 0.0588 * parseInt(weightLB)
            const frTireConst = 9.8824
            const rrTireConst = 11.882
            if (bikeType === 'enduro')
                calc += enduroConst
            outputs.frontTirePSI = (calc + frTireConst).toFixed(0)
            outputs.rearTirePSI = (calc + rrTireConst).toFixed(0)
        } else { // No Inserts
            let frontCalc = 0.08 * parseInt(weightLB) + 10.599
            let rearCalc = 0.0933 * parseInt(weightLB) + 10.532
            if (bikeType === 'enduro'){
                frontCalc += enduroConst
                rearCalc += enduroConst
            }
            outputs.frontTirePSI = frontCalc.toFixed(0)
            outputs.rearTirePSI = rearCalc.toFixed(0)
        }
    }
    function expertTirePressure(){
        if ( parseInt(weightLB) >= 140 ){ // Running Inserts
            const enduroConst = 1
            let frontCalc = 0.0429 * parseInt(weightLB) + 13.496
            let rearCalc = 0.0302 * parseInt(weightLB) + 18.64
            if (bikeType === 'enduro'){
                frontCalc += enduroConst
                rearCalc += enduroConst
            }
            outputs.frontTirePSI = frontCalc.toFixed(0)
            outputs.rearTirePSI = rearCalc.toFixed(0)
        } else { // No Inserts
            const enduroConstFr = 1
            const enduroConstRr = 2
            let frontCalc = 0.0833 * parseInt(weightLB) + 11.332
            let rearCalc = 0.1 * parseInt(weightLB) + 10.999
            if (bikeType === 'enduro'){
                frontCalc += enduroConstFr
                rearCalc += enduroConstRr
            }
            outputs.frontTirePSI = frontCalc.toFixed(0)
            outputs.rearTirePSI = rearCalc.toFixed(0)
        }
    }

    function professionalTirePressure(){
        expertTirePressure()
        outputs.frontTirePSI = (parseInt(outputs.frontTirePSI) + 2 ).toFixed(0)
        outputs.rearTirePSI = (parseInt(outputs.rearTirePSI) + 2 ).toFixed(0)
    }

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
    tirePressureCalc()
    
    return outputs
}

export default Algorithm
