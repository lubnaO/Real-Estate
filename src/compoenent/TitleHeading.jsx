import React from 'react'

const TitleHeading = ({  title, description}) => {
  return (
    <div className={"mx-auto max-w-3xl text-center px-3 mt-20"}>
      <h2 className="font-header text-4xl font-bold leading-tight text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 font-text  text-primary/60 md:text-lg">{description}</p>
      )}
    </div>
  )
}

export default TitleHeading