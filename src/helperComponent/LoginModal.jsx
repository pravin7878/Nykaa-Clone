import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Box,
    VStack,
    PinInput,
    PinInputField,
    HStack,
    Text,
} from "@chakra-ui/react"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "../firebase/Setup" 


import React, { useState } from "react"

// from phone input react
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [phone, setphone] = useState("")
    const [user, setuser] = useState("")
    const [otp, setotp] = useState("")

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    console.log(otp);

    const sentOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setuser(confirmation)
        } catch (error) {
            console.log(error);
        }

    }


    const verifyOtp =async () => {
        try {
            
        const data = await user.confirm(otp)
        console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Button
                fontSize={'20px'} colorScheme='pink'
                display={{ base: 'none', sm: 'none', md: 'block' }}
                onClick={onOpen}
            >Sing In</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Please Login Now</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <VStack w={'100%'} align={'left'}>
                            <Text>Enter Mobile No.</Text>
                            <HStack>
                                <PhoneInput
                                    country={'in'}
                                    value={phone}
                                    onChange={(phone) => setphone("+" + phone)}
                                />
                                <Button colorScheme="pink"
                                    onClick={sentOtp}
                                >SEND OTP</Button>
                            </HStack>

                            <Text>Enter Mobile Otp</Text>
                            <div id="recaptcha"></div>
                            <HStack>
                                <PinInput otp onChange={(e) => setotp(e.target.value)}>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                                <Button onClick={verifyOtp}>VERIFY OTP</Button>
                            </HStack>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} >
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}