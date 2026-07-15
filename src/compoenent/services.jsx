import React from 'react'
import TitleHeading from './TitleHeading'
import { services} from '../assets/data'
import ServiceCard from './ServiceCard'
import MotionSection from './MotionSection'
const Services = () => {
  return (
    <MotionSection id="service" className='relative scroll-mt-24'>
        <div className='max-w-7xl mx-auto'>
          <TitleHeading title='الخدمات' description='نقدم مجموعة متكاملة من الخدمات العقارية التي تساعدك على العثور على العقار المناسب أو تحقيق أفضل عائد لاستثمارك'/>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mt-10 mb-10 px-5 md:px-0'>
            {services.map((service)=>{
              return <ServiceCard service={service} Icon={service.Icon}/>
            })}
          </div>
        </div>
    </MotionSection>
  )
}

export default Services
