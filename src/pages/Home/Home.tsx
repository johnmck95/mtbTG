import Output from "../../components/Output/Output";
import Form from "../../components/Form/Form";
import {Box} from "@chakra-ui/react";
import HomePhotoSm from "../../images/hartland-enduro-SM,414x620.jpg";
import HomePhotoMd from "../../images/hartland-enduro-MD,768x1150.jpg";
import HomePhotoLg from "../../images/hartland-enduro-LG,1080x1618.jpg";
import HomePhotoXl from "../../images/hartland-enduro-XL,1280x1917.jpg";
import {ChangeEvent, useState} from "react";
import Algorithm from "../../algorithms/Algorithm/Algorithm";
import {HandleRiderConversionProps, HandleBikeConversionProps} from "../../interfaces/interfaces";

export default function Home(): JSX.Element {
    const [imperialRider, setImperialRider] = useState(true);
    const [imperialBike, setImperialBike] = useState(false);
    const [reRender, setReRender] = useState(0);
    const [formCompleted, setFormComplete] = useState(false);
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
    });

    /* Updates state from an <input> change from Form.tsx */
    function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void {
        const {name, value} = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value,
        }));
    };

    /* Updates state based on the 'CustomRadioComponent' */
    function handleCustomComponent(name: string, value: string): void {
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    /* Updates state for metric/imperial rider conversions */
    function handleRiderConversion({
        heightCMCalc, 
        heightFootCalc, 
        heightInchesCalc, 
        weightKGCalc, 
        weightLBCalc
    }: HandleRiderConversionProps): void {
        setInputs(prevInputs => ({
            ...prevInputs,
            heightCM: heightCMCalc !== -1? heightCMCalc.toFixed(4) : inputs.heightCM,
            heightFeet: heightFootCalc !== -1? heightFootCalc.toFixed(0) : inputs.heightFeet,
            heightInches: heightInchesCalc !== -1? heightInchesCalc.toFixed(4) : inputs.heightInches,
            weightKG: weightKGCalc !== -1? weightKGCalc.toFixed(4) : inputs.weightKG,
            weightLB: weightLBCalc !== -1? weightLBCalc.toFixed(4) : inputs.weightLB
        }));
    };

    /* Updates state for metric/imperial bike conversions */
    function handleBikeConversion({
        reachMMCalc, 
        reachInchCalc, 
        stackMMCalc, 
        stackInchCalc
    }: HandleBikeConversionProps): void {
        setInputs( prevInputs => ({
            ...prevInputs,
            reachMM: reachMMCalc !== -1? reachMMCalc.toFixed(4) : inputs.reachMM,
            reachInches: reachInchCalc !== -1? reachInchCalc.toFixed(4) : inputs.reachInches,
            stackMM: stackMMCalc !== -1? stackMMCalc.toFixed(4) : inputs.stackMM,
            stackInches: stackInchCalc !== -1? stackInchCalc.toFixed(4) : inputs.stackInches
        }));
    };

    const outputs = Algorithm(inputs);  

    return(   
        <Box 
            w="100%"  
            backgroundImage={[HomePhotoSm, HomePhotoMd, HomePhotoLg, HomePhotoXl]} 
            backgroundRepeat="no-repeat" 
            backgroundPosition="60% 50%" 
            backgroundSize="145%" 
            height="100%">
                { !formCompleted &&
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
                        handleFormCompletion = {() => setFormComplete( prevFormComplete => !prevFormComplete )}
                        handleReRender = {() => setReRender( () => reRender + 1 )}
                    />
                }
                { formCompleted &&
                    <Output 
                        inputs={inputs}
                        outputs={outputs}
                        imperialRider={imperialRider}
                        imperialBike={imperialBike}
                        handleShowForm={() => setFormComplete( (prevFormComplete) => !prevFormComplete)}
                    />
                }
        </Box>
    );
};
