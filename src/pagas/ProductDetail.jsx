import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
// import ProductCard from './ProductCard';
import { Container, HStack, VStack, useToast } from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, Text, Image, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { cartContext } from '../context/CartContextProvider';
import { Rate } from "antd"


// from scriot
import { getData } from '../script/getRequast';


export default function ProductDetail() {
  const { product_id } = useParams()
  const toast = useToast()
  const Nevigate = useNavigate()
  const [product, setproduct] = useState({})
const {addToCart} = useContext(cartContext)
  console.log(product);

  const getProduct = async (id) => {
    const product = await getData(`https://dummyjson.com/products/${id}`)
    setproduct(product)
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

  const { id, title, description, price, images, rating, discountPercentage, category, availabilityStatus, warrantyInformation
  } = product
  // console.log(images[0]);
  return (<Container maxW='container.md' my={5}>

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
                <Button variant='solid' colorScheme='pink'>
                  Buy Now
                </Button>
                <Button
                  variant='solid' colorScheme='pink'
                  onClick={()=>hendelCart(product)}
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