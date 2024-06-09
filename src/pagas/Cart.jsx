import React, { useContext } from 'react'
import { Button, Container, HStack, Heading, Image, Stack, Text, Toast, VStack, useToast, Flex, IconButton, Input } from "@chakra-ui/react";
import { cartContext } from '../context/CartContextProvider';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import {AddIcon,MinusIcon } from "@chakra-ui/icons"
import { useState } from 'react';

export function Cart() {
  const { cartData ,deleteToCart} = useContext(cartContext)
  console.log(cartData);
const [quantity, setquantity] = useState(1)

  return (
    <Container maxW={'container.lg'} my={5}>
      <Flex w={'100%'} justify='space-between'
        direction={{ base: "column-reverse", md: 'row' }}
        align={'top'}
      >
        <VStack w={{ sm: '100%', md: '70%' }} my={5}>
          {cartData?.map((item) => {
            const { id, title, description, images: [img1], price, rating, discountPercentage, category, availabilityStatus, returnPolicy, shippingInformation, stock, brand } = item

            return <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              w={{ sm: '100%' }}
              key={item?.id}
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={img1}
                alt={title}
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>{title}</Heading>

                  <Text py='2'>
                    {category}
                  </Text>
                  <Text py='2'>
                    ${price}
                  </Text>
                  <Text py='2'>
                    Totel stock available: {stock}
                  </Text>

                  <HStack>
                    <IconButton
                      variant='outline'
                      colorScheme='teal'
                      icon={<AddIcon />}
                      onClick={()=>setquantity(prev=>prev+1)}
                    />
                    <Input 
                     variant={'outline'} 
                     colorScheme='black' 
                     w={'20%'}
                     value={quantity}
                    textAlign={'center'}
                    fontSize={'20px'}
                     />
                     
                    <IconButton
                      variant='outline'
                      colorScheme='teal'
                      aria-label='Send email'
                      icon={<MinusIcon />}
                      onClick={()=>setquantity(prev=>prev-1)}
                    />
                  </HStack>
                  <Button 
                  my={2} 
                  variant='solid' 
                  colorScheme='pink'
                  onClick={()=>deleteToCart(id)}
                  >
                    REMOVE
                  </Button>
                </CardBody>
              </Stack>
            </Card>
          })}


        </VStack>
        <VStack h={'200px'} m={{ sm: "auto", md: '0' }} w={{ base: '100%', sm: "50%", md: '25%' }} border={'solid 2px red'}></VStack>
      </Flex>

    </Container>
  )
}
