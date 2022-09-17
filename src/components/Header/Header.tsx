import {
  Flex,
  Box,
  ButtonGroup,
  Link,
  Text,
  HStack,
  Container,
  Image,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import {
  FaBars,
  FaRegWindowClose,
  FaUser,
  FaQuestionCircle,
} from "react-icons/fa";
import MtbTG from "../../images/mtbTG-logo.png";
import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  // useViewport from: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { width };
  };

  const { width } = useViewport();
  const breakpoint = 520;

  return (
    <Box
      as="header"
      w="100%"
      position="fixed"
      top="0"
      bg="brand.headerGradient"
      color="brand.white"
      zIndex="200"
    >
      <Container maxW="50rem" p="0px">
        <Flex justify="space-between" alignItems="center" px="8px" h="50px">
          <Link href="/">
            <Image src={MtbTG} h={["30px", "40px"]} />
          </Link>
          {width >= breakpoint && (
            <HStack
              fontSize="sm"
              spacing={["0em", "3rem", "4rem", "5rem"]}
              alignItems="center"
              mr="10px"
            >
              <ButtonGroup spacing="1rem">
                <Link href="/about">ABOUT</Link>
                <Text> | </Text>
                <Link href="/help">HELP</Link>
              </ButtonGroup>
            </HStack>
          )}
          {width < breakpoint && (
            <Menu autoSelect={false}>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={IconButton}
                    icon={
                      isOpen ? (
                        <Icon as={FaRegWindowClose} />
                      ) : (
                        <Icon as={FaBars} />
                      )
                    }
                    ml="5px"
                    bg="brand.lightBlack"
                    _expanded={{ bg: "brand.lightBlack" }}
                  />
                  <MenuList
                    minWidth="8rem"
                    position="fixed"
                    right="-45px"
                    top="0px"
                    bg="brand.flatBlack"
                    border="1px solid black"
                    boxShadow={"-4px 4px 15px 4px #222222 "}
                  >
                    <Link href="/about">
                      <MenuItem
                        icon={<Icon as={FaUser} />}
                        bg="brand.flatBlack"
                        _hover={{ bg: "brand.darkGrey" }}
                      >
                        About
                      </MenuItem>
                    </Link>
                    <Link href="/help" bg="brand.darkGrey">
                      <MenuItem
                        icon={<Icon as={FaQuestionCircle} />}
                        bg="brand.flatBlack"
                        _hover={{ bg: "brand.darkGrey" }}
                      >
                        Help
                      </MenuItem>
                    </Link>
                  </MenuList>
                </>
              )}
            </Menu>
          )}
        </Flex>
      </Container>
    </Box>
  );
}
