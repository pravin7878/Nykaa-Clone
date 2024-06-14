import { Container, List, ListItem, Text, UnorderedList ,Flex, VStack} from '@chakra-ui/react'
import React from 'react'

export default function ErrorIndicator() {
  return (
    <Container maxW={'container.lg'} >
      <Flex justify={'center'} align={'center'} h={'70vh'} >
        <VStack align={'left'}>
        <Text>No internet</Text>
        <Text>Try:</Text>
        <UnorderedList>
          <ListItem>Checking the network cables, modem, and router</ListItem>
          <ListItem>Reconnecting to Wi-Fi</ListItem>
          <ListItem>Running Windows Network Diagnostics</ListItem>
          <ListItem>ERR_INTERNET_DISCONNECTED</ListItem>
        </UnorderedList>
        <Text color={'blue'}>Please Represh the page</Text>
        </VStack>
      </Flex>
    </Container>
  )
}
