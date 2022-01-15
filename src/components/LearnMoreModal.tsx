import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure} from '@chakra-ui/react'
import {learnMoreModal} from "../data/LearnMoreModal"

interface LeanMoreModalProps{
    title: string
}
export default function LearnMoreModal({title}: LeanMoreModalProps) {  
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
        
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Learn About this setting!
                </ModalBody>
        
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

