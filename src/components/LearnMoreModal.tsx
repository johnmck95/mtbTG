import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure} from '@chakra-ui/react'
import {learnMoreModal as modalData} from "../data/LearnMoreModal"

interface LeanMoreModalProps{
    id: number
}
export default function LearnMoreModal({id}: LeanMoreModalProps) {  
    const { isOpen, onOpen, onClose } = useDisclosure()

    const data = modalData[id]


    return (
        <>
            <Button onClick={onOpen} size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
        
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{data.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {data.description}
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

