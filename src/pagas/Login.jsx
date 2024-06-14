import React, { useContext, useState } from "react"
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
  useToast,
} from "@chakra-ui/react"

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "../firebase/Setup"


// from phone input react
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Authcontext } from "../context/AuthContextProvider"

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [phone, setphone] = useState("")
  const [user, setuser] = useState("")
  const [otp, setotp] = useState("")
  const [isErr, setisErr] = useState(false)

  const toast = useToast()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const { login, logout, authState: { isLogned } } = useContext(Authcontext)


  const sentOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
      setuser(confirmation)
      setphone(null)
      if (confirmation.status === 200) {
        toast({
          title: "opt sent Success",
          status: "info",
          isClosable: true,
          position: "top",
          duration: "2000"
        })
      }
    } catch (error) {
      console.log(error);
      setisErr(true);
      setphone(null)
      // toast({
      //   title:"Enter your Phone No.",
      //   status:"errer",
      //   isClosable:true,
      //   position:"top",
      //   duration:"2000"
      // })
    }
  }


  const verifyOtp = async () => {
    console.log('otp', otp);
    try {

      const data = await user.confirm(otp)
      console.log(data);
      const token = data?._tokenResponse?.localId
      // if (data.status === 200) {
        login(token);
        onClose()
        toast({
          title: "Login Success",
          status: "success",
          isClosable: true,
          position: "top",
          duration: "2000"
        })
      // }
      setotp(null)
    } catch (error) {
      console.log(error);
      toast({
        title: "Invalid Token",
        status: "errer",
        isClosable: true,
        position: "top",
        duration: "2000"
      })
    }
  }

  if (isErr) {
   
    toast({
      title: "Please Login After some time",
      status: "error",
      isClosable: true,
      position: "top",
      duration: "2000"
    })
  }

  return (
    <>
      {isLogned ? <Button onClick={logout}>Logout</Button>
        :
        <Button
          fontSize={'20px'} colorScheme='pink'
          display={{ base: 'none', sm: 'none', md: 'block' }}
          onClick={onOpen}
        >Sing In</Button>
      }
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
                <PinInput value={otp} onChange={(otp) => setotp(otp)}>
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
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
