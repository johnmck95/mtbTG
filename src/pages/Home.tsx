import ChooseSetupGuide from "../components/ChooseSetupGuide"
import BasicOutput from "../components/BasicOutput"
import BasicForm from "../components/BasicForm"
import {Box} from "@chakra-ui/react"
import HomePhoto from "../images/hartland-enduro.jpg"
import {ChangeEvent, useState} from "react"

export default function Home() {
    const [isBasicClicked, setIsBasicClicked] = useState(true) //intuitivelty this should be false, but the initial render sets it false in handleBasic
    const [isAdvancedHovered, setIsAdvancedHovered] = useState(false)
    const [displayedComponent, setDisplayedComponent] = useState("ChooseSetupGuide")
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

    // ===================================== FROM basicForm.tsx =====================================
    // updates input state basic on a change in input
    function handleBasicChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        const {name, value} = event.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value,
        }))     
    }
    //updates state based on our 'CustomRadioComponent'
    function handleBasicCustomRadio(name: string, value: string) {
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    // handles the state conversion for metric/imperial riders
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

    // handles the state conversion for metric/imperial bikes
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
            reachInches: reachInchCalc !== 0? reachInchCalc.toFixed(1) : inputs.reachInches,
            stackMM: stackMMCalc !== 0? stackMMCalc.toFixed(0) : inputs.stackMM,
            stackInches: stackInchCalc !== 0? stackInchCalc.toFixed(1) : inputs.stackInches
        }))
    }
    
    // ===================================== FROM basicForm.tsx =====================================

    // Is the 'Basic' button clciked on ChooseSetupGuide
    function handleBasic() {
        setIsBasicClicked( prevIsBasicClicked => !prevIsBasicClicked )
        renderComponent()
    }

    // Is the 'Advanced' button clciked on ChooseSetupGuide
    function handleAdvanced() {
        setIsAdvancedHovered( prevIsAdvancedHovered => !prevIsAdvancedHovered )
        //renderComponent() // This needs to be included when the advanced form is  built
    }

    // Selects whether to display ChooseSetupGuide, BasicForm or BasicOutput
    function renderComponent() {
        if( isBasicClicked )
            setDisplayedComponent("BasicForm")
        else
            setDisplayedComponent("ChooseSetupGuide")
    }

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
                        handleBasicClick={handleBasic} 
                        isAdvancedHovered={isAdvancedHovered} 
                        handleAdvancedHover={handleAdvanced}/>
                }
                { displayedComponent === "BasicForm" &&
                    <BasicForm
                        inputs={inputs}
                        handleChange={handleBasicChange}
                        handleCustomRadio={handleBasicCustomRadio}
                        handleRiderConversion={handleBasicRiderConversion}
                        handleBikeConversion={handleBasicBikeConversion}
                    />
                }
        </Box>
    )
}
