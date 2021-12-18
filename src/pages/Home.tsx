import Header from "../components/Header"
import ChooseSetupGuide from "../components/ChooseSetupGuide"
import {VStack, Box} from "@chakra-ui/react"

export default function Home() {
    return(
        <>
            <Header pageNumber={1}/>
            <VStack alignSelf="center" justify={"center"} h="calc(100% - 50px)">
                <ChooseSetupGuide />
            </VStack>

        </>
    )
}
