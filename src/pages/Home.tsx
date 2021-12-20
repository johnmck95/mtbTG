import ChooseSetupGuide from "../components/ChooseSetupGuide"
import {VStack, Box} from "@chakra-ui/react"
import HomePhoto from "../images/hartland-enduro.jpg"

export default function Home() {
    return(   
        <Box w="100%"  backgroundImage={HomePhoto} backgroundRepeat="no-repeat" backgroundPosition="60% 50%" backgroundSize="145%" height="calc(100vh - 50px)">
            <VStack alignSelf="center" justify="center" h="100%" >
                <ChooseSetupGuide />
            </VStack>
        </Box>
    )
}
