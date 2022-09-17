import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Link,
  Image,
} from "@chakra-ui/react";
import { learnMoreModal as modalData } from "../../data/LearnMoreModal";
import placeholderImage from "../../images/placeholder-SM,300x150.png";
import { LeanMoreModalProps } from "../../interfaces/interfaces";

export default function LearnMoreModal({
  id,
}: LeanMoreModalProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = modalData[id];

  return (
    <>
      <Button
        onClick={onOpen}
        size="xs"
        bg="brand.darkGrey"
        filter="brightness(120%)"
        color="brand.white"
        my={2}
        _hover={{
          bg: "brand.blue",
        }}
      >
        {" "}
        learn more
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside">
        <ModalOverlay />
        <ModalContent bg="brand.darkGrey">
          <ModalHeader textDecoration="underline" color="brand.white">
            {data.title}
          </ModalHeader>
          <ModalCloseButton color="brand.white" />
          <ModalBody color="brand.white">
            {data.description}
            <Image
              mt={8}
              src={placeholderImage}
              maxW="300px"
              w="100%"
              mx="auto"
            />
          </ModalBody>
          <ModalFooter>
            <Link href="help" color="brand.white">
              {" "}
              Learn More{" "}
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
