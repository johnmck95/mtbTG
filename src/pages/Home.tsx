import ChooseSetupGuide from "../components/ChooseSetupGuide"
import BasicForm from "../components/BasicForm"
import {Box} from "@chakra-ui/react"
import HomePhoto from "../images/hartland-enduro.jpg"
import {useState} from "react"

export default function Home() {
    const [isBasicClicked, setIsBasicClicked] = useState(true) //intuitivelty this should be false, but the initial render sets it false in handleBasic
    const [isAdvancedHovered, setIsAdvancedHovered] = useState(false)
    const [displayedComponent, setDisplayedComponent] = useState("ChooseSetupGuide")

    function handleBasic() {
        setIsBasicClicked( prevIsBasicClicked => !prevIsBasicClicked )
        renderComponent()
    }

    function handleAdvanced() {
        setIsAdvancedHovered( prevIsAdvancedHovered => !prevIsAdvancedHovered )
        //renderComponent() // This needs to be included when the advanced form is  built
    }

    function renderComponent() {
        if( isBasicClicked )
            setDisplayedComponent("BasicForm")
        else
            setDisplayedComponent("ChooseSetupGuide")
    }

    return(   
        <Box 
            className="Home-Box"
            w="100%"  
            backgroundImage={HomePhoto} 
            backgroundRepeat="no-repeat" 
            backgroundPosition="60% 50%" 
            backgroundSize="145%" 
            height="100%"
            >
                {displayedComponent === "ChooseSetupGuide" && 
                    <ChooseSetupGuide 
                        handleBasicClick={handleBasic} 
                        isAdvancedHovered={isAdvancedHovered} 
                        handleAdvancedHover={handleAdvanced}/>
                }
                { displayedComponent === "BasicForm" &&
                    <BasicForm/>
                }
        </Box>
    )
}
