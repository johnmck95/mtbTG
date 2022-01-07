import ChooseSetupGuide from "../components/ChooseSetupGuide"
import BasicOutput from "../components/BasicOutput"
import BasicForm from "../components/BasicForm"
import {Box} from "@chakra-ui/react"
import HomePhoto from "../images/hartland-enduro.jpg"
import {ChangeEvent, useState} from "react"

export default function Home() {

    let displayedComponent = "ChooseSetupGuide"
    const [reRender, setReRender] = useState(0)
    const [isBasicClicked, setIsBasicClicked] = useState(false)
    const [isAdvancedHovered, setIsAdvancedHovered] = useState(false)
    const [isFormComplete, setIsFormComplete] = useState(false)
    const [inputs, setInputs] = useState({
        heightFeet: "",
        heightInches: "",
        heightCM: "",
        weightBias: "",
        reachInches: "",
        reachMM: "",
        stackInches: "",
        stackMM: "",
        bikeType: ""
    })

    
    // ==========================================================================================================
    // ===================================== basicForm.tsx  State Functions =====================================


    /* Updates state from an <Input/> change in basicForm.tsx */
    function handleBasicChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        const {name, value} = event.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value,
        }))     
    }

    /* Updates state based on our 'CustomRadioComponent' */
    function handleBasicCustomRadio(name: string, value: string) {
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    /* Updates state conversion for metric/imperial riders */
    // ********** BUG: 152.4cm translates to 5foot 12 inches, this should be 5foot 0 ************** BUG
    interface handleBasicRiderConversionProps{
        heightCMCalc: number;
        heightFootCalc: number;
        heightInchesCalc: number;
    }
    function handleBasicRiderConversion({heightCMCalc, heightFootCalc, heightInchesCalc}: handleBasicRiderConversionProps) {
        setInputs(prevInputs => ({
            ...prevInputs,
            heightCM: heightCMCalc !== 0? heightCMCalc.toFixed(0) : inputs.heightCM,
            heightFeet: heightFootCalc !== 0? heightFootCalc.toFixed(0) : inputs.heightFeet,
            heightInches: heightInchesCalc !== 0? heightInchesCalc.toFixed(0) : inputs.heightInches
        }))
    }

    /* Updates state conversion for metric/imperial bikes */
    interface handleBasicBikeConversionProps{
        reachMMCalc: number;
        reachInchCalc: number;
        stackMMCalc: number;
        stackInchCalc: number;
    }
    function handleBasicBikeConversion({reachMMCalc, reachInchCalc, stackMMCalc, stackInchCalc}: handleBasicBikeConversionProps){
        setInputs( prevInputs => ({
            ...prevInputs,
            reachMM: reachMMCalc !== 0? reachMMCalc.toFixed(0) : inputs.reachMM,
            reachInches: reachInchCalc !== 0? reachInchCalc.toFixed(2) : inputs.reachInches,
            stackMM: stackMMCalc !== 0? stackMMCalc.toFixed(0) : inputs.stackMM,
            stackInches: stackInchCalc !== 0? stackInchCalc.toFixed(2) : inputs.stackInches
        }))
    }
    

    // ================================== End Of basicForm.tsx  State Functions =================================
    // ==========================================================================================================


    if(isFormComplete && isBasicClicked)
        displayedComponent= "BasicOutput"
    else if(isBasicClicked)
        displayedComponent="BasicForm"
    else
        displayedComponent="ChooseSetupGuide"


    return(   
        <Box 
            w="100%"  
            backgroundImage={HomePhoto} 
            backgroundRepeat="no-repeat" 
            backgroundPosition="60% 50%" 
            backgroundSize="145%" 
            height="100%">
                {displayedComponent === "ChooseSetupGuide" && 
                    <ChooseSetupGuide 
                        handleBasicClick={ () => setIsBasicClicked( prevIsBasicClicked => !prevIsBasicClicked ) } 
                        isAdvancedHovered={isAdvancedHovered} 
                        handleAdvancedHover={ () => setIsAdvancedHovered( prevIsAdvancedHovered => !prevIsAdvancedHovered ) }/>
                }
                { displayedComponent === "BasicForm" &&
                    <BasicForm
                        inputs={inputs}
                        handleChange={handleBasicChange}
                        handleCustomRadio={handleBasicCustomRadio}
                        handleRiderConversion={handleBasicRiderConversion}
                        handleBikeConversion={handleBasicBikeConversion}
                        handleFormCompletion = {() => setIsFormComplete( prevFormComplete => !prevFormComplete )}
                        handleReRender = {() => setReRender( () => reRender + 1 )}
                    />
                }
                {displayedComponent === "BasicOutput" &&
                    <BasicOutput 
                        inputs={inputs}
                        />
                }
        </Box>
    )
}
