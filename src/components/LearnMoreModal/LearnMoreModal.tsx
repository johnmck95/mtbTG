import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Link, Image} from '@chakra-ui/react'
import {learnMoreModal as modalData} from "../../data/LearnMoreModal"
import placeholderImageSM from "../../images/placeholder-SM,300x150.png"

interface LeanMoreModalProps{
    id: number
}
export default function LearnMoreModal({id}: LeanMoreModalProps) {  
    const { isOpen, onOpen, onClose } = useDisclosure()

    const data = modalData[id]


    return (
        <>
            <Button 
                onClick={onOpen} 
                size="xs" 
                bg="brand.darkGrey" 
                filter="brightness(120%)"
                color="brand.white" 
                my={2}
                _hover={{bg: "brand.blue"}}
                > learn more 
            </Button>
        
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent bg='brand.darkGrey'>
                    <ModalHeader textDecoration="underline" color="brand.white">{data.title}</ModalHeader>
                    <ModalCloseButton color="brand.white"/>
                    <ModalBody color="brand.white">
                        {data.description}
                        <Image mt={8} src={placeholderImageSM} maxW='300px' w='100%' mx='auto'/>
                    </ModalBody>
                    <ModalFooter>
                        <Link href='help' color="brand.white"> Learn More </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

