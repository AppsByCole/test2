import React from 'react'

export default function SkillsBlock() {
  return (
    <div className=' bg-neutral-700 flex-col section'>
      <p className='text-6xl text-center'>My Skills</p>

      <div className='flex flex-row flex-wrap h-full justify-evenly'>
        {skillIcons.map(item => (
          <div className='flex md:w-1/4 md:h-1/4 center'>
            <div>
              <img alt={item.name} className='skills' src={item.source} />
              <p className='text-center'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

const skillIcons = [
  {
    name: 'Python', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg'
  },
  {
    name: 'JavaScript', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'NodeJS', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
  },
  {
    name: 'TypeScript', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'HTML', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
  },
  {
    name: 'CSS', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
  },
  {
    name: 'MySQL', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Django', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
  },
  {
    name: 'React', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
  },
  {
    name: 'NextJS', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
  },
  {
    name: 'Material UI', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
  },
  {
    name: 'TailwindCSS', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
  },
  {
    name: 'FireBase', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg'
  },
  {
    name: 'GitHub', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
]
