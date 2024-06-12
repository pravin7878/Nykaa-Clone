import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// import ProductCard from '../../pagas/ProductCard';




export default function MySwiper({children,page}) {

const [ScreenSize, setScreenSize] = useState(window.innerWidth)
const [prePage,setprePage] = useState(page)



const breakpoints = {
  base: 0,
  sm: 480,
  md: 768, 
  lg: 992,
  xl: 1280,
}

const {base,sm,md,lg,xl} = breakpoints

const updateSlide = ()=>{
 const screensize = window.innerWidth

  if(screensize > lg){
    setprePage(page)
    }
    else if(screensize < lg && screensize > md){
      setprePage(3)
    }
    else if(screensize > sm && screensize < md){
      setprePage(2)
    }
    else{
      setprePage(1)
    }
}

useEffect(()=>{
  const hendelResize = ()=>{
    setScreenSize(window.innerWidth)
    updateSlide()
  }
  
window.addEventListener('resize',hendelResize)

// initial this will called
updateSlide()

return ()=>{
  window.removeEventListener('resize',hendelResize)
}
},[])

  return (
    <>
      <Swiper
        slidesPerView={prePage}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
       
      </Swiper>
    </>
  );
}
