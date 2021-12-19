import Header from "../components/Header"
import ChooseSetupGuide from "../components/ChooseSetupGuide"
import {VStack} from "@chakra-ui/react"

export default function Home() {
    return(
        <main className="home--background">
            <Header pageNumber={1}/>
            <VStack alignSelf="center" justify={"center"} h="calc(100% - 50px)">
                <ChooseSetupGuide />
            </VStack>
        </main>
    )
}
