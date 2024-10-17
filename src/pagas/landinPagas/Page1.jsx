import React from 'react'
import MySwiper from '../../helperComponent/Swiper/Swiper'
import { SwiperSlide } from 'swiper/react';

import "../../App.css"


export const Page1 = () => {

    const imagasLinks = [
        "https://images-static.nykaa.com/uploads/7af6b24c-b9dc-46e3-99c7-ba820660de36.png?tr=cm-pad_resize,w-900",
        "https://images-static.nykaa.com/creatives/6d4326f6-8731-421e-90a8-8d8da1a7cb18/default.jpg?tr=cm-pad_resize,w-900",
        "https://images-static.nykaa.com/creatives/f2230563-4d54-4b05-84b4-d858e1c2cd26/default.jpg?tr=cm-pad_resize,w-900",
        "https://images-static.nykaa.com/creatives/a34973d8-8107-40f0-980f-94bdac002d74/default.jpg?tr=cm-pad_resize,w-900",
        "https://images-static.nykaa.com/creatives/8715417f-273b-45e8-a359-4fe3d9912d72/default.jpg?tr=cm-pad_resize,w-900",
        "https://images-static.nykaa.com/creatives/a7e9b218-637d-4cc6-b20d-813bcf516505/default.jpg?tr=cm-pad_resize,w-900",
        "https://images-static.nykaa.com/creatives/cb683f7a-2441-4efb-ad40-5597ee1d4dea/default.jpg?tr=cm-pad_resize,w-900",
        "https://images-static.nykaa.com/creatives/fceb9072-cd92-4637-a380-25d680e1be42/default.jpg?tr=cm-pad_resize,w-900",
        "https://images-static.nykaa.com/creatives/9eb02581-1ca2-481e-8e2f-54c711e5261f/default.jpg?tr=cm-pad_resize,w-900"
    ]



    return (
        <div className='page1_slide'>
            <MySwiper
                page={3}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerGroup={3}
            >
                {imagasLinks?.map((image, ind) => {
                    return <SwiperSlide key={ind}>
                        <img style={{ borderRadius: "5px" }} src={image} alt={ind} />
                    </SwiperSlide>
                })}
            </MySwiper>
        </div>
    )
}
