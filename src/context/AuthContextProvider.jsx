import { useDisclosure } from '@chakra-ui/react';
import React, { createContext,useState } from 'react'

export const Authcontext = createContext()
export default function AuthContextProvider({children}) {
  const [authState, setauthState] = useState({isLogned:false,Token:null})
console.log('authState',authState);

const { isOpen, onOpen, onClose } = useDisclosure()

const openModal = ()=>{
onOpen()
}
const closeModal = ()=>{
onClose()
}


  const login = (token)=>{
    setauthState({isLogned:true,Token:token})
  }

  const logout = ()=>{
setauthState({isLogned:false,Token:null})
  }
  return (
    <Authcontext.Provider value={{authState,login,logout,isOpen,openModal,closeModal}}>
    {  children}
    </Authcontext.Provider>
  )
}
