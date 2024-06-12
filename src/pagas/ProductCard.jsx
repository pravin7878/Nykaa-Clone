import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, Text, Image, Divider, ButtonGroup, Button, Container, HStack } from '@chakra-ui/react'

import { Rate } from "antd"
import { Link } from 'react-router-dom'


export default function ProductCard({ ...data }) {
  // console.log(data);
  const { id, title, description, images: [img1, img2, img3], price, rating, discountPercentage
  } = data
  return (<Box h={'500px'}>
    <Link to={`/productview/${id}`}>
      <Card maxW='sm' border={'solid 1px black'} cursor={'pointer'} >
        <CardBody h={'400px'}>
          <Box h={'200px'}>
            <Image
              w={'100%'}
              src={img1}
              alt={title}
              borderRadius='lg'
            />
          </Box>

          <Stack mt='6' spacing='1'>
            <Heading size='md'>{title}</Heading>

            <HStack justify={'Center'}>
              <Text fontWeight={'400'} textDecoration={'line-through'}>${price}</Text>
              <Text fontWeight={'600'}>${Math.ceil(price - ((discountPercentage / 100) * price))}</Text>
            </HStack>

            <Text fontWeight={'500'}>{discountPercentage} % off</Text>
            <Text ><Rate disabled defaultValue={rating} /></Text>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
        {/* <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
      </Card>
    </Link>
  </Box>
  )
}
