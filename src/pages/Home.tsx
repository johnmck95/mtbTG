import Header from "../components/Header"
import ChooseSetupGuide from "../components/ChooseSetupGuide"
import {VStack} from "@chakra-ui/react"

export default function Help() {
    return(
        <>
            <Header pageNumber={1}/>
            <VStack alignItems="center" h="100vh" m="0px" p="0px">
                <ChooseSetupGuide />
            </VStack>
        </>
    )
}