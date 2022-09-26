import {useNavigate} from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  const handleResume = () => {
    navigate('/resume')
  }

  const handleContact = () => {
    navigate('/contact')
  }

  return (
    <div className='header justify-evenly select-none'>

      <a className='link' href='/resume' onClick={handleResume}>Resume</a>

      <span>{"-"}</span>
      
      <a className='link' href='/contact' onClick={handleContact}>Contact Me</a>

      <span>{"-"}</span>

      <a className='link' href="https://github.com/AppsByCole">GitHub</a>

    </div>
  )
}
