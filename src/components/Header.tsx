import {Flex, Box, ButtonGroup, Link, Text, HStack, Container, Image, Icon} from "@chakra-ui/react"
import {FaBars, FaRegWindowClose} from "react-icons/fa"
import MtbTG from "../images/mtbTG-logo.png"
import React from "react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
  } from '@chakra-ui/react'

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
        console.log("clicked")
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
                        <Menu>
                        {({ isOpen }) => (
                            <>
                            <MenuButton as={isOpen? FaRegWindowClose : FaBars}/>
                            <MenuList position="fixed" right="0px" top="50px" bg="brand.black" bgColor="brand.black">
                            <Link href="/about">
                                <MenuItem href="/about">
                                        
                                            About
                                      
                                    </MenuItem>
                                    </Link>
                                    <Link href="/help">
                                    <MenuItem>
                                       
                                            Help
                                        
                                    </MenuItem>
                                    </Link>
                                </MenuList>
                            </>
                        )}
                        </Menu>
                    }
                </Flex>
            </Container>
        </Box>
    )
}
