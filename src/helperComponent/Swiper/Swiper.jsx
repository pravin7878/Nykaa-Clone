import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './styles.css';

// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';
// import ProductCard from '../../pagas/ProductCard';




export default function MySwiper(props) {
console.log(props);
  console.log(props.autoplay);


  const { children, page} = props

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
        autoplay = {props?.autoplay}
        slidesPerGroup={props?.slidesPerGroup}

        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
        {children}
       
      </Swiper>
    </>
  );
}
