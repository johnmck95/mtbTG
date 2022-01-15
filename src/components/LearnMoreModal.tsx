import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure} from '@chakra-ui/react'
import {learnMoreModal as modalData} from "../data/LearnMoreModal"

interface LeanMoreModalProps{
    title: string
}
export default function LearnMoreModal({title}: LeanMoreModalProps) {  
    const { isOpen, onOpen, onClose } = useDisclosure()

    let val = 0
    if(title === "Handlebar Rise")
        val = 1
    else if(title === "Stem Length")
        val = 2
    else if(title === "Stem Spacers")
        val = 3
    else if(title === "Front Tire Pressure")
        val = 4
    else if(title === "Rear Tire Pressure")
        val = 5
    else if(title === "Inserts")
        val = 6
    const data = modalData[val]


    return (
        <>
            <Button onClick={onOpen} size="xs" bg="brand.blue" color="brand.white" my={2}> Learn More </Button>
        
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{title}</ModalHeader>
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

