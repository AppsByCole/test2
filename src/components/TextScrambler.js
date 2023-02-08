import { useState } from 'react'

export default function TextScrambler({sourceText, classNames}) {
  const alphabet = Array.from({length: 52}, (_, i) => {
    const base = i < 26 ? 97 : 65
    return String.fromCharCode(base + i % 26)
  });

  const [toScramble, setToScramble] = useState(sourceText)

  let interval = (null)

  const scramble = () => {
    let iteration = 0

    clearInterval(interval)

    interval = setInterval(() => {
      const scrambledText = toScramble.split('')
      .map((letter, index) => {
        if (interval == null) return

        if (index < iteration || letter === ' ') return letter
        return alphabet[Math.floor(Math.random() * alphabet.length)]
      })
      .join('')

      setToScramble(scrambledText)

      if (iteration >= toScramble.length) clearInterval(interval)
  
      iteration += 1 / 2
    }, 50)
  }

  return (
    <p 
      className={`font-mono ${classNames}`}
      onMouseOver={scramble}
    >
      {toScramble}
    </p>
  )
}
