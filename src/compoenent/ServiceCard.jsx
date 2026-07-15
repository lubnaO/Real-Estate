import React from 'react'

const ServiceCard = ({service, Icon}) => {
  return (
    <div className='group p-8  bg-white/60 text-black border border-primary/15  rounded-2xl transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-2xl hover:translate-y-4 hover:border hover:border-white'>
      <div className='flex flex-col'>
       <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
    <Icon className="h-8 w-8 text-white" />
  </div>
</div>
        <p className='mt-5 font-header text-2xl'>{service.title}</p>
        <p className='mt-5 font-text duration-200 text-primary/60 group-hover:text-white'>{service.description}</p>
      </div>

    </div>
  )
}

export default ServiceCard