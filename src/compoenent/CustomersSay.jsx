import React from 'react'
import TitleHeading from './TitleHeading'
import {testimonial} from '../assets/data'
import TestimonialCard from './TestimonialCard'
import customerDeal from '../assets/deal.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import MotionSection from './MotionSection'

const CustomersSay = () => {
  return (
  <MotionSection id="customers" className='scroll-mt-24'>
        <div className='max-w-7xl mx-auto'>
          <TitleHeading title='اراء عملائنا'/>
          <div className='mt-10 mb-10 grid grid-cols-1 px-3 gap-2'>
           {/* <div className='relative '>
            <div className='absolute inset-0 w-fit h-fit bg-black/50'></div>
            <img src={customerDeal} className='rounded-2xl shadow-md' alt="" />
           </div> */}
           <Swiper
             modules={[Autoplay, Pagination]}
             spaceBetween={16}
             slidesPerView={2}
             autoplay={{ delay: 4000, disableOnInteraction: false }}
             pagination={{ clickable: true }}
             className='testimonial-swiper h-full w-full !pb-12 px-5 md:px-0'
           >
             {testimonial.map((item) => (
               <SwiperSlide key={item.name} className='!flex h-auto !items-center'>
                 <TestimonialCard testimonial={item}/>
               </SwiperSlide>
             ))}
           </Swiper>
          </div>

            </div>
    </MotionSection>
  )
}

export default CustomersSay
