import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import MySwiper from '../../helperComponent/Swiper/Swiper'
import ProductLIstingbyCatagory from '../ProductLIstingbyCatagory'

export default function HomePage() {
  return (
    <Container  maxW={'container.xl'}>
      <ProductLIstingbyCatagory />
    </Container>
  )
}
