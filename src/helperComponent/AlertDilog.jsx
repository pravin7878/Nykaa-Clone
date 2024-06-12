import React, { useContext } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { cartContext } from '../context/CartContextProvider'
import { DeleteIcon } from '@chakra-ui/icons'

export function AlertDialogExample({itemId}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  const {deleteToCart} = useContext(cartContext)


const hendelDelete = ()=>{
    onClose()
    deleteToCart(itemId)
}

    return (
      <>
        <Button  onClick={onOpen} >
          <DeleteIcon color={'red'}/>
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Remove Item
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You want Remove This item.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button  colorScheme='red' onClick={hendelDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }