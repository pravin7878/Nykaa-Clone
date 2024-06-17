import React, { useContext, useEffect } from 'react'
import { Button, Container, HStack, Heading, Image, Stack, Text, Toast, VStack, useToast, Flex, IconButton, Input, Box } from "@chakra-ui/react";
import { cartContext } from '../context/CartContextProvider';

// import {BeatLoader}
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';

import { AddIcon, ArrowBackIcon, ArrowForwardIcon, MinusIcon } from "@chakra-ui/icons"
import { useState } from 'react';
import { AlertDialogExample } from '../helperComponent/AlertDilog';
import { Authcontext } from '../context/AuthContextProvider';


export function Cart() {
  const { cartData, deleteToCart, hendelQuantity, quantity,buyNow } = useContext(cartContext)

  const { authState: { isLogned }, openModal } = useContext(Authcontext)
  const navigate = useNavigate()

  console.log(cartData);
  const [isPaying, setisPaying] = useState(false)

  const [bagDetails, setbagDetails] = useState({
    totleMRP: 0,
    totleDiscount: 0,
    shipingCarge: 79,
    totlePrice: 0
  })

  useEffect(() => {
    const storedBagInfo = JSON.parse(localStorage.getItem('orderInfo')) || {
      totleMRP: 0,
      totleDiscount: 0,
      shipingCarge: 79,
      totlePrice: 0,
    }

    setbagDetails(storedBagInfo)
  }, []);

  const getBagDetail = () => {
    let totelPrice = (cartData?.map(item => item.bagprice))
    const totelMRP = Math.floor(totelPrice.reduce((curr, acc) => curr + acc, 0))
    // console.log('totelMRP',totelMRP);

    const disCount = cartData?.map((item) => {
      const { discountPercentage, bagprice } = item
      const bagDiscount = ((discountPercentage / 100) * bagprice)
      return bagDiscount;
    })

    const toteldisCount = Math.floor(disCount.reduce((curr, acc) => curr + acc, 0))

    // console.log(toteldisCount);

    const totelPayAmount = totelMRP - toteldisCount

    // console.log(totelPayAmount);
    let newbagInfo = {
      totleMRP: totelMRP,
      totleDiscount: toteldisCount,
      shipingCarge: 79,
      totlePrice: totelPayAmount
    }

    setbagDetails(newbagInfo)
    localStorage.setItem('orderInfo', JSON.stringify(newbagInfo))
  }

  // const buyNow = (data) => {
  //   if (!isLogned) {
  //     openModal()
  //   }
  //   else {
  //     navigate('/order',
  //       {state: data}
  //     );
  //   }
  // }

  const hendelOrder = (data) => {
    setisPaying(true)
    setTimeout(() => {
      setisPaying(false)
      buyNow(data)
    }, 1000)
  }

  useEffect(() => {
    getBagDetail()
  }, [quantity, cartData])


  const { totleMRP, totleDiscount, totlePrice, shipingCarge } = bagDetails

  
  return (<>{!cartData.length ?
    <Container maxW={'container.lg'} my={5}>
      <Flex direction={'column'} gap={5} m={'auto'} w={'40%'} justify={'Center'} align={'Center'}>
        <Image src='https://www.reliancedigital.in/build/client/images/emptycart.png' />
        <Text fontWeight={'600'}>Your Shopping Bag is empty</Text>
        <Text>This feels too light! Go on, add all your favourites</Text>
        <Button colorScheme='pink'>
          <Link to={'/'}>Start Shopping</Link>
        </Button>
      </Flex>
    </Container>
    :
    <Container maxW={'container.lg'} my={5}>
      <Button variant={'outline'} colorScheme='pink' my={5} fontSize={20}>
        <Link to={'/'}>
          <ArrowBackIcon /> Home
        </Link>
      </Button>
      <Flex w={'100%'} justify='space-between'
        direction={{ base: "column", md: 'row' }}
        align={'top'}
      >
        <VStack w={{ sm: '100%', md: '70%' }} my={5}>
          {cartData?.map((item) => {
            const { id, title, description, images: [img1], price, rating, discountPercentage, category, availabilityStatus, returnPolicy, shippingInformation, stock, brand, minimumOrderQuantity, bagprice } = item

            const discount = Math.ceil(bagprice - (Math.floor((discountPercentage / 100) * bagprice)))
            
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
                  <Flex justify={'space-between'}>
                    <Heading size='md'>{title}</Heading>
                    <AlertDialogExample itemId={id} />
                  </Flex>


                  <Text py='2'>
                    {category}
                  </Text>
                  <HStack>
                    <Text fontWeight={'400'} textDecoration={'line-through'}>${bagprice}</Text>
                    <Text fontWeight={'600'}>${discount}</Text>
                    <Text fontWeight={'500'}>{discountPercentage} % off</Text>
                  </HStack>
                  <Text py='2'>
                    Totel stock available: {stock}
                  </Text>

                  <HStack>
                    <IconButton
                      variant='outline'
                      colorScheme='teal'
                      icon={<AddIcon />}
                      onClick={() => hendelQuantity(id, "+")}
                    />
                    <Input
                      variant={'outline'}
                      colorScheme='black'
                      w={'20%'}
                      value={minimumOrderQuantity}
                      textAlign={'center'}
                      fontSize={'20px'}
                    />

                    <IconButton
                      variant='outline'
                      colorScheme='teal'
                      icon={<MinusIcon />}
                      onClick={() => hendelQuantity(id, "-")}
                    />
                  </HStack>
                </CardBody>
              </Stack>
            </Card>
          })}


        </VStack>

        <Box p={3} m={{ sm: "auto", md: '0' }} w={{ base: '100%', sm: "100%", md: '30%' }}>
          <VStack border={'solid 1px blue'} borderRadius={5} boxShadow={'dark-lg'} mt={2} p={3}>
            <Heading fontSize={'lg'}>Price Details</Heading>

            <Flex w={'96%'} justify={'space-between'} >
              <Text>Bag MRP(item {cartData.length}) -</Text>
              <Text >${totleMRP}</Text>
            </Flex>

            <Flex justify={'space-between'} w={'96%'}>
              <Text>Bag Discount -</Text>
              <Text >${totleDiscount}</Text>
            </Flex>

            <Flex justify={'space-between'} w={'96%'}>
              <Text>Shipping Charge -</Text>
              <Text fontWeight={'200'} textDecoration={'line-through'} >${shipingCarge} </Text>
              <Text color={'green'}>Free </Text>
            </Flex>

            <Flex justify={'space-between'} w={'96%'}>
              <Text>You Pay -</Text>
              <Text>${totlePrice}</Text>
            </Flex>
            <Flex justify={'space-between'} w={'96%'}>
              <Box w={'45%'} bg={'lightyellow'} px={1}>
                <Text>${totlePrice}</Text>
                <Text fontSize={'8'}>Grand Total</Text>
              </Box>
              <Box w={'45%'}>
                <Button
                  w={'100%'}
                  fontSize={'10px'}
                  rightIcon={<ArrowForwardIcon size={'10px'} />}
                  variant={'solid'}
                  colorScheme='pink'
                  isLoading={isPaying}
                  loadingText='Paying'
                  onClick={()=>hendelOrder({item:cartData.length, price : totlePrice})}
                >
                  Proceed To Pay
                </Button>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>

    </Container>
  }
  </>
  )
}
