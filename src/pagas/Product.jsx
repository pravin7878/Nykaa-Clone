import { useState, useEffect } from "react"

import ProductCard from './ProductCard'
import MySwiper from '../helperComponent/Swiper/Swiper'
import { SwiperSlide } from 'swiper/react'

import { Container, Heading, Image } from '@chakra-ui/react'
import LodingIdicator from './LodingIdicator'

export default function Product({products,isLoading}) {
    const [page, setpage] = useState(3)
    const { skincare, fragrances, womensbags, beauty, tops, womenswatches, womensdresses, womensjewellery, womensshoes } = products

    // setpage({sm:'1',md:'2',lg:'3'})
    // console.log(page)
    return (
       <>
       <Container maxW={'container.lg'}>
            <Heading my={10}>beauty</Heading>
            {isLoading ? <LodingIdicator/> :
                <MySwiper page={4}>
                {beauty?.map((fragrance, ind) => {
                    return <SwiperSlide key={ind}>
                        <ProductCard {...fragrance} />
                    </SwiperSlide>
                })}
            </MySwiper>}


            <Heading my={10}>fragrances</Heading>
            {isLoading ? <LodingIdicator/> :
            <MySwiper page={3}>
                {fragrances?.map((fragrance, ind) => {
                    return <SwiperSlide key={ind}>
                        <ProductCard {...fragrance} />
                    </SwiperSlide>
                })}
            </MySwiper>
}

            <Heading my={10}>skincare</Heading>
            {isLoading ? <LodingIdicator/> :
            <MySwiper page={3}>
                {skincare?.map((fragrance, ind) => {
                    return <SwiperSlide key={ind}>
                        <ProductCard {...fragrance} />
                    </SwiperSlide>
                })}
            </MySwiper>
}
            <Heading my={10}>womensjewellery</Heading>
            {isLoading ? <LodingIdicator/> :
            <MySwiper page={3}>
                {womensjewellery?.map((fragrance, ind) => {
                    return <SwiperSlide key={ind}>
                        <ProductCard {...fragrance} />
                    </SwiperSlide>
                })}
            </MySwiper>
}
            <Heading my={10}>womensbags</Heading>
            {isLoading ? <LodingIdicator/> :
            <MySwiper page={3}>
                {womensbags?.map((fragrance, ind) => {
                    return <SwiperSlide key={ind}>
                        <ProductCard {...fragrance} />
                    </SwiperSlide>
                })}
            </MySwiper>
}
            <Heading my={10}>womensdresses</Heading>
            {isLoading ? <LodingIdicator/> :
            <MySwiper page={3}>
                {womensdresses?.map((fragrance, ind) => {
                    return <SwiperSlide key={ind}>
                        <ProductCard {...fragrance} />
                    </SwiperSlide>
                })}
            </MySwiper>
}

            <Heading my={10}>tops</Heading>
            {isLoading ? <LodingIdicator/> :
            <MySwiper page={3}>
                {tops?.map((fragrance, ind) => {
                    return <SwiperSlide key={ind}>
                        <ProductCard {...fragrance} />
                    </SwiperSlide>
                })}
            </MySwiper>
}
            <Heading my={10}>womensshoes</Heading>
            {isLoading ? <LodingIdicator/> :
            <MySwiper page={3}>
                {womensshoes?.map((fragrance, ind) => {
                    return <SwiperSlide key={ind}>
                        <ProductCard {...fragrance} />
                    </SwiperSlide>
                })}
            </MySwiper>
}
        </Container>
       </>
    )
}
