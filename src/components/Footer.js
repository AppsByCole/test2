import {useNavigate} from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  const handleResume = () => {
    navigate('/resume')
  }

  const handleContact = () => {
    navigate('*')
  }

  return (
    <div className='header'>
      <a href='/resume' onClick={handleResume}>Resume</a>
      <span>{"-"}</span>
      <a href='*' onClick={handleContact}>Contact Me</a>
      <span>{"-"}</span>
      <a href="https://github.com/AppsByCole">GitHub</a>
    </div>
  )
}
