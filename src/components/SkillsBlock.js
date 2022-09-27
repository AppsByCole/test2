import React from 'react'

export default function SkillsBlock() {
  return (
    <div className=' bg-neutral-700 flex-col section'>

      <p className='text-5xl text-center mb-1'>My Skills</p>

      <div className='flex flex-row flex-wrap h-full justify-evenly select-none'>
        {skillIcons.map(item => (
          <div className='flex center mx-1 w-1/5'>

            <a className='group' href={item.link} rel="noreferrer" target='_blank'>

              <img alt={item.name} className='skills' src={item.source} />

              <p 
                className='
                  group-hover:duration-200
                  group-hover:ease-linear 
                  group-hover:text-red-900 
                  group-hover:font-bold
                  text-center 
              '>
                {item.name}
              </p>

            </a>

          </div>
        ))}
      </div>

    </div>
  )
}

const skillIcons = [
  {
    name: 'Python', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
    link: 'https://www.python.org/'
  },
  {
    name: 'JavaScript', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    link: 'https://www.javascript.com/'
  },
  {
    name: 'Node JS', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    link: 'https://nodejs.org/en/',
  },
  {
    name: 'TypeScript', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'HTML', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
    link: 'https://html.com/'
  },
  {
    name: 'CSS', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
    link: 'https://www.w3.org/'
  },
  {
    name: 'MySQL', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    link: 'https://www.mysql.com/'
  },
  {
    name: 'Django', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    link: 'https://www.djangoproject.com/'
  },
  {
    name: 'React', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    link: 'https://reactjs.org/'
  },
  {
    name: 'NextJS', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    link: 'https://nextjs.org/'
  },
  {
    name: 'Material UI', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    link: 'https://mui.com/'
  },
  {
    name: 'Tailwind CSS', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
    link: 'https://tailwindcss.com/'
  },
  {
    name: 'Firebase', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
    link: 'https://firebase.google.com/'
  },
  {
    name: 'Git', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg',
    link: 'https://git-scm.com/'
  },
  {
    name: 'Electron', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
    link: 'https://www.electronjs.org/'
  },
]
