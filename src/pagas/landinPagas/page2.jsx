import React, { useEffect, useRef } from 'react';

export default function VideoPlayer() {
    const videoRef = useRef(null)

useEffect(()=>{
    videoRef.current.play()
},[])
    return (<div className='mt-5 rounded-md'>
        <img src="https://images-static.nykaa.com/uploads/8fac4e3e-7739-4a83-a7bb-d23fd70daf56.jpg?tr=cm-pad_resize,w-1800" alt="" />

        <video
            poster="https://images-static.nykaa.com/uploads/0968ba8c-1563-4b27-a9aa-269d28a45d82.jpg?tr=cm-pad_resize,w-600"
            loop
            autoPlay
            playsInline
            muted  
            style={{ width: '100%' }} 
            ref={videoRef}
        >
            <source
                src="https://vtsmedia.nykaa.com/display_network_prod_blue/e9b786dc-1c07-4d96-a593-af7de88faca8/2pass-abr-vbv/preset1/8acaf88ed7fa-395a-69d4-70c1-cd687b9e.mp4"
                type="video/mp4"
            />
            <img
                alt="Charlotte Tilbury"
                src="https://images-static.nykaa.com/uploads/0968ba8c-1563-4b27-a9aa-269d28a45d82.jpg?tr=cm-pad_resize,w-600"
                loading="eager"
            />
        </video>
    </div>

    );
}
