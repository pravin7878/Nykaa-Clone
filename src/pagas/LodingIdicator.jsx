import React from 'react'
import { Container, Flex, HStack, Skeleton, SkeletonCircle, SkeletonText, Spinner, Stack } from '@chakra-ui/react'


export default function LodingIdicator() {
    return (
        <Flex justify={'space-around'} w={"90%"} m={'auto'}>
            <Skeleton height='300px' borderRadius={'10px'} w={'20%'}/>
            <Skeleton height='300px' borderRadius={'10px'} w={'20%'}/>
            <Skeleton height='300px' borderRadius={'10px'} w={'20%'}/>
            <Skeleton height='300px' borderRadius={'10px'} w={'20%'}/>
        </Flex>
    )
}
export function LodingIdicator2() {
    return (
        <Container maxW={'container.lg'} >
            <Flex justify={'center'} align={'center'} h={'70vh'}>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      </Flex>
      </Container>
    )
}

