import { Box, Button, Container, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { cartContext } from '../context/CartContextProvider'
import { Flex } from 'antd'
import { BiLeftArrow } from 'react-icons/bi'
import { CheckCircleIcon, CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'

export default function OrderSuccessPage() {
  const navigate = useNavigate()
const location = useLocation()
const {state : {item,price}} = location

  return (
   <Container maxW={'container.lg'} my={20}>
<Flex justify='center'>
  <Box border={'blue solid 1px'} boxShadow={'dark-lg'} borderRadius={10} py={5} px={10}>
  <Heading fontSize={'lg'}>Your order is Success <CheckCircleIcon color={'green'}/></Heading>
  <Text fontWeight={'bold'} my={1}>order Detail <InfoOutlineIcon/></Text>
  <OrderedList>
  <ListItem> Totle item : {item}</ListItem>
  <ListItem>Totle Price : ${price}</ListItem>
</OrderedList>
<Button onClick={()=>navigate('/')} mt={5} colorScheme='pink' variant={"link"}>Go To Home</Button>
</Box>
</Flex>
   </Container>
  )
}
