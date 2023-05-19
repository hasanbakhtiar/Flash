import React, { useContext } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ProductConext } from '../context/ProductContext';

const About = () => {
  const [data] = useContext(ProductConext);
  return (
    <div className='p-5'>
        <h1 className='text-center my-3'>About Page</h1>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(item=>(

      <SwiperSlide><div style={{"position":"relative"}}>
        <img src={item.image} alt="" />
      <h1 style={{"position":"absolute","top":"0"}}>{item.title}</h1>
      </div>
      </SwiperSlide>
      ))}
    
    </Swiper>


    
    </div>
  )
}

export default About