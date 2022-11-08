import React from 'react'

export default function HeroBlock() {
  return (
    <div className='flex-col items-center justify-evenly section snappy'>

      <div className='h-1/5' />

      <span 
        className='
        lg:text-3xl lg:pr-60 select-none sm:text-xl'>
        One day I'll be a programmer.
      </span>

      <span 
        className='
        lg:text-3xl  lg:pl-60 select-none sm:text-xl'>
        Right now I'm an amateur-grammer.
      </span>

      <span 
        className='
        lg:text-lg  md:pr-80 select-none sm:text-md md:w-7/12 sm:w-8/12 text-center'>
        If you thought this would be serious, then you don't know anything about me. But coming here is a good start.
      </span>

      <div className='h-1/6' />

    </div>
  )
}
