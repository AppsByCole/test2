import { useState } from 'react'
import TextScrambler from '../components/TextScrambler'

export default function TestScreen() {
  const [sourceText, setSourceText] = useState('Necrosaint')

  return (
    <div className='screen-centered'>
      <TextScrambler sourceText={sourceText}/>
    </div>
  )
}
