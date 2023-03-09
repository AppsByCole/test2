import React from 'react'

export default function ContactBlock() {
  return (
    <div className='bg-neutral-700 flex flex-col h-full items-center justify-center p-2 screen snappy'>
      <p>Contact Me</p>

      <form className='card bg-neutral-500 form'>

        <span className='formItem'>
          <label htmlFor='firstName'>First Name</label>
          <input className='textInput' id='firstName' name='firstName' type='text' />
        </span>

        <span className='formItem'>
          <label htmlFor='Company'>Company</label>
          <input className='textInput'id='company' name='company'  type='text' />
        </span>

        <span className='formItem'>
          <label htmlFor='Email'>Email</label>
          <input className='textInput'id='email' name='email'  type='email' />
        </span>

        <span className='formItem'>
          <label htmlFor='body'>Body</label>
          <textarea className='textInput h-96'id='body' name='body'  type='text' />
        </span>

      </form>
    </div>
  )
}
