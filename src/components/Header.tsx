import {Flex, Box, ButtonGroup, Link, Text, HStack, Container, Image, Icon} from "@chakra-ui/react"
import {FaBars} from "react-icons/fa"
import MtbTG from "../images/mtbTG-logo.png"
import React from "react"

export default function Header() {

    // useViewport from: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);
        React.useEffect(() => {
          const handleWindowResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleWindowResize);
          return () => window.removeEventListener("resize", handleWindowResize);
        }, []);
        return { width };
      }

      const { width } = useViewport()
      const breakpoint = 520;



      const [isClicked, setIsClicked] = React.useState(true)

      function handleClick() {
        setIsClicked( () => !isClicked)
      }

    return(
        <Box as="header" w="100%"  position="fixed" top="0" bg="brand.black" color="brand.white" zIndex="200">
            <Container bg="black" maxW="50rem" p="0px">
                <Flex justify="space-between" alignItems="center" px="8px" h='50px'>
                    <Link href="/">
                        <Image src={MtbTG} h={["30px", "40px"]} />
                    </Link>
                    { width >= breakpoint &&
                        <HStack fontSize='sm'  spacing={['0em','3rem', '4rem', '5rem']} alignItems="center" mr="10px">
                            <ButtonGroup spacing="1rem">
                                <Link href="/about">ABOUT</Link>
                                <Text> | </Text>
                                <Link href="/help">HELP</Link>              
                            </ButtonGroup>
                        </HStack>
                    }
                    { width < breakpoint &&
                        <>
                            {isClicked? 
                                <Icon as={FaBars} w={6} h={6} mr="10px" onClick={handleClick}/> 
                                : <div onClick={handleClick}> placeholder </div>
                            }
                        </>   
                    }
                </Flex>
            </Container>
        </Box>
    )
}

{/* <Icon as={FaBars} /> */}