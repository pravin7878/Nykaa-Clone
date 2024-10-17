import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import MySwiper from '../../helperComponent/Swiper/Swiper'
import ProductLIstingbyCatagory from '../ProductLIstingbyCatagory'
import { Page1 } from './Page1'
import VideoPlayer from './page2'


export default function HomePage() {
  return (
    <Container  maxW={'container.xl'}>
      <Page1/>
      <VideoPlayer/>
      <div className='my-10'>
        <img src="https://images-static.nykaa.com/uploads/dd133d2a-9b0e-411d-ab27-f189fab8cfa0.jpg?tr=cm-pad_resize,w-1800" alt="" />
      </div>
      <ProductLIstingbyCatagory />
       
      
    </Container>
  )
}
