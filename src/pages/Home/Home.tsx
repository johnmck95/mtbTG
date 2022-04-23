import Output from "../../components/Output/Output"
import Form from "../../components/Form/Form"
import { Box } from "@chakra-ui/react"
import HomePhotoSm from "../../images/hartland-enduro-SM,414x620.jpg"
import HomePhotoMd from "../../images/hartland-enduro-MD,768x1150.jpg"
import HomePhotoLg from "../../images/hartland-enduro-LG,1080x1618.jpg"
import HomePhotoXl from "../../images/hartland-enduro-XL,1280x1917.jpg"
import {ChangeEvent, useState} from "react"
import Algorithm from "../../algorithms/Algorithm/Algorithm"

export default function Home() {
    let displayedComponent = "Form"
    const [imperialRider, setImperialRider] = useState(true)
    const [imperialBike, setImperialBike] = useState(false)
    const [reRender, setReRender] = useState(0)
    const [isFormComplete, setIsFormComplete] = useState(false)
    const [inputs, setInputs] = useState({
        heightFeet: "",
        heightInches: "",
        heightCM: "",
        weightLB: "",
        weightKG: "",
        handling: "",
        skillLevel: "",
        reachInches: "",
        reachMM: "",
        stackInches: "",
        stackMM: "",
        bikeType: ""
    })

    /* Updates state from an <Input/> change in Form.tsx */
    function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        const {name, value} = event.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value,
        }))     
    }

    /* Updates state based on our 'CustomRadioComponent' */
    function handleCustomComponent(name: string, value: string) {
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    /* Updates state conversion for metric/imperial riders */
    interface handleRiderConversionProps{
        heightCMCalc: number;
        heightFootCalc: number;
        heightInchesCalc: number;
        weightKGCalc: number;
        weightLBCalc: number;
    }
    function handleRiderConversion({heightCMCalc, heightFootCalc, heightInchesCalc, weightKGCalc, weightLBCalc}: handleRiderConversionProps) {
        setInputs(prevInputs => ({
            ...prevInputs,
            heightCM: heightCMCalc !== 0? heightCMCalc.toFixed(0) : inputs.heightCM,
            heightFeet: heightFootCalc !== 0? heightFootCalc.toFixed(0) : inputs.heightFeet,
            heightInches: heightInchesCalc !== 0? heightInchesCalc.toFixed(0) : inputs.heightInches,
            weightKG: weightKGCalc !== 0? weightKGCalc.toFixed(0) : inputs.weightKG,
            weightLB: weightLBCalc !== 0? weightLBCalc.toFixed(0) : inputs.weightLB
        }))
    }

    /* Updates state conversion for metric/imperial bikes */
    interface handleBikeConversionProps{
        reachMMCalc: number;
        reachInchCalc: number;
        stackMMCalc: number;
        stackInchCalc: number;
    }
    function handleBikeConversion({reachMMCalc, reachInchCalc, stackMMCalc, stackInchCalc}: handleBikeConversionProps){
        setInputs( prevInputs => ({
            ...prevInputs,
            reachMM: reachMMCalc !== 0? reachMMCalc.toFixed(0) : inputs.reachMM,
            reachInches: reachInchCalc !== 0? reachInchCalc.toFixed(2) : inputs.reachInches,
            stackMM: stackMMCalc !== 0? stackMMCalc.toFixed(0) : inputs.stackMM,
            stackInches: stackInchCalc !== 0? stackInchCalc.toFixed(2) : inputs.stackInches
        }))
    }


    if(isFormComplete)
        displayedComponent = "Output"
    else
        displayedComponent = "Form"
    const outputs = Algorithm(inputs)

    return(   
        <Box 
            w="100%"  
            backgroundImage={[HomePhotoSm, HomePhotoMd, HomePhotoLg, HomePhotoXl]} 
            backgroundRepeat="no-repeat" 
            backgroundPosition="60% 50%" 
            backgroundSize="145%" 
            height="100%">
                { displayedComponent === "Form" &&
                    <Form
                        inputs={inputs}
                        imperialRider={imperialRider}
                        imperialBike={imperialBike}
                        handleImperialRider={() => setImperialRider( prevImperialRider => !prevImperialRider )}
                        handleImperialBike={() => setImperialBike( prevImperialBike => !prevImperialBike )}
                        handleChange={handleChange}
                        handleCustomComponent={handleCustomComponent}
                        handleRiderConversion={handleRiderConversion}
                        handleBikeConversion={handleBikeConversion}
                        handleFormCompletion = {() => setIsFormComplete( prevFormComplete => !prevFormComplete )}
                        handleReRender = {() => setReRender( () => reRender + 1 )}
                    />
                }
                {displayedComponent === "Output" &&
                <>
                    <Output 
                        inputs={inputs}
                        outputs={outputs}
                        imperialRider={imperialRider}
                        imperialBike={imperialBike}
                        />
                </>  
                }
        </Box>
    )
}
