import React from 'react'

export default function HomeScreen() {
  return (
    <div className='screen flex-col'>

      <div className='card flex flex-col h-2/3 items-center justify-evenly w-full'>

        <div />

        <span 
          className='
          lg:text-3xl pr-60 select-none sm:text-xl'>
          One day I'll be a programmer.
        </span>

        <span 
          className='
          lg:text-3xl  pl-60 select-none sm:text-xl'>
          Right now I'm an amateur-grammer.
        </span>

        <span 
          className='
          lg:text-lg  md:pr-80 select-none sm:text-md md:w-7/12 sm:w-8/12'>
          If you though this would be serious, then you don't know anything about me. But coming here is a good start.
        </span>

        <div />

      </div>

    </div>
  )
}
