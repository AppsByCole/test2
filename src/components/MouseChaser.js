import {useRef, useState} from 'react'

export default function MouseChaser() {
  const [position, setPosition] = useState({x: 0, y: 0})
  const blob = useRef(null)

  const handleMouseMove = (e) => {
    const rect = blob.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI
    setPosition({x: e.clientX, y: e.clientY})
    blob.current.style.transform = `translate(${position.x - 175}px, ${position.y - 275}px) rotate(${angle}deg)`
  }

  return (
    <div 
      className='
        h-full 
        w-full 
      '
      onMouseMove={handleMouseMove}
    >

      <h1>{`Mouse Position: ${position.x} - ${position.y}`}</h1>

      <div
        className='
          aspect-square
          bg-gradient-to-r from-blue-500 to-red-700
          blur-3xl
          duration-500
          ease-linear
          h-96
          opacity-40
          relative
          rounded-full  
        '
        id='blob'
        ref={blob}
      ></div>

      {/* <style>
        {`
          @keyframes move {
            from {
              transform: translate(${blob.current.getBoundingClientRect.left}, ${blob.current.getBoundingClientRect.top});
            }
            to {
              transform: translate(${position.x - 175}px, ${position.x - 275}px);
            }
          }
        `}
      </style> */}
      
    </div>
  )
}
