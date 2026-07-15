import React from 'react'
import { FaStar } from 'react-icons/fa'

const TestimonialCard = ({testimonial}) => {
  return (
       <div className='group w-full p-8 bg-white/60 text-black border border-primary/15 rounded-2xl transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-2xl hover:translate-y-4 hover:border hover:border-white'>
      <div className='flex flex-col text-right' dir='rtl'>
        <div className='flex justify-end gap-1 text-primary group-hover:text-white' aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: testimonial.rating }, (_, index) => (
            <FaStar key={index} aria-hidden='true' />
          ))}
        </div>
        <p className='mt-5 font-header text-2xl'>{testimonial.name}</p>
        <p className='mt-5 font-text duration-200 text-primary/60 group-hover:text-white'>{testimonial.review}</p>
      </div>

    </div>
  )
}

export default TestimonialCard
