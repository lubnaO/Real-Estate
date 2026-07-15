import React from 'react'
import dealImage from '../assets/deal.png'
import MotionSection from './MotionSection'
import { motion } from "framer-motion";

const SpecialDeal = () => {
  return (
    <MotionSection id='special-deal' className='px-4 py-16 md:py-24'>
      <div className='mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-sm md:grid-cols-2'>
        <motion.div
          initial={{ scale: 0.30, x: 0 }}
        animate={{ scale: [1, 1.08, 1.10], x: [0, 19, -12, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className='min-h-72 md:min-h-full'>
          <img
            src={dealImage}
            alt='تسليم مفاتيح عقار'
            className='h-full w-full object-cover'
          />
        </motion.div>

        <div className='flex flex-col justify-center p-8 text-right md:p-14' dir='rtl'>
          <p className='w-fit rounded-full font-bold bg-primary/10 px-4 py-2 font-text text-sm text-primary'>
            عرض تقسيط حصري
          </p>
          <h2 className='mt-5 font-header text-3xl font-bold leading-tight text-primary md:text-4xl'>
            امتلك شقتك الآن وقسّط حتى 5 سنوات
          </h2>
          <p className='mt-5 font-text  text-primary/65'>
            فرصة مميزة لامتلاك عقار في مشروع سكني حديث، بدفعة أولى ميسّرة وأقساط شهرية مرنة تمتد حتى خمس سنوات، مع متابعة كاملة من اختيار العقار حتى استلام المفاتيح.
          </p>

          <div className='mt-8 flex flex-wrap justify-end gap-3 font-text text-sm text-primary'>
            <span className='rounded-full bg-primary/10 px-4 py-2'>تقسيط حتى 5 سنوات</span>
            <span className='rounded-full bg-primary/10 px-4 py-2'>دفعة أولى ميسّرة</span>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default SpecialDeal
