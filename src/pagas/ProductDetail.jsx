import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
// import ProductCard from './ProductCard';
import { Container, HStack, VStack, useToast } from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, Text, Image, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { cartContext } from '../context/CartContextProvider';
import { Rate } from "antd"
import { Link as RouteLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

// from scriot
import { getData } from '../script/getRequast';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { LodingIdicator2 } from './LodingIdicator';
import ErrorIndicator from './ErrorIndicator';
import { Authcontext } from '../context/AuthContextProvider';
import OrderSuccessPage from './OrderSuccessPage';

export default function ProductDetail() {
  const [isLoding, setisLoding] = useState(false)
  const [isErr, setisErr] = useState(false)

  const { product_id } = useParams()
  const toast = useToast()
  const Nevigate = useNavigate()
  const [product, setproduct] = useState({})
  const { addToCart } = useContext(cartContext)
  const { authState: { isLogned }, openModal } = useContext(Authcontext)
  const navigate = useNavigate()

  
  const getProduct = async (id) => {
    setisLoding(true)
    try {
      const product = await getData(`https://dummyjson.com/products/${id}`)
      setproduct(product)
      setisLoding(false)
    } catch (error) {
      setisErr(true)
      setisLoding(false)
    }

  }

  useEffect(() => {
    getProduct(product_id)
  }, [])


  const hendelCart = (product) => {
    toast({
      title: 'Product Added To Cart',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top'
    })
    Nevigate('/')
    addToCart(product)
  }

  const buyNow = (data) => {
    if (!isLogned) {
      openModal()
    }
    else {
      navigate('/order',
        {state: data}
      );
    }
  }


  const { id, title, description, price, images, rating, discountPercentage, category, availabilityStatus, warrantyInformation
  } = product


  if (isLoding) {
    return <LodingIdicator2 />
  }

  if (isErr) {
    return <ErrorIndicator />
  }

  return (<Container maxW='container.md' my={5} >
    <Button variant={'outline'} colorScheme='pink' my={5} fontSize={20}>
      <RouteLink to={'/'}>
        <ArrowBackIcon /> Home
      </RouteLink>
    </Button>
    <Card border={'solid 1px black'} cursor={'pointer'} >
      <HStack>
        <VStack spacing={1}>
          {images?.map((img, ind) => {
            return <Image
              key={ind}
              src={img}
              alt={title}
              borderRadius='lg'
              h={'150px'}
              border={'dashed'}
            />
          })}
        </VStack>

        <CardBody>

          <Stack mt='6' spacing='1'>
            <Heading size='md'>{title}</Heading>
            <Text>
              {description}
            </Text>
            <Text fontWeight={'normal'}>
              {description}
            </Text>
            <Text>
              {description}
            </Text>
            <Text color='blue.600' fontSize='xl'>
              Price : {price}
            </Text>
            <Text color='blue.600' fontSize='xl'>
              Dp : {Math.ceil(price - Math.floor((discountPercentage / 100) * price))}
            </Text>
            <Text ><Rate disabled defaultValue={rating} /></Text>
            <Text>availabilityStatus : {availabilityStatus}</Text>
            <Text>warrantyInformation : {warrantyInformation}</Text>

            <CardFooter>
              <HStack spacing={5}>
                <Button variant='solid' colorScheme='pink'
                  onClick={()=>buyNow({price : price,item:1})}
                >
                  Buy Now
                </Button>
                <Button
                  variant='solid' colorScheme='pink'
                  onClick={() => hendelCart(product)}
                >
                  Add To Cart
                </Button>
              </HStack>
            </CardFooter>
          </Stack>
        </CardBody>

      </HStack>
    </Card>

  </Container>)

}