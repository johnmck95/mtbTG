import ChooseSetupGuide from "../components/ChooseSetupGuide"
import BasicForm from "../components/BasicForm"
import {VStack, Box} from "@chakra-ui/react"
import HomePhoto from "../images/hartland-enduro.jpg"
import React, {useState} from "react"

export default function Home() {
    const [isBasicClicked, setIsBasicClicked] = useState(false)
    const [isAdvancedHovered, setIsAdvancedHovered] = useState(false)

    function handleBasic() {
        setIsBasicClicked( prevIsBasicClicked => !prevIsBasicClicked )
    }

    function handleAdvanced() {
        setIsAdvancedHovered( prevIsAdvancedHovered => !prevIsAdvancedHovered )
    }

    return(   
        <Box w="100%"  backgroundImage={HomePhoto} backgroundRepeat="no-repeat" backgroundPosition="60% 50%" backgroundSize="145%" height="calc(100vh - 50px)">
            <VStack alignSelf="center" justify="center" h="100%" >
                <ChooseSetupGuide isBasicClicked={isBasicClicked} handleBasicClick={handleBasic} isAdvancedHovered={isAdvancedHovered} handleAdvancedHover={handleAdvanced}/>
                <BasicForm/>
            </VStack>
        </Box>
    )
}
